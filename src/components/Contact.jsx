import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";
import { SOCIALS } from "../data";

const INFO = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: SOCIALS.email,
    href: `mailto:${SOCIALS.email}`,
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "github.com/said-hadji",
    href: SOCIALS.github,
  },
  {
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/said-hadji-363793404",
    href: SOCIALS.linkedin,
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: `${SOCIALS.location} — available for remote work`,
    href: null,
  },
];

const PROJECT_TYPES = [
  "Landing Page",
  "Business Website",
  "Dashboard",
  "React Frontend",
  "Other",
];

export function Contact({ isStartProject, setIsStartProject }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [isSelect, setIsSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);

  const isValid =
    form.name.trim() &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.message.trim().length > 4;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid || status === "sending") return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", projectType: "", message: "" });
      }, 2600);
    }, 1100);
  };

  const selectRef = useRef(null);

  useEffect(() => {
    const handleClose = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsSelect(false);
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <section
      id="contact"
      onClick={() => setIsStartProject(false)}
      className={
        isStartProject
          ? "fixed inset-0 overflow-y-auto z-50 w-full bg-black/30 backdrop-blur-2xl py-10 lg:flex lg:items-center"
          : "relative py-28 sm:py-36"
      }
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind? Let's talk."
          subtitle="Tell me a bit about what you need. I read every message and reply within a day or two."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {INFO.map((i) => {
                const content = (
                  <GlassCard className="flex items-center gap-4 p-5 transition-colors duration-300 hover:border-violet-500/30">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                      <i className={i.icon}></i>
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] tracking-widest text-mist-500">
                        {i.label.toUpperCase()}
                      </span>
                      <span className="block text-sm font-medium text-mist-100">
                        {i.value}
                      </span>
                    </span>
                  </GlassCard>
                );
                return i.href ? (
                  <a
                    key={i.label}
                    onClick={(e) => e.stopPropagation()}
                    href={i.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div onClick={(e) => e.stopPropagation()} className="lg:col-span-3">
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-mist-300">
                      Name
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 transition-colors focus:border-violet-500/60"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-mist-300">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 transition-colors focus:border-violet-500/60"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-mist-300">
                    Project type
                  </span>

                  <div ref={selectRef} className={`relative`}>
                    <div
                      onClick={() => setIsSelect(!isSelect)}
                      className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 transition-colors focus:border-violet-500/60 cursor-pointer"
                    >
                      <span>
                        {selectedOption
                          ? selectedOption
                          : "Select one (optional)"}
                      </span>
                    </div>

                    {isSelect && (
                      <div
                        className={`absolute top-full inset-x-0 flex flex-col w-full rounded-xl border border-white/10 bg-ink-950 p-1 text-sm text-mist-100 transition-colors focus:border-violet-500/60`}
                      >
                        {PROJECT_TYPES.map((type) => (
                          <span
                            key={type}
                            onClick={() => {
                              setSelectedOption(type);
                              setIsSelect(false);
                            }}
                            className="hover:bg-zinc-900 px-3 py-2 rounded-lg cursor-pointer"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-mist-300">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell me a little about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 transition-colors focus:border-violet-500/60"
                  />
                </label>

                <Button
                  type="submit"
                  disabled={!isValid || status !== "idle"}
                  className="w-full justify-center disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {status === "idle" && (
                    <>
                      Send Message <Send size={16} aria-hidden="true" />
                    </>
                  )}
                  {status === "sending" && "Sending…"}
                  {status === "sent" && (
                    <>
                      Message sent <CheckCircle2 size={16} aria-hidden="true" />
                    </>
                  )}
                </Button>
                <p role="status" aria-live="polite" className="sr-only">
                  {status === "sent" ? "Your message has been sent." : ""}
                </p>
              </form>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
