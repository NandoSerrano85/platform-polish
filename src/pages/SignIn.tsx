import { useState } from "react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { BottomBorderInput } from "@/components/ui/bottom-border-input";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Layers, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/mockups");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left — Editorial Side */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-12 surface-low">
        <div className="flex items-center gap-3">
          <div className="gradient-primary p-2.5 rounded-lg">
            <Layers className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-editorial font-bold text-xl text-foreground">MockDrop</span>
        </div>

        <div className="max-w-lg space-y-6">
          <h1 className="font-editorial font-extrabold text-5xl leading-tight text-foreground">
            Your digital
            <br />
            <span className="gradient-primary-text">atelier</span> awaits.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-utility">
            Craft stunning device mockups with precision. Upload, mask, generate — 
            all in a workspace designed for creators who care about every pixel.
          </p>
        </div>

        <p className="text-muted-foreground/50 text-sm font-utility">
          © 2026 MockDrop. Crafted with intention.
        </p>
      </div>

      {/* Right — Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <div className="gradient-primary p-2.5 rounded-lg">
              <Layers className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-editorial font-bold text-xl text-foreground">MockDrop</span>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 surface-high rounded-full px-3 py-1.5">
              <Shield className="h-3 w-3 text-primary" />
              <Eyebrow>Secured Studio Access</Eyebrow>
            </div>
            <h2 className="font-editorial font-extrabold text-3xl text-foreground">
              Welcome back to your studio
            </h2>
            <p className="text-muted-foreground font-utility">
              Sign in to continue crafting.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <BottomBorderInput
              label="Email"
              type="email"
              placeholder="you@studio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <BottomBorderInput
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <GradientButton
              type="submit"
              loading={loading}
              size="lg"
              className="w-full"
            >
              Enter the Studio
            </GradientButton>
          </form>

          <SurfaceCard tier="high" className="p-4 flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-utility font-semibold text-foreground">Secured Workspace</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Your mockups and credentials are encrypted end-to-end.
              </p>
            </div>
          </SurfaceCard>

          <p className="text-center text-sm text-muted-foreground font-utility">
            New to the studio?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-primary hover:text-primary-dim transition-colors font-semibold"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
