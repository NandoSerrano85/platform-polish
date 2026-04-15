import { Layers } from "lucide-react";

export function BrandHeader() {
  return (
    <header className="glass sticky top-0 z-50 px-6 py-4 flex items-center gap-3">
      <div className="gradient-primary p-2 rounded-lg">
        <Layers className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-editorial font-bold text-lg tracking-tight text-foreground">
        MockDrop
      </span>
    </header>
  );
}
