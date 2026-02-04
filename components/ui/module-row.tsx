import Link from "next/link";
import { ArrowRight, ThumbsUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleRowProps {
    id: string;
    title: string;
    description: string;
    icon: string;
    author: string;
    timeAgo: string;
    votes: number;
    comments: number;
    tags?: string[];
    isPromoted?: boolean;
}

export function ModuleRow({
    id,
    title,
    description,
    icon,
    author,
    timeAgo,
    votes,
    comments,
    tags = [],
    isPromoted = false,
}: ModuleRowProps) {
    return (
        <div className="group relative flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all mb-4">
            {/* Icon Area */}
            <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gray-50 rounded-lg border border-gray-100">
                    {icon}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link href={`/learn/${id}`}>
                            {title}
                        </Link>
                    </h3>
                    {isPromoted && (
                        <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold text-gray-500 border border-gray-200 rounded">
                            Promoted
                        </span>
                    )}
                </div>

                <p className="text-sm text-gray-500 line-clamp-1 mb-2">
                    {description}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1 font-medium text-gray-500">
                        by {author}
                    </span>
                    <span>•</span>
                    <span>{timeAgo}</span>
                    <div className="flex items-center gap-2 ml-2">
                        {tags.map(tag => (
                            <span key={tag} className="text-gray-400 hover:underline cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action / Vote Area */}
            <div className="flex-shrink-0 flex flex-col items-end gap-2">
                <button className="flex flex-col items-center justify-center min-w-[60px] h-[56px] border border-gray-200 rounded-lg hover:border-gray-300 bg-transparent transition-colors group/vote">
                    <span className="text-xs font-bold text-gray-400 group-hover/vote:text-gray-600">▲</span>
                    <span className="text-sm font-bold text-gray-900">{votes}</span>
                </button>
            </div>
        </div>
    );
}
