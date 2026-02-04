"use client";

import * as React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

export interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
    showLineNumbers?: boolean;
    className?: string;
}

export function CodeBlock({
    code,
    language = "bash",
    filename,
    showLineNumbers = false,
    className,
}: CodeBlockProps) {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={cn(
                "relative group rounded-md overflow-hidden border border-bg-tertiary bg-bg-secondary",
                className
            )}
        >
            {/* Header with filename and copy button */}
            <div className="flex items-center justify-between px-4 py-2 bg-bg-tertiary/50 border-b border-bg-tertiary">
                <span className="text-sm text-text-muted font-mono">
                    {filename || language}
                </span>
                <button
                    onClick={copyToClipboard}
                    className={cn(
                        "flex items-center gap-1.5 px-2 py-1 rounded-sm text-xs font-medium transition-all",
                        "hover:bg-bg-secondary",
                        copied
                            ? "text-success"
                            : "text-text-muted hover:text-text-primary"
                    )}
                    aria-label={copied ? "Copied!" : "Copy code"}
                >
                    {copied ? (
                        <>
                            <Check className="h-3.5 w-3.5" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code content */}
            <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
                {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={cn(
                            highlightClassName,
                            "overflow-x-auto p-4 text-sm font-mono leading-relaxed"
                        )}
                        style={{ ...style, background: "transparent" }}
                    >
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })} className="table-row">
                                {showLineNumbers && (
                                    <span className="table-cell pr-4 text-right text-text-muted select-none w-8">
                                        {i + 1}
                                    </span>
                                )}
                                <span className="table-cell">
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </span>
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
}
