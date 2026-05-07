"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type FormState = "idle" | "submitting" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  type: string;
  location: string;
  message: string;
};

type FieldError = Partial<Record<keyof FormData, string>>;

const ENQUIRY_TYPES = [
  "Architectural Design",
  "Interior Design",
  "Design-Build",
  "Cultural & Institutional",
  "Facilities Management",
  "Property Development",
  "Studio visit",
  "Press enquiry",
  "Other",
] as const;

function validate(data: FormData): FieldError {
  const errors: FieldError = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.type) errors.type = "Select an enquiry type.";
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Tell us a little more — at least 20 characters.";
  }
  return errors;
}

const inputBase = cn(
  "w-full rounded-[var(--radius-sm)] border",
  "border-[color:color-mix(in_srgb,var(--color-ink)_18%,transparent)]",
  "bg-transparent px-4 py-3",
  "text-[0.9375rem] text-[var(--color-ink)] placeholder:text-[var(--color-stone-500)]",
  "outline-none",
  "focus:border-[var(--color-ink)] focus:ring-2 focus:ring-[var(--color-ink)] focus:ring-offset-0",
  "transition-colors duration-[180ms]",
);

const errorInputClass = "!border-[var(--color-laterite)] focus:!ring-[var(--color-laterite)]";

export function BriefForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    type: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      // Replace with real form submission endpoint (e.g. Formspree, Resend).
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 rounded-[var(--radius-sm)] border border-[color:color-mix(in_srgb,var(--color-ink)_12%,transparent)] p-8 md:p-10">
        <span className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-laterite)]">
          Message received
        </span>
        <p className="text-[1.0625rem] leading-[1.65] text-[var(--color-ink)]">
          We have your brief. Expect a response within two working days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Brief enquiry form"
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-ink)]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={cn(inputBase, errors.name && errorInputClass)}
            placeholder="Your full name"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-[0.8125rem] text-[var(--color-laterite)]">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-ink)]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={cn(inputBase, errors.email && errorInputClass)}
            placeholder="your@email.com"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-[0.8125rem] text-[var(--color-laterite)]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Enquiry type */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-ink)]"
          >
            Enquiry type
          </label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={cn(
              inputBase,
              "appearance-none cursor-pointer",
              errors.type && errorInputClass,
              !form.type && "text-[var(--color-stone-500)]",
            )}
            aria-describedby={errors.type ? "type-error" : undefined}
            aria-invalid={!!errors.type}
          >
            <option value="" disabled>
              Select a type
            </option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.type && (
            <p id="type-error" role="alert" className="text-[0.8125rem] text-[var(--color-laterite)]">
              {errors.type}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="location"
            className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-ink)]"
          >
            Site location{" "}
            <span className="normal-case text-[var(--color-stone-500)]">
              (optional)
            </span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            className={inputBase}
            placeholder="City, state, or country"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-ink)]"
        >
          Brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className={cn(
            inputBase,
            "resize-y min-h-[8rem]",
            errors.message && errorInputClass,
          )}
          placeholder="Tell us about your site, programme, and ambitions. The more specific, the better."
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-[0.8125rem] text-[var(--color-laterite)]">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-[0.875rem] text-[var(--color-laterite)]">
          Submission failed. Please try again or email us directly.
        </p>
      )}

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex items-center gap-3 rounded-[var(--radius-sm)]",
            "bg-[var(--color-ink)] text-[var(--color-bone)]",
            "px-6 py-3.5 text-[0.875rem] font-medium",
            "transition-all duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "hover:bg-[var(--color-ink-700)] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2",
            "disabled:cursor-wait disabled:opacity-60",
          )}
        >
          {status === "submitting" ? "Sending…" : "Send brief"}
        </button>
        <p className="text-[0.8125rem] leading-[1.55] text-[var(--color-stone-500)]">
          We respond within two working days.
        </p>
      </div>
    </form>
  );
}
