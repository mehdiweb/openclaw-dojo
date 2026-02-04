import Link from "next/link";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    ctaLink: string;
    highlighted?: boolean;
    badge?: string;
    locked?: boolean;
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
            "Discord community access",
        ],
        cta: "Start Free",
        ctaLink: "/learn",
        badge: "Most Popular",
    },
    {
        name: "Builder",
        price: "$49",
        description: "Advanced configs & automation templates",
        features: [
            "Everything in Operator",
            "13 total modules",
            "Video walkthroughs",
            "Automation templates",
            "Priority Discord support",
        ],
        cta: "Get Access",
        ctaLink: "/support",
        highlighted: true,
        locked: true,
    },
    {
        name: "Architect",
        price: "$199",
        description: "Multi-agent systems (Dev skills required)",
        features: [
            "Everything in Builder",
            "All 20 modules",
            "1-on-1 setup call",
            "Custom blueprint",
            "Multi-agent routing",
        ],
        cta: "Apply",
        ctaLink: "/support",
        badge: "Limited",
        locked: true,
    },
];

export function PricingCards() {
    return (
        <section className="py-16 lg:py-24 bg-bg-secondary">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                        Choose Your Path
                    </h2>
                    <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                        Start free with the essentials, or go deeper with advanced guides and personal support.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={cn(
                                "relative flex flex-col rounded-lg border p-6 lg:p-8",
                                tier.highlighted
                                    ? "border-lobster bg-background shadow-lg shadow-lobster/10"
                                    : "border-bg-tertiary bg-background"
                            )}
                        >
                            {/* Badge */}
                            {tier.badge && (
                                <div
                                    className={cn(
                                        "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full",
                                        tier.highlighted
                                            ? "bg-lobster text-text-primary"
                                            : "bg-bg-tertiary text-text-secondary"
                                    )}
                                >
                                    {tier.badge}
                                </div>
                            )}

                            {/* Tier indicator */}
                            <div className="mb-4">
                                <div
                                    className={cn(
                                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
                                        tier.name === "Operator" && "bg-success/20 text-success",
                                        tier.name === "Builder" && "bg-warning/20 text-warning",
                                        tier.name === "Architect" && "bg-lobster/20 text-lobster"
                                    )}
                                >
                                    {tier.locked && <Lock className="h-3 w-3" />}
                                    {tier.name}
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-text-primary">
                                    {tier.price}
                                </span>
                                {tier.price !== "Free" && (
                                    <span className="text-text-muted ml-2">one-time</span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary text-sm mb-6">
                                {tier.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check
                                            className={cn(
                                                "h-5 w-5 flex-shrink-0",
                                                tier.highlighted ? "text-lobster" : "text-success"
                                            )}
                                        />
                                        <span className="text-sm text-text-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Button
                                variant={tier.highlighted ? "primary" : "outline"}
                                size="md"
                                className="w-full"
                                asChild
                            >
                                <Link href={tier.ctaLink}>{tier.cta}</Link>
                            </Button>

                            {/* Extra note for locked tiers */}
                            {tier.locked && (
                                <p className="mt-4 text-xs text-text-muted text-center">
                                    Requires Operator-level knowledge
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
