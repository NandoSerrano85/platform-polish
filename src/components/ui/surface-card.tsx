import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

type SurfaceTier = "low" | "default" | "high" | "highest";

interface SurfaceCardProps extends HTMLAttributes<HTMLDivElement> {
  tier?: SurfaceTier;
}

const tierClasses: Record<SurfaceTier, string> = {
  low: "bg-surface-low",
  default: "bg-surface",
  high: "bg-surface-high",
  highest: "bg-surface-highest",
};

const SurfaceCard = forwardRef<HTMLDivElement, SurfaceCardProps>(
  ({ className, tier = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          tierClasses[tier],
          "rounded-xl p-6 animate-fade-in",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SurfaceCard.displayName = "SurfaceCard";

export { SurfaceCard };
