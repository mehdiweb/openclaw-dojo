import Link from "next/link";
import { Coffee, Heart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const supporters = [
    { name: "Alex K.", amount: "$10", message: "Great tutorials!" },
    { name: "Sarah M.", amount: "$5", message: "Saved me hours" },
    { name: "DevJohn", amount: "$3", message: "Keep it up 🦞" },
    { name: "CloudNinja", amount: "$5", message: "" },
    { name: "AI_Builder", amount: "$10", message: "Amazing resource" },
];

export function CoffeeCTA() {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left: CTA content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee/20 text-coffee text-sm font-medium mb-4">
                            <Coffee className="h-4 w-4" />
                            Support the Project
                        </div>

                        <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                            Like What You're Learning?
                        </h2>

                        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                            These guides are free because supporters buy me coffee. ☕
                            <br />
                            Every coffee helps keep the tutorials updated and ad-free.
                        </p>

                        {/* Support tiers */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button variant="ghost" size="lg" asChild>
                                <Link href="/support" className="flex items-center gap-2">
                                    <Coffee className="h-4 w-4" />
                                    $3 Coffee
                                </Link>
                            </Button>
                            <Button variant="coffee" size="lg" asChild>
                                <Link href="/support" className="flex items-center gap-2">
                                    <Gift className="h-4 w-4" />
                                    $5 Large Coffee
                                </Link>
                            </Button>
                            <Button variant="primary" size="lg" asChild>
                                <Link href="/support" className="flex items-center gap-2">
                                    <Heart className="h-4 w-4" />
                                    $10 Coffee + Snack
                                </Link>
                            </Button>
                        </div>

                        <p className="mt-4 text-sm text-text-muted">
                            All supporters get a shoutout on the site!
                        </p>
                    </div>

                    {/* Right: Supporter wall preview */}
                    <div className="relative">
                        <div className="rounded-lg border border-bg-tertiary bg-bg-secondary p-6">
                            <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                                <Heart className="h-4 w-4 text-lobster" />
                                Recent Supporters
                            </h3>

                            <div className="space-y-3">
                                {supporters.map((supporter, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-md bg-bg-tertiary/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-lobster/20 flex items-center justify-center text-sm font-medium text-lobster">
                                                {supporter.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-text-primary">
                                                    {supporter.name}
                                                </p>
                                                {supporter.message && (
                                                    <p className="text-xs text-text-muted">
                                                        "{supporter.message}"
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-sm font-medium text-coffee">
                                            {supporter.amount}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/support"
                                className="mt-4 block text-center text-sm text-lobster hover:underline"
                            >
                                View all supporters →
                            </Link>
                        </div>

                        {/* Decorative gradient */}
                        <div className="absolute -z-10 inset-0 bg-gradient-to-r from-lobster/5 to-coffee/5 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
