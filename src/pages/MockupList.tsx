import { useState } from "react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  Plus,
  Image,
  MoreHorizontal,
  Search,
  Layers,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BrandHeader } from "@/components/brand-header";

const MOCK_MOCKUPS = [
  { id: "1", name: "iPhone 16 Pro Showcase", images: 4, createdAt: "2 hours ago" },
  { id: "2", name: "MacBook Landing Page", images: 2, createdAt: "Yesterday" },
  { id: "3", name: "iPad Dashboard Preview", images: 6, createdAt: "3 days ago" },
  { id: "4", name: "Apple Watch Fitness", images: 3, createdAt: "1 week ago" },
  { id: "5", name: "Multi-Device Hero Shot", images: 8, createdAt: "2 weeks ago" },
];

export default function MockupListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filtered = MOCK_MOCKUPS.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 surface-low p-6 space-y-8">
        <div className="flex items-center gap-3">
          <div className="gradient-primary p-2 rounded-lg">
            <Layers className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-editorial font-bold text-lg text-foreground">MockDrop</span>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { icon: Image, label: "Mockups", path: "/mockups", active: true },
            { icon: CreditCard, label: "Billing", path: "/billing", active: false },
            { icon: Settings, label: "Settings", path: "/settings", active: false },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-utility transition-colors ${
                item.active
                  ? "surface-high text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:surface-high"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="space-y-3">
          {/* Entitlements banner */}
          <SurfaceCard tier="high" className="p-4 space-y-3">
            <Eyebrow>Pro Plan</Eyebrow>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-utility">
                <span className="text-muted-foreground">127 / 500 mockups</span>
                <span className="text-primary font-semibold">25%</span>
              </div>
              <div className="h-1.5 rounded-full surface-highest overflow-hidden">
                <div className="h-full rounded-full gradient-primary" style={{ width: "25%" }} />
              </div>
            </div>
          </SurfaceCard>

          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-utility text-muted-foreground hover:text-foreground hover:surface-high transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <div className="md:hidden">
          <BrandHeader />
        </div>

        <div className="flex-1 p-6 md:p-10 space-y-8 max-w-5xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-muted-foreground font-utility text-sm">Welcome back,</p>
              <h1 className="font-editorial font-extrabold text-3xl text-foreground">
                Jane's Studio
              </h1>
            </div>
            <GradientButton className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Mockup
            </GradientButton>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search mockups…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full surface-high rounded-xl pl-11 pr-4 py-3 text-sm font-utility text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>

          {/* Mockup grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((mockup, i) => (
              <SurfaceCard
                key={mockup.id}
                tier="high"
                className="p-0 overflow-hidden cursor-pointer hover:ring-1 hover:ring-primary/20 transition-all group"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => navigate(`/mockups/${mockup.id}`)}
              >
                {/* Preview area */}
                <div className="aspect-[4/3] bg-background flex items-center justify-center">
                  <div className="text-center space-y-2 opacity-40">
                    <Image className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="text-xs text-muted-foreground font-utility">{mockup.images} images</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-editorial font-bold text-foreground truncate">
                      {mockup.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-utility mt-0.5">
                      {mockup.createdAt}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                </div>
              </SurfaceCard>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 space-y-4">
              <Image className="h-16 w-16 mx-auto text-muted-foreground/30" />
              <div>
                <p className="font-editorial font-bold text-lg text-foreground">No mockups found</p>
                <p className="text-sm text-muted-foreground font-utility mt-1">
                  Create your first mockup to get started.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
