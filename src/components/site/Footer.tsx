import { Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="2020 Cleaning" className="h-14 w-auto rounded-xl shadow-sm" />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            Trusted house cleaning services for busy families across the United States.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "https://www.instagram.com/2020.cleaning/" },
              { icon: Twitter, href: "#" }
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href !== "#" ? "_blank" : undefined} rel={s.href !== "#" ? "noreferrer" : undefined} aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-colors">
                <s.icon className="h-4 w-4" />
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
            <li>(321) 500-2020</li>
            <li>contact@2020cleaning.com</li>
            <li>Mon–Sat · 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} 2020 Cleaning. Created by <a href="https://agenciaadcompany.com.br/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">AD Company</a>. All rights reserved.</p>
          <p>Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  );
}
