import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

const BottomBorderInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }
>(({ className, label, error, ...props }, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="eyebrow text-muted-foreground">{label}</label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full bg-transparent pb-2 pt-1 font-utility text-foreground",
          "border-b-2 border-surface-highest",
          "focus:border-primary focus:outline-none",
          "transition-colors duration-200",
          "placeholder:text-muted-foreground/50",
          error && "border-destructive",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-destructive mt-1">{error}</p>
      )}
    </div>
  );
});
BottomBorderInput.displayName = "BottomBorderInput";

export { BottomBorderInput };
