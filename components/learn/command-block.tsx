'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CommandBlockProps {
    children: string;
    language?: string;
}

export function CommandBlock({ children, language = 'bash' }: CommandBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-4">
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code className="whitespace-pre">{children}</code>
            </div>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-700"
                title="Copy to clipboard"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                )}
            </button>
        </div>
    );
}
