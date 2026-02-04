import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "coffee";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                className={cn(
                    // Base styles
                    "inline-flex items-center justify-center font-semibold transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50",
                    // Size variants
                    {
                        "h-8 px-3 text-xs rounded-md": size === "sm",
                        "h-10 px-6 text-sm rounded-lg": size === "md",
                        "h-12 px-8 text-base rounded-lg": size === "lg",
                    },
                    // Color variants - SoloLaunches style
                    {
                        "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md":
                            variant === "primary",
                        "bg-transparent border border-border text-text-secondary hover:border-text-muted hover:text-text-primary":
                            variant === "secondary",
                        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-secondary":
                            variant === "ghost",
                        "bg-coffee text-white hover:bg-coffee/90 shadow-sm hover:shadow-md":
                            variant === "coffee",
                    },
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
