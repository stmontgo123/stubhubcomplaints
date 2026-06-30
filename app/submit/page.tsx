"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Submit() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Submitting...");

    const form = new FormData(e.currentTarget);

    const { error } = await supabase.from("complaints").insert({
      event_name: form.get("event_name"),
      venue: form.get("venue"),
      city: form.get("city"),
      category: form.get("category"),
      amount_paid: form.get("amount_paid") || null,
      description: form.get("description"),
      contact_email: form.get("contact_email"),
      status: "pending",
      seller: "StubHub"
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Complaint submitted for moderation. Thank you.");
      e.currentTarget.reset();
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h1>Submit a Complaint</h1>

        <p className="notice">
          Do not include private card numbers, full addresses, passwords, or unredacted IDs.
          Posts should describe personal, truthful experiences.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input className="input" name="event_name" placeholder="Event or artist/team" required />
          <input className="input" name="venue" placeholder="Venue" />
          <input className="input" name="city" placeholder="City" />

          <select className="select" name="category" required>
            <option>Refund problem</option>
            <option>Missing or delayed tickets</option>
            <option>Unexpected fees</option>
            <option>Customer service</option>
            <option>Event cancellation</option>
            <option>Seat/listing issue</option>
          </select>

          <input className="input" name="amount_paid" placeholder="Approx. amount paid" />
          <input className="input" name="contact_email" type="email" placeholder="Your email (not public)" />

          <textarea
            className="textarea"
            name="description"
            placeholder="Describe what happened factually. Include dates, steps taken, and current status."
            required
          />

          <button className="button" type="submit">Submit for Moderation</button>
        </form>

        {message && <p className="notice">{message}</p>}
      </div>
    </section>
  );
}
