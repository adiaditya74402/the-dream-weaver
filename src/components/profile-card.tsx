import { Heart, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export type Profile = {
  name: string;
  age: number;
  city: string;
  profession: string;
  value: string;
  image: string;
};

export function ProfileCard({ profile, saved = false }: { profile: Profile; saved?: boolean }) {
  const [isSaved, setIsSaved] = useState(saved);
  return (
    <article className="group overflow-hidden rounded-lg border border-border/70 bg-card shadow-card">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={profile.image} alt={`Fictional sample profile of ${profile.name}`} width={1024} height={1280} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
        <div className="absolute inset-0 bg-image-overlay" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-overlay px-3 py-2 text-xs font-medium text-overlay-foreground backdrop-blur-md"><Sparkles className="size-4 text-primary" />Fictional sample</span>
        <Button variant="glass" size="iconLg" onClick={() => setIsSaved((value) => !value)} aria-label={isSaved ? `Remove ${profile.name} from saved` : `Save ${profile.name}`} className="absolute right-4 top-4">
          <Heart className={isSaved ? "fill-primary text-primary" : ""} />
        </Button>
        <div className="absolute inset-x-0 bottom-0 p-5 text-image-foreground">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-image-foreground/80"><ShieldCheck className="size-4 text-primary" />Community verified</div>
          <h3 className="font-display text-3xl font-semibold">{profile.name}, {profile.age}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-image-foreground/80"><MapPin className="size-4" />{profile.city} · {profile.profession}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-4">
        <div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Values most</p><p className="mt-1 font-medium text-card-foreground">{profile.value}</p></div>
        <Button variant="outline" size="sm">View story</Button>
      </div>
    </article>
  );
}