import { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { BottomBorderInput } from "@/components/ui/bottom-border-input";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Layers, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SurfaceCard } from "@/components/ui/surface-card";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/mockups");
    }, 1200);
  };

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="gradient-primary p-2.5 rounded-lg">
            <Layers className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-editorial font-bold text-xl text-foreground">MockDrop</span>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 surface-high rounded-full px-3 py-1.5">
            <Shield className="h-3 w-3 text-primary" />
            <Eyebrow>Create Your Studio</Eyebrow>
          </div>
          <h2 className="font-editorial font-extrabold text-3xl text-foreground">
            Start crafting today
          </h2>
          <p className="text-muted-foreground font-utility">
            Set up your workspace in seconds.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <BottomBorderInput label="Full Name" placeholder="Jane Designer" value={form.name} onChange={update("name")} />
          <BottomBorderInput label="Email" type="email" placeholder="you@studio.com" value={form.email} onChange={update("email")} />
          <BottomBorderInput label="Password" type="password" placeholder="••••••••" value={form.password} onChange={update("password")} />
          <BottomBorderInput
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            value={form.confirm}
            onChange={update("confirm")}
            error={form.confirm && form.password !== form.confirm ? "Passwords don't match" : undefined}
          />

          <GradientButton type="submit" loading={loading} size="lg" className="w-full">
            Create Account
          </GradientButton>
        </form>

        <SurfaceCard tier="high" className="p-4 flex items-start gap-3">
          <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-utility font-semibold text-foreground">Secured Workspace</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Your data is encrypted and never shared with third parties.
            </p>
          </div>
        </SurfaceCard>

        <p className="text-center text-sm text-muted-foreground font-utility">
          Already have a studio?{" "}
          <button onClick={() => navigate("/")} className="text-primary hover:text-primary-dim transition-colors font-semibold">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
