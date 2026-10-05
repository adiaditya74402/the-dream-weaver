import { createFileRoute } from "@tanstack/react-router";
import { Bell, ChevronRight, Eye, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VivahShell } from "@/components/vivah-shell";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [
    { title: "My Profile — Chandravanshi Vivah" }, { name: "description", content: "Manage your Chandravanshi Vivah story, preferences, family participation, and privacy." },
    { property: "og:title", content: "My Profile — Chandravanshi Vivah" }, { property: "og:description", content: "Your story, family preferences, and privacy controls in one place." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ProfilePage,
});

const settings = [
  { icon: Eye, title: "Discovery preferences", detail: "Age, location, values and lifestyle" },
  { icon: ShieldCheck, title: "Verification", detail: "Phone and email verified" },
  { icon: LockKeyhole, title: "Privacy controls", detail: "Choose who can see your details" },
  { icon: Bell, title: "Notifications", detail: "Weekly introductions enabled" },
];

function ProfilePage() {
  return <VivahShell><section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20"><div className="flex flex-col gap-7 border-b border-border pb-10 sm:flex-row sm:items-center"><span className="grid size-24 place-items-center rounded-full bg-cream-glow text-card-foreground shadow-card"><UserRound className="size-10" /></span><div className="flex-1"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Your account</p><h1 className="mt-2 font-display text-5xl font-semibold">Tell your story</h1><p className="mt-2 text-muted-foreground">A warm introduction begins with the things that matter to you.</p></div><Button variant="warm">Complete profile</Button></div><div className="mt-10 grid gap-4">{settings.map(({ icon: Icon, title, detail }) => <button key={title} className="flex w-full items-center gap-4 rounded-lg border border-border bg-secondary p-5 text-left transition-colors hover:bg-accent"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"><Icon className="size-5" /></span><span className="flex-1"><span className="block font-medium">{title}</span><span className="mt-1 block text-sm text-muted-foreground">{detail}</span></span><ChevronRight className="size-5 text-muted-foreground" /></button>)}</div><div className="mt-10 rounded-lg bg-cream-glow p-7 text-card-foreground"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-card-foreground/60">Privacy promise</p><h2 className="mt-3 font-display text-3xl font-semibold">Your data is sacred.</h2><p className="mt-3 max-w-2xl leading-7 text-card-foreground/70">Your personal details remain under your control. They are never sold or used for advertising.</p></div></section></VivahShell>;
}