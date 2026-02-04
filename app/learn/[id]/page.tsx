import { notFound } from 'next/navigation';
import { getModuleById, getFreeModules } from '@/lib/modules';
import { ModuleContent } from '@/components/learn/module-content';
import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import { CommandBlock } from '@/components/learn/command-block';

// Custom components for MDX
const components = {
    CommandBlock,
};

export async function generateStaticParams() {
    const freeModules = getFreeModules();
    return freeModules.map((module) => ({
        id: parseInt(module.id).toString(),
    }));
}

export default async function ModulePage({ params }: { params: Promise<{ id: string }> }) {
    // Next.js 15: params is a Promise and must be awaited
    const { id } = await params;

    // Pad ID to 2 digits
    const moduleId = id.padStart(2, '0');
    const module = getModuleById(moduleId);

    if (!module) {
        notFound();
    }

    // Only allow free modules for now
    if (module.tier !== 'free') {
        notFound();
    }

    // Load MDX content
    const contentPath = path.join(process.cwd(), 'content', 'modules', `${moduleId}-${module.slug}.mdx`);

    let mdxContent;
    try {
        const fileContent = fs.readFileSync(contentPath, 'utf8');
        mdxContent = await compileMDX({
            source: fileContent,
            components,
            options: {
                parseFrontmatter: true,
            },
        });
    } catch (error) {
        console.error(`Error loading module ${moduleId}:`, error);
        notFound();
    }

    // Get previous and next modules
    const freeModules = getFreeModules();
    const currentIndex = freeModules.findIndex(m => m.id === moduleId);
    const previousModule = currentIndex > 0 ? freeModules[currentIndex - 1] : undefined;
    const nextModule = currentIndex < freeModules.length - 1 ? freeModules[currentIndex + 1] : undefined;

    return (
        <ModuleContent
            module={module}
            content={mdxContent.content}
            previousModule={previousModule}
            nextModule={nextModule}
        />
    );
}
