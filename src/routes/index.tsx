import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Linkedin,
  Mail,
  MoveRight,
} from "lucide-react";
import portfolioAsset from "../assets/parth-portfolio.pdf.asset.json";

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

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-mono text-sm font-medium uppercase">PS / 26</a>
          <div className="hidden items-center gap-7 font-mono text-xs uppercase md:flex">
            <a href="#profile" className="transition-colors hover:text-coral">Profile</a>
            <a href="#experience" className="transition-colors hover:text-coral">Experience</a>
            <a href="#support" className="transition-colors hover:text-coral">Support</a>
            <a href="#contact" className="transition-colors hover:text-coral">Contact</a>
          </div>
          <a
            href={portfolioAsset.url}
            download
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-3 py-2 font-mono text-xs uppercase text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-3.5" /> PDF
          </a>
        </div>
      </nav>

      <header id="top" className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl content-between px-5 py-10 lg:px-10 lg:py-14">
        <div className="flex items-start justify-between font-mono text-xs uppercase text-muted-foreground">
          <span>Creator-side operator</span>
          <span className="text-right">Based in India<br />Open to remote</span>
        </div>
        <div className="relative py-12">
          <span className="drift-mark absolute -right-4 top-0 flex size-28 items-center justify-center rounded-full bg-lime font-mono text-xs font-medium uppercase text-lime-foreground sm:right-8 sm:size-36">
            Available<br />to build
          </span>
          <h1 className="max-w-6xl text-[clamp(4.5rem,15vw,12rem)] font-extrabold leading-[0.78] uppercase">
            Parth<br /><span className="text-coral">Sharma</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft sm:ml-auto sm:text-xl">
            I help creators and growing teams turn research into content, conversations into community, and ideas into consistent output.
          </p>
        </div>
        <div className="flex items-end justify-between border-t border-foreground pt-5">
          <p className="font-mono text-xs uppercase">Content • Community • Outreach</p>
          <a href="#profile" aria-label="Explore portfolio" className="group flex size-12 items-center justify-center rounded-full border border-foreground transition-colors hover:bg-lime">
            <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </header>

      <div className="overflow-hidden border-y border-foreground bg-coral py-3 text-coral-foreground">
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
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {["Startup experience", "Technical fluency", "Audience-first writing", "Fast, hands-on learning"].map((item) => (
              <div key={item} className="bg-background p-5 font-mono text-sm uppercase">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-foreground py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
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
          <div className="grid gap-px border border-foreground bg-foreground sm:grid-cols-2">
            {services.map(([number, title, copy]) => (
              <article key={number} className="group min-h-64 bg-background p-6 transition-colors hover:bg-lime">
                <span className="font-mono text-xs text-muted-foreground group-hover:text-lime-foreground">{number}</span>
                <h3 className="mt-14 text-3xl font-bold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground group-hover:text-lime-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground bg-lime py-24 text-lime-foreground lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.65fr_1.35fr] lg:px-10">
          <div>
            <p className="font-mono text-xs uppercase">04 / Spec work</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">A demonstration concept — not client work — showing how I approach short-form content research.</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase">Topic / Starting a career in 2026</p>
            <blockquote className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
              “If I had to restart my career from zero today, these are the 3 things I’d focus on first.”
            </blockquote>
            <div className="mt-12 grid gap-8 border-t border-lime-foreground pt-8 sm:grid-cols-2">
              <div><p className="font-mono text-xs uppercase">The angle</p><p className="mt-3 text-lg">One skill. One proof-of-work project. One consistent outreach system.</p></div>
              <div><p className="font-mono text-xs uppercase">The follow-ups</p><p className="mt-3 text-lg">Skills to learn first • Proof of work with no experience • A weekly job-search system</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-secondary px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border-4 border-card bg-card shadow-sm">
          <div className="footer-grid relative bg-coral px-6 pb-24 pt-16 sm:pt-20">
            <span className="absolute left-4 top-6 hidden -rotate-6 border-2 border-foreground bg-lime px-4 py-2 font-mono text-xs font-medium uppercase leading-tight text-lime-foreground shadow-[3px_3px_0_var(--foreground)] sm:left-10 sm:top-16 sm:block">
              Open to<br /><span className="text-base font-bold normal-case italic">new work</span>
            </span>
            <span className="starburst absolute right-4 top-6 hidden size-28 items-center justify-center bg-foreground text-center text-lg font-extrabold italic leading-none text-primary-foreground sm:right-10 sm:top-14 sm:flex">
              Let’s<br />talk!
            </span>
            <a
              href="mailto:parthsharma12898@gmail.com"
              className="relative mx-auto flex max-w-md items-center justify-center rounded-full border-4 border-foreground bg-lime px-10 py-8 text-3xl font-extrabold italic text-lime-foreground shadow-[0_10px_0_var(--foreground)] transition-all hover:translate-y-1 hover:shadow-[0_5px_0_var(--foreground)] sm:text-5xl"
            >
              <span className="underline decoration-4 underline-offset-8">Email me</span>
            </a>
            <svg className="absolute inset-x-0 bottom-0 h-8 w-full text-card" viewBox="0 0 1200 32" preserveAspectRatio="none" aria-hidden>
              <path fill="currentColor" d="M0 16 Q25 0 50 16 T100 16 T150 16 T200 16 T250 16 T300 16 T350 16 T400 16 T450 16 T500 16 T550 16 T600 16 T650 16 T700 16 T750 16 T800 16 T850 16 T900 16 T950 16 T1000 16 T1050 16 T1100 16 T1150 16 T1200 16 V32 H0 Z" />
            </svg>
          </div>
          <div className="px-6 pb-10 pt-8 sm:px-10">
            <p className="ml-auto max-w-lg text-lg font-bold leading-snug sm:text-xl">
              Ready to start with a small task and let the work speak — from research and writing to community and outreach.
            </p>
            <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
              <p className="text-[clamp(3.5rem,11vw,8rem)] font-extrabold leading-[0.8] tracking-tight">parth<span className="text-coral">.</span></p>
              <div className="flex items-center gap-5">
                <a href="https://linkedin.com/in/parthsharma8" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-coral"><Linkedin className="size-7" /></a>
                <a href="mailto:parthsharma12898@gmail.com" aria-label="Email" className="transition-colors hover:text-coral"><Mail className="size-7" /></a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-border pt-4 font-mono text-xs uppercase text-muted-foreground">
              <span>Parth Sharma © 2026</span><span>Creator • Content • Community</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
