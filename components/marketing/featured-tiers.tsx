import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    ctaLink: string;
    highlighted?: boolean;
    badge?: string;
}

const tiers: PricingTier[] = [
    {
        name: "Operator",
        price: "Free",
        description: "Get OpenClaw connected to WhatsApp or Telegram",
        features: [
            "7 core modules",
            "Copy-paste configs",
            "Common error fixes",
            "Discord community",
        ],
        cta: "Start Free",
        ctaLink: "/learn",
        badge: "Popular",
    },
    {
        name: "Builder",
        price: "$49",
        description: "Advanced configs & automation templates",
        features: [
            "Everything in Operator",
            "13 total modules",
            "Video walkthroughs",
            "Priority support",
        ],
        cta: "Get Access",
        ctaLink: "/support",
        highlighted: true,
    },
    {
        name: "Architect",
        price: "$199",
        description: "Multi-agent systems with 1-on-1 support",
        features: [
            "Everything in Builder",
            "All 20 modules",
            "1-on-1 setup call",
            "Custom blueprint",
        ],
        cta: "Apply",
        ctaLink: "/support",
        badge: "Limited",
    },
];

export function FeaturedTiers() {
    return (
        <section className="py-12 bg-bg-secondary">
            <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
                {/* Section header */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold uppercase tracking-wide rounded-md">
                        Featured
                    </span>
                    <h2 className="text-xl font-bold text-text-primary">
                        Choose Your Path
                    </h2>
                </div>

                {/* Horizontal scroll container */}
                <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible lg:grid lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={cn(
                                "flex-shrink-0 w-[300px] lg:w-auto flex flex-col rounded-xl border p-6",
                                "bg-background shadow-sm hover:shadow-md transition-all duration-200",
                                tier.highlighted
                                    ? "border-primary ring-2 ring-primary/20"
                                    : "border-border"
                            )}
                        >
                            {/* Badge */}
                            {tier.badge && (
                                <div className="mb-4">
                                    <span
                                        className={cn(
                                            "px-2 py-1 text-xs font-semibold rounded-md",
                                            tier.highlighted
                                                ? "bg-primary text-white"
                                                : "bg-bg-tertiary text-text-secondary"
                                        )}
                                    >
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            {/* Tier name */}
                            <h3 className="text-lg font-semibold text-text-primary">
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="mt-2">
                                <span className="text-3xl font-bold text-text-primary">
                                    {tier.price}
                                </span>
                                {tier.price !== "Free" && (
                                    <span className="text-sm text-text-muted ml-1">one-time</span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="mt-3 text-sm text-text-secondary">
                                {tier.description}
                            </p>

                            {/* Features */}
                            <ul className="mt-6 space-y-3 flex-grow">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-text-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href={tier.ctaLink}
                                className={cn(
                                    "w-full mt-6 inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-lg transition-all duration-200",
                                    tier.highlighted
                                        ? "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md"
                                        : "border border-border text-text-secondary hover:border-text-muted hover:text-text-primary"
                                )}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
