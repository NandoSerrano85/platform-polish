import { SurfaceCard } from "@/components/ui/surface-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Check, Zap, Building2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    usage: "500 mockups/month",
    current: true,
    features: ["Unlimited projects", "HD export", "Custom watermarks", "Priority rendering"],
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    usage: "2,000 mockups/month",
    current: false,
    features: ["Everything in Pro", "Team collaboration", "Shared templates", "API access"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    usage: "Unlimited mockups",
    current: false,
    enterprise: true,
    features: ["Everything in Team", "Dedicated support", "SLA guarantee", "Custom integrations"],
  },
];

export default function BillingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-10">
        <button
          onClick={() => navigate("/mockups")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-utility"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to studio
        </button>

        <div className="space-y-2">
          <Eyebrow>Billing & Plans</Eyebrow>
          <h1 className="font-editorial font-extrabold text-3xl text-foreground">
            Choose your studio tier
          </h1>
          <p className="text-muted-foreground font-utility">
            Scale your creative output with the right plan.
          </p>
        </div>

        {/* Current usage */}
        <SurfaceCard tier="high" className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Eyebrow>Current Plan</Eyebrow>
              <p className="font-editorial font-bold text-xl text-foreground mt-1">Pro</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground font-utility">This month</p>
              <p className="font-editorial font-bold text-foreground">127 / 500</p>
            </div>
          </div>
          <div className="h-2 rounded-full surface-highest overflow-hidden">
            <div className="h-full rounded-full gradient-primary transition-all duration-500" style={{ width: "25%" }} />
          </div>
        </SurfaceCard>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <SurfaceCard
              key={plan.name}
              tier={plan.current ? "highest" : "high"}
              className={`p-6 space-y-5 relative ${plan.current ? "ring-1 ring-primary/30" : ""}`}
            >
              {plan.current && (
                <span className="absolute top-4 right-4 gradient-primary text-primary-foreground text-xs font-utility font-bold px-2.5 py-1 rounded-full">
                  Current
                </span>
              )}

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {plan.enterprise ? (
                    <Building2 className="h-5 w-5 text-secondary" />
                  ) : (
                    <Zap className="h-5 w-5 text-primary" />
                  )}
                  <h3 className="font-editorial font-bold text-lg text-foreground">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-editorial font-extrabold text-3xl text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground font-utility">{plan.period}</span>
                </div>
                <p className="text-xs text-muted-foreground font-utility">{plan.usage}</p>
              </div>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-utility text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {!plan.current && (
                <GradientButton size="default" className="w-full">
                  {plan.enterprise ? "Contact Sales" : "Upgrade"}
                </GradientButton>
              )}
            </SurfaceCard>
          ))}
        </div>
      </div>
    </div>
  );
}
