import { useState } from "react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { BottomBorderInput } from "@/components/ui/bottom-border-input";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowLeft, Upload, Trash2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [watermarkEnabled, setWatermarkEnabled] = useState(true);
  const [opacity, setOpacity] = useState(60);

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-2xl mx-auto space-y-10">
        <button
          onClick={() => navigate("/mockups")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-utility"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to studio
        </button>

        <div className="space-y-2">
          <Eyebrow>Preferences</Eyebrow>
          <h1 className="font-editorial font-extrabold text-3xl text-foreground">
            Studio Settings
          </h1>
        </div>

        {/* Account */}
        <SurfaceCard tier="high" className="p-6 space-y-5">
          <Eyebrow>Account</Eyebrow>
          <div className="grid gap-5">
            <BottomBorderInput label="Email" type="email" value="jane@studio.com" readOnly />
            <BottomBorderInput label="Full Name" defaultValue="Jane Designer" />
          </div>
        </SurfaceCard>

        {/* Watermark */}
        <SurfaceCard tier="high" className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <Eyebrow>Watermark</Eyebrow>
            <button
              onClick={() => setWatermarkEnabled(!watermarkEnabled)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                watermarkEnabled ? "gradient-primary" : "surface-highest"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-background transition-transform ${
                  watermarkEnabled ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          {watermarkEnabled && (
            <div className="space-y-5 animate-fade-in">
              <div className="space-y-2">
                <label className="eyebrow text-muted-foreground">Opacity — {opacity}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-primary"
                  style={{ accentColor: "hsl(var(--primary))" }}
                />
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 surface-highest px-4 py-2.5 rounded-lg text-sm font-utility text-foreground hover:text-primary transition-colors">
                  <Upload className="h-4 w-4" />
                  Upload Watermark
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-utility text-destructive hover:surface-highest transition-colors">
                  <Trash2 className="h-4 w-4" />
                  Remove
                </button>
              </div>
            </div>
          )}
        </SurfaceCard>

        {/* Logo */}
        <SurfaceCard tier="high" className="p-6 space-y-5">
          <Eyebrow>Logo</Eyebrow>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 surface-highest px-4 py-2.5 rounded-lg text-sm font-utility text-foreground hover:text-primary transition-colors">
              <Upload className="h-4 w-4" />
              Upload Logo
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-utility text-destructive hover:surface-highest transition-colors">
              <Trash2 className="h-4 w-4" />
              Remove
            </button>
          </div>
        </SurfaceCard>

        {/* Sign out */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-destructive font-utility hover:underline"
        >
          <LogOut className="h-4 w-4" />
          Sign out of your studio
        </button>
      </div>
    </div>
  );
}
