import { Facebook, Instagram, Sparkles, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">SparkleHome</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            Trusted house cleaning services for busy families across the United States.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#reviews" className="hover:text-accent">Reviews</a></li>
            <li><a href="#contact" className="hover:text-accent">Get a Quote</a></li>
            <li><a href="#how" className="hover:text-accent">How It Works</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Service Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>New York, NY</li>
            <li>Brooklyn, NY</li>
            <li>Queens, NY</li>
            <li>Jersey City, NJ</li>
            <li>Hoboken, NJ</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>(800) 555-0199</li>
            <li>hello@sparklehome.com</li>
            <li>Mon–Sat · 7AM – 8PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} SparkleHome Cleaning. All rights reserved.</p>
          <p>Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  );
}
