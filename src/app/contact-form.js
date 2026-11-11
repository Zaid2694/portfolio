"use client";

import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
    setSendError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(false);
    setSendError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent.");
      }

      setSubmitted(true);
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      setSendError(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form relative" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="form-label" htmlFor="contact-name">
          Name
        </label>
        <input
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          className="form-input"
          id="contact-name"
          name="name"
          onChange={updateField}
          placeholder="Your name"
          value={values.name}
        />
        {errors.name && (
          <p className="form-error" id="contact-name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="form-label" htmlFor="contact-email">
          Email
        </label>
        <input
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          className="form-input"
          id="contact-email"
          name="email"
          onChange={updateField}
          placeholder="you@example.com"
          type="email"
          value={values.email}
        />
        {errors.email && (
          <p className="form-error" id="contact-email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="form-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          aria-invalid={Boolean(errors.message)}
          className="form-input form-textarea"
          id="contact-message"
          name="message"
          onChange={updateField}
          placeholder="Tell me a little about your project..."
          rows={4}
          value={values.message}
        />
        {errors.message && (
          <p className="form-error" id="contact-message-error">
            {errors.message}
          </p>
        )}
      </div>

      <button
        className="button-primary form-submit"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "Sending..." : "Send message"}
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 8h10m-4-4 4 4-4 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      <p aria-live="polite" className="form-status">
        {submitted && "Thanks! Your message has been sent to Zaid."}
      </p>
      {sendError && (
        <p aria-live="assertive" className="form-error">
          {sendError}
        </p>
      )}
    </form>
  );
}
