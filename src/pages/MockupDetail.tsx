import { SurfaceCard } from "@/components/ui/surface-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  ArrowLeft,
  Plus,
  Image as ImageIcon,
  Trash2,
  Wand2,
  Calendar,
  Hash,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const MOCK_IMAGES = [
  { id: "1", name: "hero-shot.png", width: 1920, height: 1080, dpi: 144 },
  { id: "2", name: "detail-view.png", width: 1440, height: 900, dpi: 72 },
  { id: "3", name: "sidebar-focus.png", width: 800, height: 1200, dpi: 144 },
];

export default function MockupDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <button
          onClick={() => navigate("/mockups")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-utility"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to library
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-3">
            <h1 className="font-editorial font-extrabold text-3xl text-foreground">
              iPhone 16 Pro Showcase
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-utility">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Created 2 hours ago
              </span>
              <span className="flex items-center gap-1.5">
                <Hash className="h-3.5 w-3.5" />
                Starting number: 1
              </span>
              <span className="flex items-center gap-1.5">
                <ImageIcon className="h-3.5 w-3.5" />
                {MOCK_IMAGES.length} images
              </span>
            </div>
          </div>

          <GradientButton className="flex items-center gap-2 shrink-0">
            <Wand2 className="h-4 w-4" />
            Generate Mockups
          </GradientButton>
        </div>

        {/* Images */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Eyebrow>Project Images</Eyebrow>
            <button className="flex items-center gap-1.5 text-sm text-primary font-utility font-semibold hover:text-primary-dim transition-colors">
              <Plus className="h-4 w-4" />
              Add Images
            </button>
          </div>

          <div className="space-y-3">
            {MOCK_IMAGES.map((img, i) => (
              <SurfaceCard
                key={img.id}
                tier="high"
                className="p-0 flex items-center gap-4 overflow-hidden"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 sm:w-32 sm:h-24 bg-background shrink-0 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                </div>

                <div className="flex-1 py-4 pr-4 flex items-center justify-between min-w-0">
                  <div className="min-w-0">
                    <p className="text-sm font-editorial font-bold text-foreground truncate">
                      {img.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-utility mt-1">
                      {img.width} × {img.height} · {img.dpi} DPI
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <button
                      onClick={() => navigate(`/mockups/${id}/mask/${img.id}`)}
                      className="surface-highest px-3 py-1.5 rounded-lg text-xs font-utility font-semibold text-primary hover:text-primary-dim transition-colors"
                    >
                      Edit Mask
                    </button>
                    <button className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:surface-highest transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
