import {
  ArrowRight, BadgeCheck, CalendarCheck, CheckCircle2, ClipboardList,
  Home, Leaf, Phone, ShieldCheck, Sparkles, Star, Truck, Users, Wrench,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCall } from "@/components/site/StickyCall";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-cleaning.webp";
import photo1 from "@/assets/foto 1.webp";
import photo2 from "@/assets/foto 2.webp";
import photo3 from "@/assets/foto 3.webp";

const services = [
  { icon: Home, title: "Standard Cleaning", desc: "Regular tidy-ups that keep your home consistently fresh and inviting." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Top-to-bottom detailed cleaning for a truly spotless reset." },
  { icon: Truck, title: "Move In / Move Out", desc: "Make any space move-in ready or get your full deposit back." },
  { icon: CalendarCheck, title: "Airbnb Cleaning", desc: "Fast turnovers with hotel-grade quality between guests." },
  { icon: Wrench, title: "Office Cleaning", desc: "Professional commercial cleaning on a schedule that fits your team." },
];

const whyUs = [
  { icon: BadgeCheck, title: "Trusted Professionals", desc: "Vetted, trained cleaners who treat your home like their own." },
  { icon: ShieldCheck, title: "Background Checked", desc: "Every team member passes a thorough background check." },
  { icon: CalendarCheck, title: "Flexible Scheduling", desc: "One-time, weekly, bi-weekly or monthly — you choose." },
  { icon: Leaf, title: "Eco-Friendly Products", desc: "Safe, non-toxic supplies that protect your family and pets." },
  { icon: CheckCircle2, title: "Satisfaction Guaranteed", desc: "Not happy? We'll come back and re-clean for free." },
  { icon: Users, title: "Supplies Included", desc: "We bring everything — you don't lift a finger." },
];

const steps = [
  { n: "01", title: "Request a Quote", desc: "Tell us about your space. Get a transparent price in under a minute." },
  { n: "02", title: "Schedule Your Cleaning", desc: "Pick a date and time that fits your week — including same-day slots." },
  { n: "03", title: "Enjoy Your Clean Home", desc: "Relax. Our insured pros handle every detail, top to bottom." },
];

const gallery = [
  { img: photo3, label: "Kitchen" },
  { img: photo1, label: "Bathroom" },
  { img: photo2, label: "Room" },
];

const reviews = [
  { name: "Sarah M.", loc: "Brooklyn, NY", text: "Absolutely thrilled. The team was punctual, friendly, and my apartment has never looked better. Booking took 60 seconds." },
  { name: "Daniel R.", loc: "Jersey City, NJ", text: "Best cleaning service we've used. They handle our Airbnb turnovers flawlessly — guests always mention how spotless it is." },
  { name: "Emily K.", loc: "Manhattan, NY", text: "Reliable, professional, and the eco products are a huge plus with two kids and a dog. Highly recommend." },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Toaster />

      {/* HERO */}
      <section id="home" className="relative pt-28 md:pt-36" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid gap-10 md:gap-12 md:grid-cols-2 items-center pb-20 md:pb-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Trusted by 5,000+ happy homes
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-primary">
              Professional House Cleaning <span className="text-accent">You Can Trust</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Reliable cleaning services for busy families. Weekly cleaning, deep cleaning, move in/out and Airbnb cleaning.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+13215002020" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <span className="font-semibold text-primary">4.9</span><span className="text-muted-foreground">/ 1.2k reviews</span>
              </div>
              <div className="flex items-center gap-1.5 text-foreground/80"><ShieldCheck className="h-4 w-4 text-accent" /> Fully Insured</div>
              <div className="flex items-center gap-1.5 text-foreground/80"><BadgeCheck className="h-4 w-4 text-accent" /> Trusted Local Cleaners</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="Professional cleaner in a bright modern home"
              width={1280}
              height={1280}
              className="relative rounded-3xl shadow-soft object-cover w-full aspect-[4/3] md:aspect-square"
            />
            <div className="hidden md:flex glass-card absolute -left-6 bottom-6 items-center gap-3 rounded-2xl p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary"><CheckCircle2 className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-semibold text-primary">100% Satisfaction</p>
                <p className="text-xs text-muted-foreground">Or we re-clean for free</p>
              </div>
            </div>
            <div className="hidden md:flex glass-card absolute -right-4 top-6 items-center gap-3 rounded-2xl p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground"><CalendarCheck className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-semibold text-primary">Same-Day Booking</p>
                <p className="text-xs text-muted-foreground">Available 7 days/week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Get In Touch</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Free estimate in 60 seconds.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Tell us about your home and we'll text back a transparent quote — no calls required.</p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "(321) 500-2020" },
                { icon: BadgeCheck, label: "Email", value: "contact@2020cleaning.com" },
                { icon: CalendarCheck, label: "Hours", value: "Mon – Sat · 8:00 AM – 6:00 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="text-base font-medium text-primary">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft">
            <h3 className="text-2xl font-bold text-primary">Get a Free Quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">Takes less than a minute.</p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Services</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Cleaning, tailored to your home.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Choose from our most-loved services. Every clean comes with our 100% satisfaction guarantee.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card hover:-translate-y-1 hover:shadow-soft hover:border-accent transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-primary group-hover:bg-accent group-hover:text-primary transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Built on trust. Designed for busy lives.</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl bg-background p-6 border border-border/70">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS BANNER */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="rounded-3xl border border-border bg-background shadow-soft overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">

              {/* Left: Google branding + rating */}
              <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                {/* Google logo badge */}
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-9 w-9" aria-label="Google">
                    <path fill="#EA4335" d="M24 9.5c3.1 0 5.8 1.1 8 2.9l6-6C34.3 3.2 29.4 1 24 1 14.8 1 7 6.7 3.7 14.7l7 5.4C12.4 13.7 17.7 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 7.2-16.9z"/>
                    <path fill="#FBBC05" d="M10.7 28.1A14.6 14.6 0 0 1 9.5 24c0-1.4.2-2.8.5-4.1l-7-5.4A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.6-5.8-.5-.9z"/>
                    <path fill="#34A853" d="M24 47c5.4 0 9.9-1.8 13.2-4.8l-7.4-5.7c-1.8 1.2-4.1 2-5.8 2-6.3 0-11.6-4.3-13.5-10l-7.6 5.8C7 41.3 14.8 47 24 47z"/>
                  </svg>
                  <span className="text-xl font-bold text-primary tracking-tight">Google</span>
                </div>

                {/* Stars + score */}
                <div className="text-center md:text-left">
                  <p className="text-5xl font-extrabold text-primary leading-none">4.9</p>
                  <div className="mt-2 flex justify-center md:justify-start">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">Based on Google Reviews</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-border" aria-hidden />

              {/* Right: text + CTA */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">What Our Clients Are Saying</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary leading-snug">
                  Hundreds of 5-star reviews on Google My Business
                </h2>
                <p className="mt-3 text-muted-foreground text-base leading-relaxed">
                  Real customers, real experiences. See what our community has to say about Pristine Home Solutions — straight from Google.
                </p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-soft"
                  aria-label="Read our Google reviews"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
                    <path fill="#fff" d="M24 9.5c3.1 0 5.8 1.1 8 2.9l6-6C34.3 3.2 29.4 1 24 1 14.8 1 7 6.7 3.7 14.7l7 5.4C12.4 13.7 17.7 9.5 24 9.5z"/>
                    <path fill="#fff" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 7.2-16.9z"/>
                    <path fill="#fff" d="M10.7 28.1A14.6 14.6 0 0 1 9.5 24c0-1.4.2-2.8.5-4.1l-7-5.4A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.6-5.8-.5-.9z"/>
                    <path fill="#fff" d="M24 47c5.4 0 9.9-1.8 13.2-4.8l-7.4-5.7c-1.8 1.2-4.1 2-5.8 2-6.3 0-11.6-4.3-13.5-10l-7.6 5.8C7 41.3 14.8 47 24 47z"/>
                  </svg>
                  Read Our Google Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">How It Works</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Booking is the easy part.</h2>
          </div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden />
            {steps.map((s, i) => {
              const Icon = [ClipboardList, CalendarCheck, Sparkles][i];
              return (
                <div key={s.n} className="relative text-center">
                  <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-cta text-cta-foreground text-xs font-bold">{i+1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm max-w-xs mx-auto">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL RESULTS */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Work</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Real Results</h2>
            <p className="mt-4 text-lg text-muted-foreground">A glimpse at what our team does every day.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.label} className="group overflow-hidden rounded-2xl bg-background shadow-card">
                <div className="relative overflow-hidden">
                  <img src={g.img} alt={`${g.label} cleaning result`} loading="lazy" width={800} height={600} className="h-auto md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 rounded-full bg-accent text-primary text-xs font-semibold px-2.5 py-1">Real Results</span>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-primary">{g.label}</p>
                  <p className="text-sm text-muted-foreground">Deep cleaning · 3 hours</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Reviews</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Loved by 5,000+ families.</h2>
            <div className="mt-5 inline-flex items-center gap-2">
              <div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-5 w-5 fill-accent text-accent" />)}</div>
              <span className="font-semibold text-primary">4.9</span>
              <span className="text-muted-foreground">average rating</span>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-card border border-border p-7 shadow-card">
                <div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/20 font-semibold text-primary">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} aria-hidden />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28 text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold">Ready For a Spotless Home?</h2>
          <p className="mt-4 text-lg text-primary-foreground/85 max-w-2xl mx-auto">
            Get your free estimate today and let our professionals handle the cleaning.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a href="#contact" className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+13215002020" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-7 py-4 text-base font-semibold hover:bg-white/20 transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>


      <Footer />
      <StickyCall />
    </div>
  );
}
