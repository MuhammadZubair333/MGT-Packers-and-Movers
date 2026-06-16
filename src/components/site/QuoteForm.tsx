import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { SITE } from "@/lib/site";

const EMAILJS_SERVICE  = "service_jlpk5rq";
const EMAILJS_TEMPLATE = "template_2lp7b6w";
const EMAILJS_KEY      = "ecBRUcCqPTEdc3wMh";

const MOVE_TYPES = [
  "House Shifting",
  "Office Relocation",
  "Packing Only",
  "Loading & Unloading",
  "Warehouse Storage",
  "Cargo / Goods Transport",
  "Truck on Rent",
  "Car Carrier",
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:    fd.get("name"),
          phone:        fd.get("phone"),
          from_city:    fd.get("from"),
          to_city:      fd.get("to"),
          move_date:    fd.get("date") || "Not specified",
          service_type: fd.get("type") || "Not specified",
          message:      fd.get("message") || "No message",
        },
        { publicKey: EMAILJS_KEY }
      );
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="quote" className="relative scroll-mt-24 overflow-hidden bg-gradient-navy py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="text-white lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Get a Free Quote
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Tell us about your move. Get a price in minutes.
          </h2>
          <p className="mt-5 text-white/80 lg:text-lg">
            Share a few details and our team will reply with a transparent quote. No hidden
            charges, no pressure.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/85">
            {[
              "Free survey for large moves",
              "Trained in-house team, not random labour",
              "Premium packing materials included",
              "Available 7 days a week",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm backdrop-blur">
            <p className="font-semibold">Prefer to talk?</p>
            <p className="mt-1 text-white/75">
              Call <a href={`tel:+92${SITE.phoneCall.replace(/[^0-9]/g, "").replace(/^0/, "")}`} className="font-semibold text-white">{SITE.phoneCall}</a>{" "}
              or WhatsApp{" "}
              <a href={`https://wa.me/${SITE.whatsapp}`} className="font-semibold text-white">
                {SITE.phoneWhatsapp}
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" required placeholder="e.g. Ahmed Khan" />
            <Field label="Phone Number" name="phone" type="tel" required placeholder="03xx-xxxxxxx" />
            <Field label="Moving From" name="from" required placeholder="City / Area" />
            <Field label="Moving To" name="to" required placeholder="City / Area" />
            <Field label="Move Date" name="date" type="date" />
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy-deep">
                Type of Move
              </label>
              <select
                name="type"
                required
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
              >
                <option value="">Select…</option>
                {MOVE_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-navy-deep">
                Message (optional)
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about items, floors, lift access, anything fragile…"
                className="w-full rounded-xl border border-input bg-background p-3 text-sm text-foreground outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-red py-3.5 text-sm font-semibold text-white shadow-glow-red transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto sm:px-10"
          >
            {status === "sending" ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
            ) : status === "ok" ? (
              <><CheckCircle2 className="h-4 w-4" /> Request Received</>
            ) : status === "error" ? (
              <><AlertCircle className="h-4 w-4" /> Failed — Try WhatsApp</>
            ) : (
              <>Submit Request <Send className="h-4 w-4" /></>
            )}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            By submitting, you agree to be contacted by MGT Packers &amp; Movers about your move.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy-deep">
        {label}{required && <span className="text-brand-red"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
      />
    </div>
  );
}
