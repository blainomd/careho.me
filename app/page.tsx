"use client";

import { useState } from "react";

function ShieldIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const coverageItems = [
  {
    title: "Home modifications",
    description: "Grab bars, ramps, better lighting, walk-in showers",
  },
  {
    title: "In-home W-2 caregivers",
    description: "Through co-op.care \u2014 trained, insured, worker-owned",
  },
  {
    title: "Smart home monitoring",
    description: "Fall detection, medication reminders, connected scales",
  },
  {
    title: "Community transport",
    description: "Cybercab rides to doctor visits, pharmacy, and lab work",
  },
  {
    title: "Meal delivery",
    description: "Nutritious meals from community kitchens, not frozen boxes",
  },
  {
    title: "Respite care",
    description: "Relief for family caregivers \u2014 because they need rest too",
  },
];

async function submitWaitlist(email: string, source: string): Promise<void> {
  try {
    await fetch("https://api.solvinghealth.com/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, product: "careho.me", source }),
    });
  } catch {
    // fail silently — show confirmation regardless
  }
}

export default function Home() {
  const [heroEmail, setHeroEmail] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [ctaSubmitting, setCtaSubmitting] = useState(false);

  async function handleHeroSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!heroEmail || heroSubmitting) return;
    setHeroSubmitting(true);
    await submitWaitlist(heroEmail, "hero-form");
    setHeroSubmitted(true);
    setHeroSubmitting(false);
  }

  async function handleCtaSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ctaEmail || ctaSubmitting) return;
    setCtaSubmitting(true);
    await submitWaitlist(ctaEmail, "cta-form");
    setCtaSubmitted(true);
    setCtaSubmitting(false);
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="w-full border-b border-deep-blue/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-deep-blue">
              <ShieldIcon />
            </div>
            <div>
              <span className="text-lg font-semibold tracking-tight text-deep-blue">
                Age in Place Insurance
              </span>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-sky-blue/10 px-3 py-1 text-xs font-medium text-sky-blue">
            Coming 2027
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-deep-blue text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">
            You don&apos;t want to go to a facility.
            <br />
            Neither do we.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl mx-auto mb-10">
            Age in Place Insurance is designed for one thing: keeping you home.
            Not in a nursing home. Not in assisted living.{" "}
            <span className="text-white font-medium">Home.</span> Where you know
            the walls, the neighbors, and the morning light.
          </p>
          {heroSubmitted ? (
            <p className="text-sky-blue text-lg font-medium">
              Thank you. We will be in touch.
            </p>
          ) : (
            <form
              onSubmit={handleHeroSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                className="flex-1 rounded-lg px-4 py-3 text-deep-blue bg-white placeholder:text-warm-gray text-base outline-none focus:ring-2 focus:ring-sky-blue"
              />
              <button
                type="submit"
                disabled={heroSubmitting}
                className="rounded-lg bg-sky-blue px-6 py-3 text-white font-medium hover:bg-sky-blue/90 transition-colors cursor-pointer disabled:opacity-60 whitespace-nowrap"
              >
                {heroSubmitting ? "Joining..." : "Get notified"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Why this doesn't exist yet */}
      <section className="w-full bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-8 text-center">
            Why this doesn&apos;t exist yet
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-warm-gray">
            <p>
              Traditional long-term care insurance costs{" "}
              <span className="text-deep-blue font-medium">
                $3,000 to $7,000 per year
              </span>
              . It covers facility care primarily.{" "}
              <span className="text-deep-blue font-medium">
                70% of claims go to nursing homes.
              </span>
            </p>
            <p>
              The entire product was designed around institutions. Around beds in
              buildings. Around the assumption that when you need help, you leave
              your home.
            </p>
            <p className="text-deep-blue font-medium text-xl">
              Nobody built insurance for staying home &mdash; until now.
            </p>
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="w-full bg-light-gray">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-4 text-center">
            What it covers
          </h2>
          <p className="text-warm-gray text-center mb-12 text-lg max-w-xl mx-auto">
            Everything you need to stay home safely. Nothing you don&apos;t.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-deep-blue/5"
              >
                <div className="flex items-start gap-3">
                  <div className="text-sky-blue mt-0.5 shrink-0">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-12 text-center">
            How it works
          </h2>
          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="text-sky-blue shrink-0 mt-1">
                <HomeIcon />
              </div>
              <div>
                <h3 className="font-semibold text-deep-blue text-lg mb-2">
                  Build toward coverage
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  Members build toward coverage through co-op.care membership.
                  Your participation creates the foundation for your plan.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-sky-blue shrink-0 mt-1">
                <HeartIcon />
              </div>
              <div>
                <h3 className="font-semibold text-deep-blue text-lg mb-2">
                  Data that proves you&apos;re lower risk
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  Years of ComfortCard data becomes actuarial proof. Your health
                  journey, documented continuously, shows insurers what they have
                  never been able to see before.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-sky-blue shrink-0 mt-1">
                <ClockIcon />
              </div>
              <div>
                <h3 className="font-semibold text-deep-blue text-lg mb-2">
                  The cooperative knows you
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  The insurance reflects it. Not a faceless policy from a
                  faceless company. A product built by the same people who
                  already help you stay home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-deep-blue text-white">
        <div className="max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
            Coming 2027 — Subject to regulatory approval
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Get notified when enrollment opens
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Be the first to know when Age in Place Insurance is available.
          </p>
          {ctaSubmitted ? (
            <p className="text-sky-blue text-lg font-medium">
              Thank you. We will be in touch.
            </p>
          ) : (
            <form
              onSubmit={handleCtaSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                className="flex-1 rounded-lg px-4 py-3 text-deep-blue bg-white placeholder:text-warm-gray text-base outline-none focus:ring-2 focus:ring-sky-blue"
              />
              <button
                type="submit"
                disabled={ctaSubmitting}
                className="rounded-lg bg-sky-blue px-6 py-3 text-white font-medium hover:bg-sky-blue/90 transition-colors cursor-pointer disabled:opacity-60 whitespace-nowrap"
              >
                {ctaSubmitting ? "Joining..." : "Get notified"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="w-full bg-light-gray">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-warm-gray text-xs leading-relaxed">
            <strong className="text-deep-blue">Regulatory disclaimer:</strong> careho.me is a pre-launch
            insurance product concept under development. No insurance products are currently
            available for purchase or enrollment. All described benefits are subject to state
            regulatory approval prior to offering. Insurance products are regulated by state
            insurance departments and must be approved before sale. Joining this waitlist does
            not create a contract, coverage, or any insurance obligation. co-op.care Technologies
            LLC is not a licensed insurance company. Any future insurance product will be
            underwritten by a licensed insurance carrier. The 2027 launch timeline is an estimate
            and is contingent on successful regulatory filings and carrier partnerships.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-deep-blue/10 bg-cream">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-sm">
            A{" "}
            <a
              href="https://co-op.care"
              className="text-deep-blue font-medium hover:text-sky-blue transition-colors"
            >
              co-op.care
            </a>{" "}
            insurance product
          </p>
          <div className="flex items-center gap-6 text-sm text-warm-gray">
            <a
              href="https://co-op.care"
              className="hover:text-deep-blue transition-colors"
            >
              co-op.care
            </a>
            <a
              href="https://comfortcard.org"
              className="hover:text-deep-blue transition-colors"
            >
              comfortcard.org
            </a>
          </div>
          <p className="text-warm-gray/60 text-xs">Built entirely by AI.</p>
        </div>
      </footer>
    </div>
  );
}
