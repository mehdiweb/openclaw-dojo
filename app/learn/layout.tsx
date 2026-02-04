'use client';

import { getFreeModules, getBuilderModules, getArchitectModules } from '@/lib/modules';
import { LearningSidebar } from '@/components/learn/learning-sidebar';

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const freeModules = getFreeModules();
    const builderModules = getBuilderModules();
    const architectModules = getArchitectModules();

    return (
        <div className="flex min-h-screen">
            <LearningSidebar
                freeModules={freeModules}
                builderModules={builderModules}
                architectModules={architectModules}
            />
            <main className="flex-1 bg-[#FFFDF7]">
                {children}
            </main>
        </div>
    );
}
