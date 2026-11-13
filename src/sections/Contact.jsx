import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/contact/ContactExperience";
import LazyView from "../components/LazyView";

const RATE_LIMIT = 3;          // max sends
const WINDOW_MS = 2 * 60 * 60 * 1000; // 2 hours in ms
const STORAGE_KEY = "contact_sends";

const getRateLimitData = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { sends: [], blocked: false };
  } catch {
    return { sends: [], blocked: false };
  }
};

const MAX_CHARS = 500;

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [rateLimitMsg, setRateLimitMsg] = useState("");

  // Check on mount and update countdown every second if blocked
  const checkRateLimit = () => {
    const now = Date.now();
    const data = getRateLimitData();
    const recent = data.sends.filter((t) => now - t < WINDOW_MS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ sends: recent }));
    if (recent.length >= RATE_LIMIT) {
      const oldest = Math.min(...recent);
      const unlockAt = oldest + WINDOW_MS;
      const diff = unlockAt - now;
      const hrs = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      return `Limit reached (${RATE_LIMIT} messages / 2 hrs). Try again in ${hrs}h ${mins}m ${secs}s.`;
    }
    return "";
  };

  // Update countdown every second when rate-limited
  useEffect(() => {
    const interval = setInterval(() => {
      setRateLimitMsg(checkRateLimit());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_CHARS) return;
    setForm({ ...form, [name]: value });
  };

  const flash = (next) => {
    setStatus(next);
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (formRef.current?.website?.value) return; // honeypot: bot detected

    const block = checkRateLimit();
    if (block) { setRateLimitMsg(block); return; }

    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      // Record this send
      const data = getRateLimitData();
      data.sends.push(Date.now());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      setForm({ name: "", email: "", message: "" });
      setRateLimitMsg("");
      flash("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      flash("error");
    } finally {
      setLoading(false);
    }
  };

  const isRateLimited = rateLimitMsg.length > 0;

  const buttonLabel = loading
    ? "Sending..."
    : status === "success"
    ? "Message Sent ✓"
    : status === "error"
    ? "Failed — Retry"
    : "Send Message";

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message">Your Message</label>
                    <span className={`text-xs tabular-nums ${form.message.length >= MAX_CHARS ? "text-red-400" : "text-blue-50"}`}>
                      {form.message.length}/{MAX_CHARS}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    maxLength={MAX_CHARS}
                    required
                    style={{ resize: "none" }}
                  />
                </div>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                {isRateLimited && (
                  <p className="text-sm text-red-400 text-center -mt-3">
                    ⏳ {rateLimitMsg}
                  </p>
                )}

                <button type="submit" disabled={loading || isRateLimited}>
                  <div className="cta-button group" data-status={status}>
                    <div className="bg-circle" />
                    <p className="text">{buttonLabel}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <LazyView className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              {(visible) => <ContactExperience active={visible} />}
            </LazyView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
