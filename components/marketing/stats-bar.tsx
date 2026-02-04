import { Zap, Star, Coffee, Users } from "lucide-react";

const stats = [
    {
        label: "Deployments",
        value: "120+",
        icon: Zap,
    },
    {
        label: "Rating",
        value: "4.9/5",
        icon: Star,
    },
    {
        label: "Supporters",
        value: "47",
        icon: Coffee,
    },
    {
        label: "Community",
        value: "230+",
        icon: Users,
    },
];

export function StatsBar() {
    return (
        <section className="py-8 bg-bg-secondary border-y border-border">
            <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex items-center gap-3 justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <stat.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-text-primary">
                                    {stat.value}
                                </span>
                                <p className="text-xs text-text-muted">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
