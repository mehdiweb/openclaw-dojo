"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Terminal animation sequence - exactly as specified in docs
const terminalSequence = [
    { type: "command", text: "curl -fsSL https://openclaw.bot/install.sh | bash" },
    { type: "output", text: "✓ Gateway installed" },
    { type: "command", text: "openclaw onboard --install-daemon" },
    { type: "output", text: "✓ Service running on http://127.0.0.1:18789/" },
    { type: "output", text: "✓ Ready to connect WhatsApp/Telegram" },
];

interface TerminalLine {
    type: "command" | "output";
    text: string;
}

export function TerminalHero({ className }: { className?: string }) {
    const [lines, setLines] = React.useState<Array<{ type: string; text: string; isTyping?: boolean }>>([]);
    const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
    const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
    const [showCursor, setShowCursor] = React.useState(true);
    const [isAnimating, setIsAnimating] = React.useState(true);

    // Cursor blink effect
    React.useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    // Typing animation
    React.useEffect(() => {
        if (!isAnimating) return;

        const currentItem = terminalSequence[currentLineIndex];
        if (!currentItem) {
            // Animation complete, pause then restart
            const restartTimeout = setTimeout(() => {
                setLines([]);
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
                setIsAnimating(true);
            }, 5000);
            return () => clearTimeout(restartTimeout);
        }

        if (currentItem.type === "command") {
            // Type commands character by character
            if (currentCharIndex < currentItem.text.length) {
                const timeout = setTimeout(() => {
                    setLines((prev) => {
                        const newLines = [...prev];
                        const lastLine = newLines[newLines.length - 1];

                        if (lastLine?.isTyping) {
                            // Continue typing current line
                            newLines[newLines.length - 1] = {
                                ...lastLine,
                                text: currentItem.text.substring(0, currentCharIndex + 1),
                            };
                        } else {
                            // Start new command line
                            newLines.push({
                                type: "command",
                                text: currentItem.text.substring(0, currentCharIndex + 1),
                                isTyping: true,
                            });
                        }
                        return newLines;
                    });
                    setCurrentCharIndex((prev) => prev + 1);
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                // Command finished typing, move to next line
                const timeout = setTimeout(() => {
                    setLines((prev) => {
                        const newLines = [...prev];
                        if (newLines.length > 0) {
                            newLines[newLines.length - 1].isTyping = false;
                        }
                        return newLines;
                    });
                    setCurrentLineIndex((prev) => prev + 1);
                    setCurrentCharIndex(0);
                }, 300);
                return () => clearTimeout(timeout);
            }
        } else {
            // Output lines appear instantly
            const timeout = setTimeout(() => {
                setLines((prev) => [
                    ...prev,
                    { type: "output", text: currentItem.text },
                ]);
                setCurrentLineIndex((prev) => prev + 1);
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, isAnimating]);

    return (
        <div
            className={cn(
                "w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-bg-tertiary shadow-2xl",
                className
            )}
        >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-tertiary">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                </div>
                <span className="ml-2 text-xs text-text-muted font-mono">
                    ~/openclaw-setup
                </span>
            </div>

            {/* Terminal content */}
            <div className="bg-[#0D1117] p-4 font-mono text-sm min-h-[180px]">
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex items-start gap-2",
                            line.type === "command" ? "text-text-primary" : "text-success"
                        )}
                    >
                        {line.type === "command" && (
                            <span className="text-lobster select-none">❯</span>
                        )}
                        <span
                            className={cn(
                                line.type === "output" && "ml-4"
                            )}
                        >
                            {line.text}
                            {line.isTyping && showCursor && (
                                <span className="inline-block w-2 h-4 bg-lobster ml-0.5 animate-pulse" />
                            )}
                        </span>
                    </div>
                ))}

                {/* Empty line with cursor when starting */}
                {lines.length === 0 && (
                    <div className="flex items-center gap-2 text-text-primary">
                        <span className="text-lobster select-none">❯</span>
                        {showCursor && (
                            <span className="inline-block w-2 h-4 bg-lobster animate-pulse" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
