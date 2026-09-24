import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Linkedin,
  Mail,
  MoveRight,
  Phone,
} from "lucide-react";
import parthCharacter from "../assets/parth-character.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Parth Sharma — Creator & Content Portfolio" },
      {
        name: "description",
        content:
          "Parth Sharma supports creators and teams through content research, social media, community, writing and outreach.",
      },
      { property: "og:title", content: "Parth Sharma — Creator & Content Portfolio" },
      {
        property: "og:description",
        content: "Content research, social media, community, writing and outreach — built for creators and growing teams.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const roles = [
  {
    company: "Sidian Dev",
    role: "Social Media & Community Team",
    duration: "6 months",
    points: [
      "Social media posting and content coordination",
      "Discord and Reddit channel management",
      "Day-to-day community presence",
    ],
  },
  {
    company: "CipherSchools",
    role: "Mentor & Technical Content Writer",
    duration: "3 months",
    points: [
      "Mentored students through technical problem-solving",
      "Created learner-friendly educational content",
      "Made technical concepts easier to understand",
    ],
  },
  {
    company: "Quality Career",
    role: "Business Development Intern",
    duration: "Approx. 2.5–3 months",
    points: ["Supported business development and outreach", "Worked with a startup team focused on communication and growth"],
  },
  {
    company: "Grow & Glow",
    role: "Social Media / Event Organising",
    duration: "College experience",
    points: ["Promoted college club activities", "Supported event organisation and coordination"],
  },
  {
    company: "Earth5",
    role: "Content Research",
    duration: "Project experience",
    points: ["Researched topics to support content development and communication"],
  },
  {
    company: "Agency / Stellar Work",
    role: "LinkedIn Outreach",
    duration: "Project / freelance",
    points: ["Researched prospects", "Supported initial business communication on LinkedIn"],
  },
];

const services = [
  ["01", "Research", "Turn topics, audiences, competitors and trends into usable notes."],
  ["02", "Ideation", "Generate hooks, angles and follow-up ideas from one core topic."],
  ["03", "Writing", "Shape research into scripts, captions, educational posts or briefs."],
  ["04", "Publishing", "Organise posts and maintain day-to-day channel consistency."],
  ["05", "Community", "Keep Discord, Reddit and community channels active and useful."],
  ["06", "Outreach", "Research prospects and support clear LinkedIn communication."],
];

const orbitRoles = [
  { label: "Research", initials: "RS", className: "hero-node hero-node-one" },
  { label: "Writing", initials: "WR", className: "hero-node hero-node-two" },
  { label: "Community", initials: "CM", className: "hero-node hero-node-three" },
  { label: "Outreach", initials: "OU", className: "hero-node hero-node-four" },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" aria-label="Back to top" className="flex items-center">
            <span className="flex size-9 items-center justify-center overflow-hidden rounded-full border-2 border-foreground bg-lime">
              <img src={parthCharacter} alt="" className="mt-2 size-10 object-cover" />
            </span>
          </a>
          <div className="hidden items-center gap-7 font-mono text-xs uppercase md:flex">
            <a href="#profile" className="transition-colors hover:text-coral">Profile</a>
            <a href="#experience" className="transition-colors hover:text-coral">Experience</a>
            <a href="#support" className="transition-colors hover:text-coral">Support</a>
            <a href="#contact" className="transition-colors hover:text-coral">Contact</a>
          </div>
          <a
            href="tel:+918872286699"
            aria-label="Call Parth Sharma at 8872286699"
            className="pop inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 font-mono text-xs font-medium text-lime-foreground"
          >
            <Phone className="size-3.5" /> 8872286699
          </a>
        </div>
      </nav>

      <header id="top" className="hero-stage relative mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-between overflow-hidden px-5 pb-12 pt-8 lg:px-10 lg:pb-14">
        <div className="flex items-start justify-between font-mono text-xs uppercase text-muted-foreground">
          <span>Creator-side operator</span>
          <span className="text-right">Based in India<br />Open to remote</span>
        </div>

        <div className="relative flex min-h-[34rem] items-center justify-center py-20 sm:min-h-[38rem]">
          <div className="hero-paths pointer-events-none absolute inset-0" aria-hidden="true" />
          {orbitRoles.map((item) => (
            <a key={item.label} href="#support" className={item.className} aria-label={`Explore ${item.label}`}>
              <span className="hero-avatar">{item.initials}</span>
              <span className="hero-label">{item.label}</span>
            </a>
          ))}

          <div className="relative z-10 max-w-3xl text-center">
            <p className="mb-5 font-mono text-xs font-medium uppercase text-coral">Parth Sharma · Content & Community</p>
            <h1 className="text-[clamp(3rem,7vw,6.7rem)] font-extrabold leading-[1.08]">
              <span className="block">Content.</span>
              <span className="block">Community.</span>
              <span className="mt-3 block sm:mt-4"><span className="hero-highlight">Growth.</span></span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              I help creators and growing teams turn ideas into clear content, active communities and consistent output.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#experience" className="pop group inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3 text-sm font-bold text-coral-foreground">
                Explore my work <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="mailto:parthsharma12898@gmail.com" className="pop inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold hover:bg-lime">
                Let’s collaborate
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t-2 border-foreground pt-5">
          <p className="font-mono text-xs uppercase">Scroll to meet the work</p>
          <a href="#profile" aria-label="Explore portfolio" className="pop group flex size-12 items-center justify-center rounded-full bg-background hover:bg-lime">
            <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </header>

      <div className="overflow-hidden border-y-2 border-foreground bg-coral py-3 text-coral-foreground">
        <div className="ticker-track flex w-max gap-10 font-mono text-sm uppercase">
          {[0, 1].map((group) => (
            <div key={group} className="flex gap-10" aria-hidden={group === 1}>
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index}>Research → Ideation → Writing → Publishing → Community → Outreach →</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="profile" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
        <div>
          <p className="font-mono text-xs uppercase text-coral">01 / Profile</p>
          <h2 className="mt-5 text-5xl font-bold leading-none sm:text-7xl">Practical by default.</h2>
        </div>
        <div className="lg:pt-16">
          <p className="text-2xl font-medium leading-snug sm:text-4xl">
            A B.Tech Computer Science graduate working at the intersection of content, social media, community, research and business development.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {["Startup experience", "Technical fluency", "Audience-first writing", "Fast, hands-on learning"].map((item) => (
              <div key={item} className="pop rounded-xl bg-card p-5 font-mono text-sm uppercase hover:bg-lime">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 sm:px-8">
        <div style={{ boxShadow: "8px 8px 0 var(--coral)" }} className="pop-lg mx-auto max-w-7xl rounded-3xl bg-foreground px-5 py-20 text-primary-foreground lg:px-12 lg:py-24">
          <div className="mb-14 flex items-end justify-between border-b border-primary-foreground/30 pb-6">
            <div>
              <p className="font-mono text-xs uppercase text-lime">02 / Experience</p>
              <h2 className="mt-4 text-5xl font-bold sm:text-7xl">Where I’ve built.</h2>
            </div>
            <span className="hidden font-mono text-xs uppercase text-primary-foreground/60 sm:block">Select a role to expand</span>
          </div>
          <div>
            {roles.map((item, index) => (
              <details key={item.company} className="group border-b border-primary-foreground/25 py-1" open={index === 0}>
                <summary className="grid cursor-pointer list-none items-center gap-3 py-6 sm:grid-cols-[3rem_1fr_1fr_auto]">
                  <span className="font-mono text-xs text-lime">0{index + 1}</span>
                  <strong className="text-2xl font-semibold sm:text-3xl">{item.company}</strong>
                  <span className="text-sm text-primary-foreground/70">{item.role}</span>
                  <span className="font-mono text-xs uppercase text-primary-foreground/55">{item.duration}</span>
                </summary>
                <div className="pb-7 pl-0 sm:pl-[calc(3rem+1rem)]">
                  {item.points.map((point) => (
                    <p key={point} className="flex max-w-2xl gap-3 py-1 text-primary-foreground/75"><MoveRight className="mt-1 size-4 shrink-0 text-coral" />{point}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase text-coral">03 / How I can help</p>
            <h2 className="mt-5 text-5xl font-bold leading-none sm:text-7xl">From idea to audience.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map(([number, title, copy]) => (
              <article key={number} className="pop group min-h-64 rounded-2xl bg-card p-6 hover:bg-lime">
                <span className="inline-flex size-9 items-center justify-center rounded-full border-2 border-foreground bg-coral font-mono text-xs text-coral-foreground">{number}</span>
                <h3 className="mt-14 text-3xl font-bold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground group-hover:text-lime-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-8">
        <div className="pop-lg mx-auto grid max-w-7xl gap-12 rounded-3xl bg-lime px-5 py-20 text-lime-foreground lg:grid-cols-[0.65fr_1.35fr] lg:px-12 lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase">04 / Spec work</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">A demonstration concept — not client work — showing how I approach short-form content research.</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase">Topic / Starting a career in 2026</p>
            <blockquote className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
              “If I had to restart my career from zero today, these are the 3 things I’d focus on first.”
            </blockquote>
            <div className="mt-12 grid gap-8 border-t-2 border-lime-foreground pt-8 sm:grid-cols-2">
              <div><p className="font-mono text-xs uppercase">The angle</p><p className="mt-3 text-lg">One skill. One proof-of-work project. One consistent outreach system.</p></div>
              <div><p className="font-mono text-xs uppercase">The follow-ups</p><p className="mt-3 text-lg">Skills to learn first • Proof of work with no experience • A weekly job-search system</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-4 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden pop-lg rounded-3xl bg-background">
          <div className="footer-grid relative flex h-72 items-center justify-center overflow-hidden bg-coral sm:h-80">
            <div className="footer-sticker absolute left-4 top-7 -rotate-12 pop rounded-xl bg-lime p-3 text-lime-foreground sm:left-16 sm:top-16">
              <p className="border-b border-foreground pb-1 font-mono text-[10px] font-bold uppercase">Available</p>
              <p className="text-xl font-extrabold italic leading-none">For new work</p>
            </div>

            <a href="mailto:parthsharma12898@gmail.com" className="group relative z-10 mt-10 rounded-full border-[3px] border-foreground bg-lime px-8 py-5 text-center text-lime-foreground shadow-[8px_8px_0_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:mt-0 sm:px-14 sm:py-6">
              <span className="text-4xl font-extrabold italic leading-tight sm:text-5xl">Let’s work together</span>
              <span className="mt-2 block font-mono text-xs font-medium">parthsharma12898@gmail.com · 8872286699</span>
            </a>

            <div className="starburst footer-sticker absolute bottom-5 right-3 flex size-24 rotate-12 items-center justify-center bg-foreground text-center font-mono text-sm font-bold uppercase text-lime sm:right-16 sm:top-14 sm:size-28">
              Let’s<br />build!
            </div>

            <svg className="absolute inset-x-0 bottom-0 h-10 w-full text-background" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
              <path fill="currentColor" d="M0 20 Q25 0 50 20 T100 20 T150 20 T200 20 T250 20 T300 20 T350 20 T400 20 T450 20 T500 20 T550 20 T600 20 T650 20 T700 20 T750 20 T800 20 T850 20 T900 20 T950 20 T1000 20 T1050 20 T1100 20 T1150 20 T1200 20 V40 H0 Z" />
            </svg>
          </div>

          <div className="bg-background p-7 sm:p-12">
            <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
              <div className="min-w-0">
                <div className="flex max-w-xl items-center gap-4">
                  <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-foreground bg-lime">
                    <img src={parthCharacter} alt="" className="mt-3 size-20 object-cover" />
                  </span>
                  <p className="text-lg font-bold leading-snug sm:text-xl">
                    Turning research into clear content, active communities and useful conversations.
                  </p>
                </div>
                <p className="mt-8 text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold uppercase leading-[0.9]">
                  Let's connect<span className="text-coral">.</span>
                </p>
              </div>
              <div className="flex items-end justify-between gap-6 md:flex-col md:items-end">
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/parthsharma8" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex size-12 items-center justify-center pop rounded-xl bg-background hover:bg-lime"><Linkedin className="size-5" /></a>
                  <a href="mailto:parthsharma12898@gmail.com" aria-label="Email Parth" className="flex size-12 items-center justify-center pop rounded-xl bg-background hover:bg-lime"><Mail className="size-5" /></a>
                  <a href="tel:+918872286699" aria-label="Call Parth" className="flex size-12 items-center justify-center pop rounded-xl bg-background hover:bg-lime"><Phone className="size-5" /></a>
                </div>
                <p className="font-mono text-[10px] font-bold uppercase sm:text-xs">Parth Sharma © 2026</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
