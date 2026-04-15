import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "default" | "lg";
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, loading, disabled, size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "gradient-primary font-editorial font-bold text-primary-foreground rounded-lg",
          "transition-all duration-200 active:scale-[0.96]",
          "disabled:opacity-50 disabled:pointer-events-none",
          "ambient-shadow",
          size === "default" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
            Processing…
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
