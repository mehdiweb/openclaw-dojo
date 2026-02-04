'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export function CodeBlock({ code, language = 'bash', filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative my-6 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            {/* Filename header (optional) */}
            {filename && (
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                    <span className="text-xs text-gray-600 font-mono">{filename}</span>
                </div>
            )}

            {/* Code container */}
            <div className="relative">
                <pre className="p-4 overflow-x-auto text-sm font-mono">
                    <code className="text-gray-800">{code.trim()}</code>
                </pre>

                {/* Copy button */}
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                    ) : (
                        <Copy className="w-4 h-4 text-gray-600" />
                    )}
                </button>
            </div>
        </div>
    );
}
