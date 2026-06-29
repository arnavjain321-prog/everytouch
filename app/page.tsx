import Image from "next/image";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzoqzrr";
const BASE_PATH = process.env.NODE_ENV === "production" ? "/everytouch" : "";
const LOGO_SRC = `${BASE_PATH}/logo.png`;
const REEL_SRC = `${BASE_PATH}/xavi_reel_720p.mp4`;
const REEL_POSTER = `${BASE_PATH}/xavi_reel_poster.jpg`;

function WaitlistForm({ id }: { id: string }) {
  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        aria-label="Email address"
        id={`email-${id}`}
        className="flex-1 px-4 py-3 rounded-md bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-md bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] text-white font-semibold transition shadow-lg shadow-[color:var(--accent)]/20 whitespace-nowrap"
      >
        Join Waitlist
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" aria-hidden />
        <div className="relative max-w-3xl">
          <Image
            src={LOGO_SRC}
            alt="EveryTouch"
            width={240}
            height={240}
            priority
            className="mx-auto mb-10 w-40 h-auto sm:w-48 md:w-52 drop-shadow-[0_0_40px_rgba(255,45,45,0.15)]"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
            90 minutes of match film,<br />
            edited to your every touch.
          </h1>
          <p className="text-lg sm:text-xl text-[color:var(--muted)] mb-10 max-w-xl mx-auto">
            Automatically. No editing skills required.
          </p>
          <WaitlistForm id="hero" />
          <p className="mt-4 text-sm text-white/40">
            Free during beta · Limited spots
          </p>
        </div>
      </section>

      {/* DEMO REEL — proof of product. A real auto-generated reel from a
          15-min Barca U19 clip, tracking the right back. Muted +
          autoPlay + loop + playsInline because that's the combination
          most browsers will autoplay without user gesture; we also ship
          a poster image so the section never appears empty while the
          MP4 buffers. preload="metadata" keeps the page-load cost
          small (only ~50KB until the user actually plays). */}
      <section className="px-6 py-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="uppercase text-xs tracking-[0.2em] text-[color:var(--accent)] mb-4">See it work</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              60 seconds. Every touch.
            </h2>
            <p className="text-base sm:text-lg text-[color:var(--muted)] max-w-2xl mx-auto">
              A real reel auto-generated from 15 minutes of a Barcelona U19 match, tracking the right back. No manual editing. Title card, freeze-circle highlights, music — all built by the app.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black">
            <video
              src={REEL_SRC}
              poster={REEL_POSTER}
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-xs tracking-[0.2em] text-[color:var(--accent)] mb-4">The problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            You played 90 minutes. Nobody's watching all of it.
          </h2>
          <p className="text-lg text-[color:var(--muted)] leading-relaxed">
            College coaches scan film in seconds, not hours. They want the touches: your first touch, your passes, your runs off the ball, your defensive recoveries. Buried in a full match, those moments don't get seen. Editing them out manually takes hours per game, every week, all season.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] text-[color:var(--accent)] mb-4">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Drop your match. Get your reel.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Drop your match",
                body: "Import any full-length match video. Broadcast, sideline cam, phone footage. Runs locally on your Mac so your film never leaves your machine.",
              },
              {
                step: "02",
                title: "AI finds every touch",
                body: "EveryTouch identifies you across the full match and tags every one of your touches automatically. No manual scrubbing.",
              },
              {
                step: "03",
                title: "Export your reel",
                body: "Pick the touches that matter. Export a recruiter-ready highlight reel as MP4, ready to send.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="relative">
                <div className="text-[color:var(--accent)] font-mono text-sm mb-3">{step}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-[color:var(--muted)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="px-6 py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] text-[color:var(--accent)] mb-4">Why EveryTouch</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Built different. Built for players.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Runs on your Mac",
                body: "No cloud upload. Your match film stays on your machine. Process a full match overnight. No monthly fees, no subscription, no streaming a 2 GB file to someone else's server.",
              },
              {
                title: "Every touch, not just goals",
                body: "Defenders, midfielders, goalkeepers. The moments that matter aren't always shots. EveryTouch finds every time the ball comes to you.",
              },
              {
                title: "AI-powered player ID",
                body: "We identify you across the full match, even after substitutions, occlusions, and camera cuts. The hard ML problem is solved so you don't have to scrub the timeline.",
              },
              {
                title: "Built by a player",
                body: "EveryTouch was built by a former D1 college player who lived the recruiting reel grind. Every design decision answers: would this have helped me get seen?",
              },
            ].map(({ title, body }) => (
              <div key={title} className="p-6 rounded-lg border border-white/10 bg-black/40">
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-[color:var(--muted)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR COACHES */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-xs tracking-[0.2em] text-[color:var(--accent)] mb-4">For coaches</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Generate per-player reels for your whole team.
          </h2>
          <p className="text-lg text-[color:var(--muted)] leading-relaxed mb-8">
            Upload one match. Export individual highlight reels for every player on your roster, automatically. Stop spending Sundays in Premiere. Give recruits the film they need to get to the next level.
          </p>
          <a
            href="#waitlist"
            className="inline-block px-6 py-3 rounded-md border border-white/20 hover:border-white/50 transition font-semibold"
          >
            Join the coach waitlist
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs tracking-[0.2em] text-[color:var(--accent)] mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              The questions everyone asks.
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "How long does it take to process a full match?",
                a: "Designed for batch processing — drop your match in, work on something else while it runs. A 15-minute clip processes in roughly the time it takes to watch it. Full 90-minute matches are designed to run overnight on a consumer Apple Silicon Mac.",
              },
              {
                q: "What video formats are supported?",
                a: "MP4, MOV, and most common formats. Broadcast cameras, sideline tripods, and even phone footage work. Higher-resolution input produces cleaner highlights.",
              },
              {
                q: "Do I need an internet connection to process?",
                a: "No. EveryTouch runs entirely on your local Mac. Your film never leaves your machine. Internet is only required for downloading the app initially.",
              },
              {
                q: "How is this different from Hudl or Veo?",
                a: "Hudl and Veo are team-level tools designed for coaches managing season film. EveryTouch is built for the individual player who needs a recruiter-ready reel without paying a recurring SaaS subscription. One purchase, season after season.",
              },
              {
                q: "When can I actually use it?",
                a: "We're in late beta now. Join the waitlist and you'll be among the first to get access when we launch the Mac download.",
              },
              {
                q: "What does it cost?",
                a: "Free during beta. We'll announce pricing closer to public launch. Designed to be affordable for high school and college players, not enterprise-priced.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-lg border border-white/10 bg-black/40 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-white/[0.02] transition">
                  <span className="font-semibold pr-4">{q}</span>
                  <span className="text-[color:var(--accent)] transition group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-[color:var(--muted)] leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="waitlist" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get your reel.
          </h2>
          <p className="text-lg text-[color:var(--muted)] mb-10">
            Drop your email. Be first in line when we launch.
          </p>
          <WaitlistForm id="bottom" />
          <p className="mt-4 text-sm text-white/40">
            Free during beta · We never share your email
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex items-center gap-3">
            <Image src={LOGO_SRC} alt="" width={24} height={24} className="w-6 h-6" />
            <span>EveryTouch · {new Date().getFullYear()}</span>
          </div>
          <a
            href="mailto:hello@everytouch.app"
            className="hover:text-white transition"
          >
            hello@everytouch.app
          </a>
        </div>
      </footer>
    </>
  );
}
