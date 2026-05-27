import { Facebook, Instagram } from "lucide-react";
import logoImg from "@/assets/logo.webp";

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="2020 Cleaning" className="h-[72px] w-auto rounded-xl shadow-sm" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Trusted house cleaning services for busy families across the United States.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "https://www.instagram.com/2020.cleaning/" },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href !== "#" ? "_blank" : undefined} rel={s.href !== "#" ? "noreferrer" : undefined} aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-primary/5 hover:bg-accent hover:text-accent-foreground transition-colors">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Get a Quote</a></li>
            <li><a href="#how" className="hover:text-primary transition-colors">How It Works</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>(321) 500-2020</li>
            <li>contact@2020cleaning.com</li>
            <li>Mon–Sat · 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pb-24 md:pb-0">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-center text-center gap-2">
          <p>© {new Date().getFullYear()} 2020 Cleaning. Created by <a href="https://agenciaadcompany.com.br/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">AD Company</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
