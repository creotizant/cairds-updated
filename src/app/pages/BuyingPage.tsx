import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/app/components/PageHero";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck,
  FileText,
  Home,
  Key,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function Pill({
  icon: Icon,
  children,
  tone = "slate",
}: {
  icon: any;
  children: React.ReactNode;
  tone?: "slate" | "amber" | "sky" | "emerald" | "violet";
}) {
  const cls =
    tone === "amber"
      ? "bg-amber-50 text-amber-900 ring-amber-200"
      : tone === "sky"
        ? "bg-sky-50 text-sky-900 ring-sky-200"
        : tone === "emerald"
          ? "bg-emerald-50 text-emerald-900 ring-emerald-200"
          : tone === "violet"
            ? "bg-violet-50 text-violet-900 ring-violet-200"
            : "bg-slate-50 text-slate-900 ring-slate-200";

  const dot =
    tone === "amber"
      ? "bg-amber-400"
      : tone === "sky"
        ? "bg-sky-400"
        : tone === "emerald"
          ? "bg-emerald-400"
          : tone === "violet"
            ? "bg-violet-400"
            : "bg-slate-400";

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold ring-1", cls)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      <Icon className="h-4 w-4" />
      {children}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white shadow-[0_22px_70px_-55px_rgba(15,23,42,0.16)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function IconBadge({
  icon: Icon,
  tone = "slate",
}: {
  icon: any;
  tone?: "slate" | "amber" | "sky" | "emerald" | "violet";
}) {
  const wrap =
    tone === "amber"
      ? "bg-amber-50 text-amber-700 ring-amber-200/80"
      : tone === "sky"
        ? "bg-sky-50 text-sky-700 ring-sky-200/80"
        : tone === "emerald"
          ? "bg-emerald-50 text-emerald-700 ring-emerald-200/80"
          : tone === "violet"
            ? "bg-violet-50 text-violet-700 ring-violet-200/80"
            : "bg-slate-50 text-slate-700 ring-slate-200/80";

  return (
    <span className={cn("grid h-12 w-12 place-items-center rounded-2xl ring-1", wrap)}>
      <Icon className="h-6 w-6" />
    </span>
  );
}

function StepCard({
  n,
  icon: Icon,
  title,
  desc,
}: {
  n: number;
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_-55px_rgba(15,23,42,0.14)] transition hover:shadow-[0_28px_90px_-60px_rgba(15,23,42,0.20)]">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
          <span className="text-base font-extrabold">{n}</span>
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-amber-600" />
            <div className="text-lg font-extrabold tracking-tight text-slate-950">{title}</div>
          </div>
          <div className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  desc,
  icon: Icon,
  to,
}: {
  title: string;
  desc: string;
  icon: any;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-[0_22px_70px_-55px_rgba(15,23,42,0.16)]"
    >
      <div className="pointer-events-none absolute -top-28 right-0 h-[260px] w-[260px] rounded-full bg-amber-200/18 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-28 left-0 h-[260px] w-[260px] rounded-full bg-sky-200/16 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
          <Icon className="h-6 w-6 text-slate-700" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="text-lg font-extrabold tracking-tight text-slate-950">{title}</div>
            <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:text-slate-500 group-hover:translate-x-0.5" />
          </div>
          <div className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</div>

          <div className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-slate-900">
            Explore <ChevronRight className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BuyingPage() {
  const [query, setQuery] = useState("");

  const why = useMemo(
    () => [
      {
        icon: MapPin,
        tone: "emerald" as const,
        title: "Local expertise",
        desc: "Deep knowledge of the Epsom & Ashtead market, pricing, and micro-locations.",
      },
      {
        icon: Home,
        tone: "sky" as const,
        title: "Wide selection",
        desc: "Access to one of the largest ranges of local property listings.",
      },
      {
        icon: Users,
        tone: "violet" as const,
        title: "Professional support",
        desc: "Guidance from experienced property professionals at every stage.",
      },
      {
        icon: ShieldCheck,
        tone: "amber" as const,
        title: "Trusted process",
        desc: "Clear advice, responsive comms, and practical help to reduce friction.",
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen bg-white">
      {/* Premium ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-amber-200/22 blur-3xl" />
        <div className="absolute -bottom-44 left-8 h-[640px] w-[640px] rounded-full bg-emerald-200/16 blur-3xl" />
        <div className="absolute -bottom-52 right-0 h-[720px] w-[720px] rounded-full bg-sky-200/16 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.35)_1px,transparent_0)] [background-size:18px_18px]" />
        </div>
      </div>

      <div className="relative z-10">
        <PageHero
          title="Buying a Property"
          description="Expert guidance through your property buying journey"
          gradient="from-blue-600 to-blue-700"
        />

        <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          {/* Hero search / intent */}
          <Card className="overflow-hidden">
            <div className="relative p-6 sm:p-8">
              <div className="pointer-events-none absolute -top-28 right-0 h-[420px] w-[420px] rounded-full bg-amber-200/18 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 left-0 h-[480px] w-[480px] rounded-full bg-sky-200/14 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill icon={Sparkles} tone="amber">
                    High-trust guidance
                  </Pill>
                  <Pill icon={MapPin} tone="emerald">
                    Epsom • Ashtead • Surrey
                  </Pill>
                  <Pill icon={TrendingUp} tone="sky">
                    Market-led advice
                  </Pill>
                </div>

                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Your buying journey,{" "}
                  <span className="bg-gradient-to-r from-slate-950 via-slate-700 to-slate-900 bg-clip-text italic text-transparent">
                    handled properly
                  </span>
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                  Buying a property is one of life’s biggest decisions. Our experienced team guides you through every step,
                  helping you find the right home and move forward with confidence.
                </p>

                <form
                  className="mt-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Wire this to your property search later
                  }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        placeholder="Search by area, postcode, or property type"
                        className="h-12 rounded-2xl border-slate-200 bg-white pl-10 text-sm font-semibold text-slate-900 shadow-sm focus-visible:ring-slate-200"
                      />
                    </div>

                    <Link to="/properties">
                      <Button className="h-12 rounded-2xl bg-slate-900 px-6 text-sm font-extrabold text-white hover:bg-slate-800">
                        View properties
                        <ArrowRight className="ml-2 h-4 w-4 opacity-90" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-3 text-xs text-slate-600">
                    Tip: Try “KT19”, “Epsom Downs”, “2 bed”, “parking”, “garden”.
                  </div>
                </form>
              </div>
            </div>
          </Card>

          {/* Steps */}
          <div className="mt-8">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                A clear process from search to keys
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Simple, transparent steps that keep things moving.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StepCard
                n={1}
                icon={Search}
                title="Search"
                desc="Browse our property listings and shortlist favourites."
              />
              <StepCard
                n={2}
                icon={Home}
                title="View"
                desc="Arrange viewings at your convenience with our team."
              />
              <StepCard
                n={3}
                icon={FileCheck}
                title="Offer"
                desc="Make an offer with guidance on pricing and position."
              />
              <StepCard
                n={4}
                icon={Key}
                title="Move in"
                desc="Complete smoothly and collect your keys."
              />
            </div>
          </div>

          {/* Helpful links */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              title="Purchase a Property"
              desc="General information about the purchasing process."
              icon={BookOpenCheck}
              to="/buying/purchase-property"
            />
            <InfoCard
              title="Buying a New Build"
              desc="Everything you need to know about buying new-build properties."
              icon={Sparkles}
              to="/buying-new-home"
            />
            <InfoCard
              title="Living in Epsom"
              desc="Discover what it’s like to live in the local area."
              icon={MapPin}
              to="/a-guide-to-living-in-epsom"
            />
          </div>

          {/* Why buy */}
          <div className="mt-10">
            <Card className="overflow-hidden">
              <div className="relative p-6 sm:p-8">
                <div className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-emerald-200/16 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 left-0 h-[560px] w-[560px] rounded-full bg-amber-200/18 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-extrabold text-white">
                        <Star className="h-4 w-4 text-amber-300" />
                        Why buy with Cairds
                      </div>
                      <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                        Advice that’s local, practical, and honest
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        We combine area expertise with clear guidance to help you make better decisions and move forward with confidence.
                      </p>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                      <a
                        href="tel:01372743033"
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        <Phone className="mr-2 h-4 w-4 text-slate-700" />
                        01372 743033
                      </a>
                      <Link to="/contact-us">
                        <Button
                          variant="outline"
                          className="h-12 rounded-2xl border-slate-200 px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                        >
                          Contact
                          <ChevronRight className="ml-2 h-4 w-4 text-slate-400" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {why.map((x) => (
                      <div
                        key={x.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <IconBadge icon={x.icon} tone={x.tone} />
                          <div>
                            <div className="text-lg font-extrabold tracking-tight text-slate-950">
                              {x.title}
                            </div>
                            <div className="mt-1 text-sm leading-relaxed text-slate-600">
                              {x.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-2 md:hidden">
                    <a
                      href="tel:01372743033"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call 01372 743033
                    </a>
                    <Link to="/contact-us">
                      <Button
                        variant="outline"
                        className="h-12 rounded-2xl border-slate-200 px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        Contact us
                        <ChevronRight className="ml-2 h-4 w-4 text-slate-400" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Property Services (kept, redesigned) */}
          <div className="mt-10">
            <Card className="overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-2 text-center">
                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                    Property services
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Practical support to keep your purchase moving.
                  </p>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                    <img
                      src="https://www.cairds.co.uk/media/epsom_conveyancing_cairds-300x243.jpg"
                      alt="Epsom Conveyancing"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold text-slate-900 ring-1 ring-slate-200/70">
                        <BadgeCheck className="h-4 w-4 text-emerald-700" />
                        No Move No Fee
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill icon={ShieldCheck} tone="emerald">
                        Fixed pricing
                      </Pill>
                      <Pill icon={Clock} tone="sky">
                        Day-one legal start
                      </Pill>
                      <Pill icon={Sparkles} tone="amber">
                        Faster progress
                      </Pill>
                    </div>

                    <h4 className="mt-4 text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                      Epsom Conveyancing Services – No Move No Fee
                    </h4>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {[
                        "Protected, fixed pricing – no hidden ongoing charges",
                        "No move, no fee",
                        "Legal work starts on day one of marketing",
                        "Demonstrates serious movers to all parties",
                        "Established relationships for a smoother process",
                        "Extremely competitive fees for Cairds referrals",
                      ].map((x) => (
                        <li key={x} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      Get ahead with a speedy &amp; professional solicitor – endorsed &amp; unique to Cairds.
                    </p>

                    <p className="mt-3 text-sm text-slate-600">
                      For a free, no-obligation quote, contact:{" "}
                      <a href="mailto:homes@cairds.co.uk" className="font-extrabold text-slate-900 underline decoration-slate-300 hover:decoration-slate-500">
                        homes@cairds.co.uk
                      </a>{" "}
                      or call{" "}
                      <a href="tel:01372743033" className="font-extrabold text-slate-900 underline decoration-slate-300 hover:decoration-slate-500">
                        01372 743033
                      </a>
                      .
                    </p>

                    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                      <Link to="/contact-us">
                        <Button className="h-12 rounded-2xl bg-slate-900 px-6 text-sm font-extrabold text-white hover:bg-slate-800">
                          Enquire now
                          <ArrowRight className="ml-2 h-4 w-4 opacity-90" />
                        </Button>
                      </Link>
                      <a
                        href="tel:01372743033"
                        className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        <Phone className="mr-2 h-4 w-4 text-slate-700" />
                        Call 01372 743033
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Final CTA (super premium) */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-white shadow-[0_40px_120px_-90px_rgba(0,0,0,0.55)] sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white ring-1 ring-white/15">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Ready to start?
                </div>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Ready to start your search?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Browse our latest properties or contact our team for personalised guidance.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <Link to="/properties">
                  <Button className="h-12 rounded-2xl bg-white px-6 text-sm font-extrabold text-slate-900 hover:bg-white/90">
                    View properties
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button
                    variant="outline"
                    className="h-12 rounded-2xl border-white/20 bg-white/5 px-6 text-sm font-extrabold text-white hover:bg-white/10"
                  >
                    Contact us
                    <ChevronRight className="ml-2 h-4 w-4 opacity-80" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-white/85">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  Trusted local agency
                </div>
                <div className="mt-2 text-sm text-white/75">
                  Clear guidance, fast responses, and calm support.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-white/85">
                  <Star className="h-4 w-4 text-amber-300" />
                  Market-led advice
                </div>
                <div className="mt-2 text-sm text-white/75">
                  Price and position support to strengthen your offer.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-white/85">
                  <Phone className="h-4 w-4 text-sky-300" />
                  Speak to the team
                </div>
                <a href="tel:01372743033" className="mt-2 inline-flex items-center gap-2 text-sm font-extrabold text-white hover:underline">
                  01372 743033 <ChevronRight className="h-4 w-4 opacity-80" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-10" />
        </section>
      </div>
    </div>
  );
}
