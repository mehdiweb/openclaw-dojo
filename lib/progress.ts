'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'openclaw-progress';

/**
 * Get array of completed module IDs from localStorage
 */
export function getProgress(): string[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

/**
 * Mark a module as complete
 */
export function markComplete(moduleId: string): void {
    if (typeof window === 'undefined') return;
    const progress = getProgress();
    if (!progress.includes(moduleId)) {
        progress.push(moduleId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        // Trigger storage event for other components
        window.dispatchEvent(new Event('storage'));
    }
}

/**
 * Check if a module is complete
 */
export function isComplete(moduleId: string): boolean {
    return getProgress().includes(moduleId);
}

/**
 * Get completion percentage
 */
export function getProgressPercentage(total: number): number {
    if (total === 0) return 0;
    return Math.round((getProgress().length / total) * 100);
}

/**
 * Get the next incomplete module ID
 */
export function getNextIncompleteModule(allModuleIds: string[]): string | null {
    const completed = getProgress();
    for (const id of allModuleIds) {
        if (!completed.includes(id)) {
            return id;
        }
    }
    return null;
}

/**
 * Reset all progress (useful for testing)
 */
export function resetProgress(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('storage'));
}

/**
 * React hook for progress tracking
 */
export function useProgress() {
    const [completedModules, setCompletedModules] = useState<string[]>([]);

    useEffect(() => {
        // Load initial progress
        setCompletedModules(getProgress());

        // Listen for storage changes
        const handleStorageChange = () => {
            setCompletedModules(getProgress());
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const markAsComplete = (moduleId: string) => {
        markComplete(moduleId);
        setCompletedModules(getProgress());
    };

    return {
        completedModules,
        markAsComplete,
        isComplete: (moduleId: string) => completedModules.includes(moduleId),
    };
}
