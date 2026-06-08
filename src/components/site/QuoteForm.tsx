import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";

const WEB3FORMS_KEY = "a4120408-ca1b-43f4-ad23-3fed3b891852";

// Keywords that indicate service sellers / spam
const SPAM_KEYWORDS = [
  "seo", "marketing", "social media", "traffic", "trafego", "tráfego",
  "ads", "google ads", "facebook ads", "instagram ads", "paid traffic",
  "designer", "design", "agency", "agencia", "agência", "website",
  "rank", "ranking", "leads", "funnel", "copywriter", "content",
  "freelancer", "offer", "oferta", "promotion", "promo", "cheap",
  "affordable", "services for", "serviços", "help you grow",
  "increase your", "boost your", "digital marketing", "branding",
  "webdesign", "web design", "logo", "backlink", "influencer",
];

function containsSpam(value: string): boolean {
  const lower = value.toLowerCase();
  return SPAM_KEYWORDS.some((kw) => lower.includes(kw));
}

const schema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Enter your full name")
    .max(80)
    .refine((v) => !containsSpam(v), { message: "Please enter your real name." }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(7, "Enter a valid phone number")
    .max(30)
    .regex(/^[\d\s\-\+\(\)]+$/, "Phone number must contain only digits."),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Enter a valid email address")
    .max(200)
    .refine((v) => !containsSpam(v), { message: "Please enter your personal email." }),
  zip: z
    .string({ required_error: "ZIP code is required" })
    .trim()
    .min(3, "Enter your ZIP code")
    .max(12)
    .regex(/^[\d\-\s]+$/, "Enter a valid ZIP code."),
  bedrooms: z.string().min(1, "Select the number of bedrooms"),
  bathrooms: z.string().min(1, "Select the number of bathrooms"),
  cleaning_type: z.string().min(1, "Select a type of cleaning"),
  confirm_client: z.literal("yes", {
    errorMap: () => ({ message: "Please confirm you are requesting a cleaning service." }),
  }),
});

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const formLoadTime = useRef<number>(Date.now());

  // Reset timer whenever form is rendered/re-rendered
  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // 1. Honeypot check
    if (fd.get("bot_field") || fd.get("website_url")) {
      return;
    }

    // 2. Time-based check — bots submit instantly (< 4 seconds)
    const elapsed = Date.now() - formLoadTime.current;
    if (elapsed < 4000) {
      return;
    }

    // 3. Add hidden confirm value for schema
    fd.set("confirm_client", confirmed ? "yes" : "no");

    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_KEY);
      payload.append("subject", `New Quote Request — ${parsed.data.cleaning_type} (${parsed.data.bedrooms} bed / ${parsed.data.bathrooms} bath)`);
      payload.append("from_name", "2020 Cleaning Website");
      payload.append("name", parsed.data.name);
      payload.append("phone", parsed.data.phone);
      payload.append("email", parsed.data.email);
      payload.append("zip", parsed.data.zip);
      payload.append("bedrooms", parsed.data.bedrooms);
      payload.append("bathrooms", parsed.data.bathrooms);
      payload.append("cleaning_type", parsed.data.cleaning_type);
      // Enable Web3Forms built-in spam filter
      payload.append("spam_filter", "true");
      payload.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thanks! We'll text you a free estimate within minutes.");
        (e.target as HTMLFormElement).reset();
        setConfirmed(false);
        formLoadTime.current = Date.now();
      } else {
        toast.error("Something went wrong. Please try again or call us at (321) 500-2020.");
      }
    } catch {
      toast.error("Connection error. Please try again or call us at (321) 500-2020.");
    } finally {
      setSubmitting(false);
    }
  }

  const input =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>

      {/* ── Honeypot fields (hidden from real users) ── */}
      <input type="text" name="bot_field"    tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <input type="text" name="website_url"  tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />

      {/* ── Name & Phone ── */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1">
          <input className={input} name="name" placeholder="Full name *" required aria-label="Full name" />
        </div>
        <div className="grid gap-1">
          <input className={input} name="phone" type="tel" placeholder="Phone *" required aria-label="Phone number" />
        </div>
      </div>

      {/* ── Email ── */}
      <input className={input} name="email" type="email" placeholder="Email address *" required aria-label="Email address" />

      {/* ── ZIP / Bedrooms / Bathrooms ── */}
      <div className="grid gap-4 sm:grid-cols-3">
        <input className={input} name="zip" placeholder="ZIP code *" required aria-label="ZIP code" />
        <select className={input} name="bedrooms" required defaultValue="" aria-label="Number of bedrooms">
          <option value="" disabled>Bedrooms *</option>
          {["Studio","1","2","3","4+"].map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <select className={input} name="bathrooms" required defaultValue="" aria-label="Number of bathrooms">
          <option value="" disabled>Bathrooms *</option>
          {["1","2","3","4+"].map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      {/* ── Cleaning type ── */}
      <select className={input} name="cleaning_type" required defaultValue="" aria-label="Type of cleaning">
        <option value="" disabled>Type of Cleaning *</option>
        {["Standard Cleaning","Deep Cleaning","Move In / Move Out","Airbnb Cleaning","Office Cleaning"].map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      {/* ── Human confirmation checkbox ── */}
      <label
        className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
          confirmed ? "border-accent bg-accent/5" : "border-border bg-background"
        }`}
      >
        <input
          type="checkbox"
          name="confirm_client"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[hsl(var(--accent))] cursor-pointer"
          required
          aria-label="Confirm you are requesting a cleaning service"
        />
        <span className="text-sm text-muted-foreground leading-snug">
          <span className="font-semibold text-foreground">I confirm</span> I am a homeowner or tenant looking for a{" "}
          <span className="font-semibold text-foreground">cleaning service</span>. I am not offering products, marketing, design, or any other services.
        </span>
      </label>

      {/* ── Submit ── */}
      <button
        disabled={submitting || !confirmed}
        className="btn-cta mt-2 rounded-xl py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          "Sending…"
        ) : (
          <>
            <ShieldCheck className="h-4 w-4" />
            Get My Free Estimate
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        No obligation · 60-second response · Your info stays private.
      </p>
    </form>
  );
}
