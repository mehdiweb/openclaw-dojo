import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
    title: string;
    description: string;
    icon: string;
    color: "blue" | "green" | "pink" | "yellow";
    badge: "FEATURED" | "PARTNER" | "PREMIUM";
    link: string;
}

const colorMap = {
    blue: "bg-blue-100 border-blue-200",
    green: "bg-green-100 border-green-200",
    pink: "bg-pink-100 border-pink-200",
    yellow: "bg-yellow-100 border-yellow-200",
};

export function FeaturedCard({
    title,
    description,
    icon,
    color,
    badge,
    link
}: FeaturedCardProps) {
    return (
        <Link
            href={link}
            className={cn(
                "relative flex flex-col p-5 rounded-xl border-2 transition-transform hover:-translate-y-1",
                colorMap[color],
                "border-opacity-50"
            )}
        >
            <div className="absolute top-3 right-3">
                <span className="px-2 py-[2px] text-[10px] font-bold bg-black text-white rounded-sm uppercase tracking-wider">
                    {badge}
                </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border border-black/5 text-xl">
                    {icon}
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">
                    {title}
                </h3>
            </div>

            <p className="text-sm text-gray-600 font-medium leading-relaxed line-clamp-2">
                {description}
            </p>
        </Link>
    );
}
