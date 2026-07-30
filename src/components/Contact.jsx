import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
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
    value: `${SOCIALS.location} — Open for freelance work`,
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
  const [selectedOption, setSelectedOption] = useState(null);

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
        setSelectedOption(null);
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
          ? "fixed inset-0 overflow-y-auto z-50 w-full bg-black/30 backdrop-blur-[180px] py-10 lg:flex lg:items-center"
          : "relative py-28 sm:py-36"
      }
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind? Let's talk."
          subtitle="Tell me about your project. I'll get back to you soon."
        />

        <div className="mt-16 flex flex-col-reverse sm:items-center gap-15">
          <div className="">
            <div className="flex gap-2 flex-wrap">
              {INFO.map((i) => {
                const content = (
                  <GlassCard
                    className={`flex items-center gap-2 border border-white/10 hover:border-violet-500 bg-white/3 rounded-xl duration-300`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center`}
                    >
                      <i className={i.icon}></i>
                    </span>
                    {i.label === "Location" && (
                      <span className={`pr-3`}>
                        <span className="block font-mono text-[11px] tracking-widest text-mist-500">
                          {i.label.toUpperCase()}
                        </span>
                        <span className="block text-xs font-medium text-mist-100">
                          {i.value}
                        </span>
                      </span>
                    )}
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

          <div onClick={(e) => e.stopPropagation()} className="">
            <GlassCard className="h-full">
              <form
                onSubmit={handleSubmit}
                className="h-full flex flex-col justify-between gap-5"
                noValidate
              >
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
                      className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 outline-none focus:border-violet-500"
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
                      className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 outline-none focus:border-violet-500"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-mist-300">
                    Project category
                  </span>

                  <div ref={selectRef} className={`relative`}>
                    <div
                      onClick={() => setIsSelect(!isSelect)}
                      className="flex items-center w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 transition-colors cursor-pointer"
                    >
                      <span className={`flex-1`}>
                        {selectedOption
                          ? selectedOption
                          : "Select one (optional)"}
                      </span>

                      <span>
                        <ChevronDown size={17} />
                      </span>
                    </div>

                    {isSelect && (
                      <div
                        className={`absolute top-full inset-x-0 flex flex-col w-full rounded-xl border border-white/10 bg-ink-950 p-1 text-sm text-mist-100 transition-colors`}
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
                    className="textarea-scrollbar w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 transition-colors outline-none focus:border-violet-500"
                  />
                </label>

                <Button
                  type="submit"
                  disabled={!isValid || status !== "idle"}
                  className="self-start disabled:cursor-not-allowed disabled:opacity-50"
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
              </form>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
