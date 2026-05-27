import { useEffect, useState } from "react";
import { Menu, MessageSquare, X } from "lucide-react";
import logoImg from "@/assets/logo.webp";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logoImg} alt="2020 Cleaning" className="h-[83px] w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="sms:+13215002020" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <MessageSquare className="h-4 w-4" /> (321) 500-2020
          </a>
          <a href="#contact" className="btn-cta inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold">
            Get Free Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-background/70"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-5 py-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="py-3 text-base font-medium" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="btn-cta mt-2 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold" onClick={() => setOpen(false)}>
              Get Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
