import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import ananyaImage from "@/assets/profile-ananya.jpg";
import meeraImage from "@/assets/profile-meera.jpg";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/profile-card";
import { VivahShell } from "@/components/vivah-shell";

export const Route = createFileRoute("/saved")({
  head: () => ({ meta: [
    { title: "Saved Introductions — Chandravanshi Vivah" },
    { name: "description", content: "Return to the Chandravanshi Vivah introductions that spoke to you." },
    { property: "og:title", content: "Saved Introductions — Chandravanshi Vivah" },
    { property: "og:description", content: "A considered shortlist of meaningful introductions." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: SavedPage,
});

function SavedPage() {
  const saved = [
    { name: "Ananya", age: 27, city: "Jaipur", profession: "Architect", value: "Family & creativity", image: ananyaImage },
    { name: "Meera", age: 26, city: "Lucknow", profession: "Doctor", value: "Community & purpose", image: meeraImage },
  ];
  return <VivahShell><section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Your shortlist</p><div className="mt-3 flex flex-col gap-5 border-b border-border pb-10 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="font-display text-5xl font-semibold">Saved introductions</h1><p className="mt-3 max-w-xl text-muted-foreground">Take your time. A thoughtful decision deserves room to breathe.</p></div><Button variant="outline" asChild><Link to="/"><Heart />Discover more</Link></Button></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:max-w-4xl">{saved.map(profile => <ProfileCard key={profile.name} profile={profile} saved />)}</div></section></VivahShell>;
}