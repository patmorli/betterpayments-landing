import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/353870047772?text=Hi%20Better%20Payments,%20I%27d%20like%20to%20talk%20through%20the%20best%20setup%20for%20my%20business.";
const PHONE_URL = "tel:+353870047772";

/* ------------------------------------------------------------------ */
/*  Tiny reusable pieces                                              */
/* ------------------------------------------------------------------ */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className}>
      <polyline
        points="2,7 5,10 10,3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(245,248,246,0.88)] backdrop-blur-[14px]">
      <nav className="max-w-[1120px] mx-auto flex items-center justify-between gap-4 h-[64px] px-6 max-sm:px-4">
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-[17px] text-[var(--text)] no-underline"
        >
          <span className="w-6 h-6 bg-[var(--green)] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_0_5px_var(--accent-soft)]">
            <CheckIcon className="w-[13px] h-[13px] text-white" />
          </span>
          <span>
            <strong>Better</strong> Payments
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_URL}
            className="text-sm text-[var(--muted)] hover:text-[var(--green)] transition-colors max-sm:hidden"
          >
            087&nbsp;004&nbsp;7772
          </a>
          <a
            href={PHONE_URL}
            className="rounded-full bg-[var(--green)] text-white font-semibold text-sm px-5 py-2.5 hover:bg-[var(--green-dark)] transition-colors"
          >
            Call us
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="max-w-[1120px] mx-auto rounded-[24px] border border-[var(--border)] bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.06),transparent_50%),linear-gradient(180deg,#ffffff_0%,#f0f7f2_100%)] shadow-[var(--shadow)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center p-8 sm:p-11 lg:p-14">
        {/* Copy */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--green)] mb-5">
            Card Terminals &amp; POS &middot; Ireland
          </p>

          <h1 className="text-[clamp(32px,5.5vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-[var(--text)] mb-5">
            Free card terminal.
            <br />
            Set up in 48&nbsp;hours.
          </h1>

          <p className="text-[17px] leading-relaxed text-[var(--muted)] max-w-[540px] mb-8">
            A portable card terminal at zero cost, or a full point-of-sale
            system from &euro;39/month. Straightforward pricing, no hidden fees,
            and a real team in Ireland you can actually talk to.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 max-sm:flex-col">
            <a
              href={WHATSAPP_URL}
              className="rounded-full inline-flex items-center justify-center bg-[var(--green)] text-white font-bold text-[15px] px-7 py-3.5 shadow-[0_8px_24px_rgba(22,163,74,0.2)] hover:bg-[var(--green-dark)] hover:-translate-y-px transition-all duration-150 max-sm:w-full"
            >
              Message on WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="rounded-full inline-flex items-center justify-center border border-[var(--border)] bg-white text-[var(--text)] font-semibold text-[15px] px-7 py-3.5 hover:border-[var(--green)] hover:text-[var(--green)] hover:-translate-y-px transition-all duration-150 max-sm:w-full"
            >
              Call 087&nbsp;004&nbsp;7772
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[var(--muted)]">
            <span>
              <strong className="text-[var(--text)]">CRO 809024</strong>
            </span>
            <span className="text-[var(--border)]">|</span>
            <span>Set up in as little as 48 hours</span>
            <span className="text-[var(--border)]">|</span>
            <span>Support from Ireland</span>
          </div>
        </div>

        {/* Product images — two cards side by side with slight transforms */}
        <div className="flex items-start gap-4 max-sm:gap-3 py-2 justify-center">
          {/* Terminal — smaller, tilted left */}
          <div className="w-[35%] -rotate-[3deg] translate-y-10 rounded-2xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(247,250,248,0.92))] shadow-[0_4px_8px_rgba(15,23,42,0.06),0_20px_56px_rgba(15,23,42,0.10)] p-3">
            <Image
              src="/terminal.png"
              alt="Portable card terminal device"
              width={660}
              height={728}
              className="w-full object-contain drop-shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
              priority
            />
            <span className="inline-flex mt-2 px-2.5 py-1 rounded-full bg-white border border-[var(--border)] text-[11px] font-medium text-[var(--muted)]">
              Portable terminal
            </span>
          </div>
          {/* POS — larger, tilted right */}
          <div className="w-[55%] rotate-[2deg] -translate-y-1 rounded-2xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(247,250,248,0.92))] shadow-[0_2px_6px_rgba(15,23,42,0.04),0_16px_48px_rgba(15,23,42,0.08)] p-4">
            <Image
              src="/pos.png"
              alt="POS touchscreen system for hospitality and retail"
              width={638}
              height={549}
              className="w-full object-contain drop-shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
              priority
            />
            <span className="inline-flex mt-3 px-3 py-1.5 rounded-full bg-white border border-[var(--border)] text-[12px] font-medium text-[var(--muted)]">
              POS for front-of-house teams
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Products                                                          */
/* ------------------------------------------------------------------ */

function Products() {
  return (
    <section className="max-w-[1120px] mx-auto pt-16">
      <div className="mb-8 max-w-[640px]">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--green)] mb-2.5">
          Two Products
        </p>
        <h2 className="text-[clamp(24px,3.4vw,34px)] font-[750] tracking-[-0.02em] mb-3">
          A free terminal or a full POS. Pick what fits.
        </h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Both include next-business-day settlement, free reporting, and
          some of the lowest processing rates in Ireland.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Portable Terminal */}
        <div className="bg-white border border-[var(--border)] rounded-2xl shadow-[var(--shadow)] overflow-hidden">
          <div className="bg-[var(--green)] text-white text-center py-2.5 text-[13px] font-bold tracking-wide uppercase">
            Free terminal
          </div>
          <div className="p-7">
            <h3 className="text-[22px] font-bold mb-1">
              Portable Card Terminal
            </h3>
            <p className="text-[var(--muted)] mb-5">
              Standalone handheld device with built-in printer and 4G.
            </p>
            <ul className="space-y-2.5 text-[15px] mb-6">
              {[
                "Contactless, chip & PIN, Apple Pay, Google Pay",
                "Built-in receipt printer",
                "WiFi + 4G connectivity included",
                "Built-in tipping and email collection",
                "Free reporting portal",
                "Lifetime warranty on hardware",
              ].map((f) => (
                <li key={f} className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-[var(--accent-soft)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-[var(--green)]" />
                  </span>
                  <span className="text-[var(--muted)]">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-[var(--muted)] border-t border-[var(--border)] pt-4">
              <strong className="text-[var(--text)]">Best for:</strong> Food
              trucks, market stalls, pop-ups, tradespeople, delivery, mobile
              businesses, retail.
            </p>
          </div>
        </div>

        {/* Full POS System */}
        <div className="bg-white border border-[var(--border)] rounded-2xl shadow-[var(--shadow)] overflow-hidden">
          <div className="bg-[var(--text)] text-white text-center py-2.5 text-[13px] font-bold tracking-wide uppercase">
            From &euro;39/month
          </div>
          <div className="p-7">
            <h3 className="text-[22px] font-bold mb-1">
              Point-of-Sale System
            </h3>
            <p className="text-[var(--muted)] mb-5">
              14&Prime; touchscreen workstation with cash drawer, printer, and
              payment terminal.
            </p>
            <ul className="space-y-2.5 text-[15px] mb-6">
              {[
                "Full menu management and order flow",
                "Table management with layout builder",
                "Real-time order routing to kitchen and bar",
                "Reservations, tabs, split bills",
                "Online ordering, loyalty, and marketing",
                "Lifetime warranty on hardware",
              ].map((f) => (
                <li key={f} className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-[var(--accent-soft)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-[var(--green)]" />
                  </span>
                  <span className="text-[var(--muted)]">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-[var(--muted)] border-t border-[var(--border)] pt-4">
              <strong className="text-[var(--text)]">Best for:</strong>{" "}
              Restaurants, pubs, cafes, takeaways, busy retail, hotels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Better Payments                                               */
/* ------------------------------------------------------------------ */

const reasons = [
  {
    title: "No hidden fees",
    desc: "Zero setup cost. Zero PCI compliance fees. Zero monthly service charges. We quote rates based on your business — and they're hard to beat.",
  },
  {
    title: "Lifetime warranty",
    desc: "Every terminal and POS is covered for life. If something breaks, it gets replaced.",
  },
  {
    title: "Next-day settlement",
    desc: "Money from today's transactions lands in your account by 4pm the next business day.",
  },
  {
    title: "Support from Ireland",
    desc: "Real people on phone, email, and chat. 24/7/365 technical support on all devices.",
  },
];

function WhyUs() {
  return (
    <section className="max-w-[1120px] mx-auto pt-16">
      <div className="mb-8 max-w-[640px]">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--green)] mb-2.5">
          Why Better Payments
        </p>
        <h2 className="text-[clamp(24px,3.4vw,34px)] font-[750] tracking-[-0.02em] mb-3">
          Transparent pricing and real support.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-[var(--shadow)]"
          >
            <p className="font-bold text-[17px] mb-2 text-[var(--text)]">
              {r.title}
            </p>
            <p className="text-[15px] leading-relaxed text-[var(--muted)]">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                           */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section className="max-w-[1120px] mx-auto pt-16">
      <div className="mb-8 max-w-[640px]">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--green)] mb-2.5">
          Get Started
        </p>
        <h2 className="text-[clamp(24px,3.4vw,34px)] font-[750] tracking-[-0.02em] mb-3">
          Talk to us before you commit to anything.
        </h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Tell us a bit about your business and we&apos;ll put together a
          tailored quote with rates specific to your setup. No pressure, no
          jargon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href={PHONE_URL}
          className="group bg-white border border-[var(--border)] rounded-2xl p-6 shadow-[var(--shadow)] hover:border-[var(--green)] transition-colors no-underline"
        >
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-2">
            Phone
          </p>
          <p className="font-bold text-[var(--text)] group-hover:text-[var(--green)] transition-colors">
            087&nbsp;004&nbsp;7772
          </p>
          <p className="mt-1.5 text-sm text-[var(--muted)]">
            Call the team directly
          </p>
        </a>

        <a
          href={WHATSAPP_URL}
          className="group bg-white border border-[var(--border)] rounded-2xl p-6 shadow-[var(--shadow)] hover:border-[var(--green)] transition-colors no-underline"
        >
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-2">
            WhatsApp
          </p>
          <p className="font-bold text-[var(--text)] group-hover:text-[var(--green)] transition-colors">
            Message Better Payments
          </p>
          <p className="mt-1.5 text-sm text-[var(--muted)]">
            Quick questions and setup chats
          </p>
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="max-w-[1120px] mx-auto pt-10 pb-4 text-[var(--muted)] text-sm">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-2">
        <p>&copy; Better Payments Limited</p>
        <div className="flex gap-4">
          <a
            href={PHONE_URL}
            className="text-[var(--muted)] hover:text-[var(--green)] no-underline transition-colors"
          >
            Call
          </a>
          <a
            href={WHATSAPP_URL}
            className="text-[var(--muted)] hover:text-[var(--green)] no-underline transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:sales@betterpayments.ie"
            className="text-[var(--muted)] hover:text-[var(--green)] no-underline transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      <p className="text-[12px] text-[var(--muted)]/60">
        3rd Floor, 61 Thomas Street, Dublin 8, D08 W250 &middot; CRO 809024
      </p>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-6 max-sm:px-4 pt-7 pb-10">
        <Hero />
        <Products />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
