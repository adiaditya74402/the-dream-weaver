import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Grid2X2, Heart, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/vivah-hero.jpg";
import ananyaImage from "@/assets/profile-ananya.jpg";
import vikramImage from "@/assets/profile-vikram.jpg";
import meeraImage from "@/assets/profile-meera.jpg";
import { Button } from "@/components/ui/button";
import { ProfileCard, type Profile } from "@/components/profile-card";
import { VivahShell } from "@/components/vivah-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Discover — Chandravanshi Vivah" },
    { name: "description", content: "Discover respectful, values-led introductions within the Chandravanshi community." },
    { property: "og:title", content: "Discover — Chandravanshi Vivah" },
    { property: "og:description", content: "Thoughtful community introductions, built on shared values and trust." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: DiscoverPage,
});

const profiles: Profile[] = [
  { name: "Ananya", age: 27, city: "Jaipur", profession: "Architect", value: "Family & creativity", image: ananyaImage },
  { name: "Vikram", age: 29, city: "Delhi", profession: "Product designer", value: "Kindness & growth", image: vikramImage },
  { name: "Meera", age: 26, city: "Lucknow", profession: "Doctor", value: "Community & purpose", image: meeraImage },
];

const filters = [
  { label: "All profiles", icon: Grid2X2 },
  { label: "Shared values", icon: Heart },
  { label: "Recently active", icon: Clock3 },
];

function DiscoverPage() {
  const [activeFilter, setActiveFilter] = useState("All profiles");
  return <VivahShell>
    <section className="relative min-h-[640px] overflow-hidden md:min-h-[680px]">
      <img src={heroImage} alt="A bride and groom holding hands at an Indian wedding" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[680px]">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary">A community introduction</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.04] text-image-foreground sm:text-6xl lg:text-7xl">Meet someone<br />who feels like <em className="text-primary">home.</em></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-image-foreground/80 sm:text-xl">Start with shared values. Let the rest unfold with care.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button variant="warm" size="lg">Explore introductions</Button><Button variant="glass" size="lg">How trust works</Button></div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="relative -mt-14 grid gap-5 overflow-hidden rounded-lg border border-primary/20 bg-cream-glow p-6 text-card-foreground shadow-card sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
        <span className="grid size-14 place-items-center rounded-full bg-primary/20 text-primary-foreground"><ShieldCheck className="size-7" /></span>
        <div><h2 className="text-lg font-semibold">A safe and genuine community</h2><p className="mt-1 max-w-2xl text-sm leading-6 text-card-foreground/70">These are fictional sample profiles. No real members or introductions are connected in this demo.</p></div>
        <UsersRound className="hidden size-12 text-primary/45 sm:block" />
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="flex flex-col gap-5 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Explore by</p><h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Find your match, your way</h2></div>
        <div className="flex flex-wrap gap-2">{filters.map(({ label, icon: Icon }) => <Button key={label} variant={activeFilter === label ? "warm" : "outline"} size="lg" onClick={() => setActiveFilter(label)}><Icon />{label}</Button>)}</div>
      </div>
      <div className="mt-12 flex items-end justify-between gap-4"><div><p className="mb-2 flex items-center gap-2 text-sm text-primary"><Sparkles className="size-4" />Curated for shared values</p><h2 className="font-display text-4xl font-semibold sm:text-5xl">Suggested introductions</h2></div><p className="hidden text-muted-foreground sm:block">3 examples</p></div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{profiles.map((profile) => <ProfileCard key={profile.name} profile={profile} />)}</div>
    </section>
  </VivahShell>;
}