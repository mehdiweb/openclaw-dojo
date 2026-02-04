'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import {
    OnboardingState,
    INITIAL_STATE,
    WIZARD_STEPS,
    saveOnboardingState,
    loadOnboardingState,
    clearOnboardingState
} from '@/lib/onboarding-flow';
import { WelcomeStep } from './steps/welcome-step';
import { OSSelector } from './steps/os-selector';
import { PrerequisitesStep } from './steps/prerequisites-step';
import { InstallationStep } from './steps/installation-step';
import { APIKeyStep } from './steps/api-key-step';
import { ChannelSelector } from './steps/channel-selector';
import { ConnectChannelStep } from './steps/connect-channel-step';
import { TestStep } from './steps/test-step';
import { SuccessCelebration } from './steps/success-celebration';

interface OnboardingWizardProps {
    isOpen: boolean;
    onClose: () => void;
}

export function OnboardingWizard({ isOpen, onClose }: OnboardingWizardProps) {
    const [state, setState] = useState<OnboardingState>(INITIAL_STATE);
    const [showExitConfirm, setShowExitConfirm] = useState(false);

    // Load saved state on mount
    useEffect(() => {
        const saved = loadOnboardingState();
        if (saved && !saved.completed) {
            setState(saved);
        }
    }, []);

    // Save state on change
    useEffect(() => {
        if (isOpen) {
            saveOnboardingState(state);
        }
    }, [state, isOpen]);

    const handleNext = (updates?: Partial<OnboardingState>) => {
        setState(prev => ({
            ...prev,
            ...updates,
            currentStep: prev.currentStep + 1
        }));
    };

    const handleBack = () => {
        setState(prev => ({
            ...prev,
            currentStep: Math.max(0, prev.currentStep - 1)
        }));
    };

    const handleComplete = () => {
        setState(prev => ({ ...prev, completed: true }));
        clearOnboardingState();
    };

    const handleExit = () => {
        setShowExitConfirm(true);
    };

    const confirmExit = () => {
        setShowExitConfirm(false);
        onClose();
    };

    const cancelExit = () => {
        setShowExitConfirm(false);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        // Only close if clicking the backdrop itself, not its children
        if (e.target === e.currentTarget) {
            handleExit();
        }
    };

    if (!isOpen) return null;

    const currentStepData = WIZARD_STEPS[state.currentStep];
    const progress = ((state.currentStep + 1) / WIZARD_STEPS.length) * 100;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={handleBackdropClick}
        >
            {/* Wizard Container */}
            <div className="relative bg-[#FFFDF7] border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">

                {/* Header */}
                <div className="border-b-2 border-black p-6">
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={handleExit}
                            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
                        >
                            ← Exit
                        </button>
                        <div className="text-sm font-semibold text-gray-700">
                            Step {state.currentStep + 1} of {WIZARD_STEPS.length}
                        </div>
                        <button
                            onClick={handleExit}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            aria-label="Close wizard"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#FFD54F] transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Step Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-4">
                        {currentStepData?.title}
                    </h2>
                    <p className="text-gray-600 mt-1">
                        {currentStepData?.description}
                    </p>
                </div>

                {/* Step Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {state.currentStep === 0 && (
                        <WelcomeStep onNext={handleNext} />
                    )}
                    {state.currentStep === 1 && (
                        <OSSelector
                            selectedOS={state.os}
                            onNext={handleNext}
                        />
                    )}
                    {state.currentStep === 2 && (
                        <PrerequisitesStep
                            os={state.os!}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                    {state.currentStep === 3 && (
                        <InstallationStep
                            os={state.os!}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                    {state.currentStep === 4 && (
                        <APIKeyStep
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                    {state.currentStep === 5 && (
                        <ChannelSelector
                            selectedChannel={state.channel}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                    {state.currentStep === 6 && (
                        <ConnectChannelStep
                            channel={state.channel!}
                            os={state.os!}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                    {state.currentStep === 7 && (
                        <TestStep
                            channel={state.channel!}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                    {state.currentStep === 8 && (
                        <SuccessCelebration
                            channel={state.channel!}
                            onComplete={handleComplete}
                            onClose={onClose}
                        />
                    )}
                </div>
            </div>

            {/* Exit Confirmation Modal */}
            {showExitConfirm && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                    <div className="bg-white border-2 border-black rounded-lg p-6 max-w-sm mx-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            Exit Setup?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Your progress will be saved. You can continue later from where you left off.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={cancelExit}
                                className="flex-1 px-4 py-2 border-2 border-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Continue Setup
                            </button>
                            <button
                                onClick={confirmExit}
                                className="flex-1 px-4 py-2 bg-gray-900 text-white border-2 border-black rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
