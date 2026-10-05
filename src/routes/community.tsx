import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, HandHeart, MessagesSquare, ShieldCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VivahShell } from "@/components/vivah-shell";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [
    { title: "Community — Chandravanshi Vivah" }, { name: "description", content: "Community guidance, family introductions, and cultural circles for Chandravanshi families." },
    { property: "og:title", content: "Community — Chandravanshi Vivah" }, { property: "og:description", content: "Trusted guidance and thoughtful family participation." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: CommunityPage,
});

const circles = [
  { icon: HandHeart, title: "Elder guidance", text: "Seek thoughtful guidance from respected, verified community members." },
  { icon: UsersRound, title: "Family introductions", text: "Invite family into the journey and make introductions together." },
  { icon: MessagesSquare, title: "Cultural circles", text: "Join considered conversations around values, traditions, and family life." },
  { icon: CalendarDays, title: "Safe gatherings", text: "Discover moderated community events and group introductions." },
];

function CommunityPage() {
  return <VivahShell><section className="border-b border-border bg-secondary"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Belonging before matching</p><h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight sm:text-6xl">A community that stands beside every introduction.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Built for respectful conversations, trusted guidance, and families who want to take part with care.</p></div></section><section className="mx-auto max-w-7xl px-5 py-14 sm:px-8"><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{circles.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7 sm:p-9"><Icon className="size-8 text-primary" /><h2 className="mt-8 font-display text-3xl font-semibold">{title}</h2><p className="mt-3 max-w-md leading-7 text-muted-foreground">{text}</p><Button variant="link" className="mt-4 px-0">Explore circle</Button></article>)}</div><div className="mt-12 flex flex-col gap-5 rounded-lg bg-cream-glow p-7 text-card-foreground shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-9"><div className="flex gap-4"><ShieldCheck className="mt-1 size-8 shrink-0 text-primary-foreground" /><div><h2 className="text-xl font-semibold">Guided by community standards</h2><p className="mt-1 text-card-foreground/70">Respect, honesty, privacy, and zero tolerance for harassment.</p></div></div><Button variant="warm">Read our values</Button></div></section></VivahShell>;
}