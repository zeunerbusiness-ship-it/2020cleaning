import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string({ required_error: "Name is required" }).trim().min(2, "Enter your name").max(80),
  phone: z.string({ required_error: "Phone is required" }).trim().min(7, "Enter a valid phone").max(30),
  email: z.string({ required_error: "Email is required" }).trim().email("Invalid email").max(200),
  zip: z.string({ required_error: "ZIP code is required" }).trim().min(3, "ZIP required").max(12),
  bedrooms: z.string({ required_error: "Select the number of bedrooms" }).min(1, "Select bedrooms"),
  bathrooms: z.string({ required_error: "Select the number of bathrooms" }).min(1, "Select bathrooms"),
  cleaning_type: z.string({ required_error: "Select a type of cleaning" }).min(1, "Select a type of cleaning"),
});

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("bot_field")) {
      // Honeypot caught a bot, fail silently
      return;
    }

    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs, all fields are required.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thanks! We'll text you a free estimate within minutes.");
    (e.target as HTMLFormElement).reset();
  }

  const input = "w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Anti-spam honeypot */}
      <input type="text" name="bot_field" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={input} name="name" placeholder="Full name" required />
        <input className={input} name="phone" type="tel" placeholder="Phone" required />
      </div>
      <input className={input} name="email" type="email" placeholder="Email address" required />
      <div className="grid gap-4 sm:grid-cols-3">
        <input className={input} name="zip" placeholder="ZIP code" required />
        <select className={input} name="bedrooms" required defaultValue="">
          <option value="" disabled>Bedrooms</option>
          {["Studio","1","2","3","4+"].map((b)=> <option key={b} value={b}>{b}</option>)}
        </select>
        <select className={input} name="bathrooms" required defaultValue="">
          <option value="" disabled>Bathrooms</option>
          {["1","2","3","4+"].map((b)=> <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <select className={input} name="cleaning_type" required defaultValue="">
        <option value="" disabled>Type of Cleaning</option>
        {["Standard Cleaning","Deep Cleaning","Move In / Move Out","Airbnb Cleaning","Office Cleaning"].map((t)=> <option key={t} value={t}>{t}</option>)}
      </select>
      <button disabled={submitting} className="btn-cta mt-2 rounded-xl py-4 text-base font-semibold disabled:opacity-70">
        {submitting ? "Sending…" : "Get My Free Estimate"}
      </button>
      <p className="text-xs text-muted-foreground text-center">No obligation · 60-second response · Your info stays private.</p>
    </form>
  );
}
