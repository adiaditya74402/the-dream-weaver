import { Link } from "@tanstack/react-router";
import { Heart, Home, ShieldCheck, UserRound, UsersRound } from "lucide-react";
import type { ReactNode } from "react";

const navigation = [
  { to: "/" as const, label: "Discover", icon: Home },
  { to: "/saved" as const, label: "Saved", icon: Heart },
  { to: "/community" as const, label: "Community", icon: UsersRound },
  { to: "/profile" as const, label: "My profile", icon: UserRound },
];

export function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Chandravanshi Vivah home">
      <span className="grid size-12 shrink-0 place-items-center rounded-[14px] border border-primary/50 bg-surface-raised text-primary shadow-warm transition-transform group-hover:-rotate-2">
        <span className="relative"><Heart className="size-7" strokeWidth={1.7} /><UsersRound className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2" strokeWidth={1.8} /></span>
      </span>
      <span>
        <span className="block text-lg font-semibold leading-none text-foreground sm:text-xl">Chandravanshi Vivah</span>
        <span className="mt-1 block text-sm text-muted-foreground">Rishta with respect</span>
      </span>
    </Link>
  );
}

export function VivahShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navigation.map(({ to, label, icon: Icon }) => (
              <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "bg-primary text-primary-foreground" }} inactiveProps={{ className: "text-muted-foreground hover:bg-accent hover:text-accent-foreground" }} className="flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors">
                <Icon className="size-4" />{label}
              </Link>
            ))}
          </nav>
          <ShieldCheck className="size-7 text-primary md:hidden" aria-label="Protected community" />
        </div>
      </header>
      <main className="pb-24 md:pb-0">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-border bg-navigation/95 px-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2 shadow-nav backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
        {navigation.map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "text-primary" }} inactiveProps={{ className: "text-navigation-foreground/70" }} className="flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium">
            <Icon className="size-6" strokeWidth={1.8} /><span>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}