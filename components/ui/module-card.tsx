import Link from "next/link";
import { Lock, ThumbsUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModuleCardProps {
    id: string;
    title: string;
    description: string;
    icon: string;
    level: 1 | 2 | 3 | 4;
    isLocked?: boolean;
    upvotes?: number;
    comments?: number;
}

export function ModuleCard({
    id,
    title,
    description,
    icon,
    level,
    isLocked = false,
    upvotes = 0,
    comments = 0,
}: ModuleCardProps) {
    const href = isLocked ? "/support" : `/learn/${id}`;

    return (
        <Link href={href} className="block group">
            <div
                className={cn(
                    "relative bg-background border border-border rounded-xl p-6",
                    "shadow-sm hover:shadow-md transition-all duration-200",
                    "hover:-translate-y-1",
                    isLocked && "opacity-75"
                )}
            >
                {/* Locked badge */}
                {isLocked && (
                    <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-warning text-white text-xs font-semibold rounded-md">
                            <Lock className="h-3 w-3" />
                            LOCKED
                        </span>
                    </div>
                )}

                {/* Level badge */}
                {!isLocked && (
                    <div className="absolute top-4 right-4">
                        <span className={cn(
                            "px-2 py-1 text-xs font-semibold rounded-md",
                            level === 1 && "bg-success/10 text-success",
                            level === 2 && "bg-primary/10 text-primary",
                            level === 3 && "bg-warning/10 text-warning",
                            level === 4 && "bg-danger/10 text-danger"
                        )}>
                            Level {level}
                        </span>
                    </div>
                )}

                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-bg-secondary flex items-center justify-center text-2xl flex-shrink-0">
                        {icon}
                    </div>

                    <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-1">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                            {description}
                        </p>

                        {/* Stats */}
                        <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
                            <span className="flex items-center gap-1">
                                <ThumbsUp className="h-3.5 w-3.5" />
                                {upvotes}
                            </span>
                            <span className="flex items-center gap-1">
                                <MessageCircle className="h-3.5 w-3.5" />
                                {comments}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
