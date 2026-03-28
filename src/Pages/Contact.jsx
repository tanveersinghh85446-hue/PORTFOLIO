import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { IoMdMailUnread } from "react-icons/io"
import { FaMapLocationDot } from "react-icons/fa6"
import { SiFreelancer } from "react-icons/si"

const services = [
  { title: "Business Websites", desc: "Professional websites designed to represent your brand and attract customers.", accent: "border-t-indigo-500", icon: "🏢" },
  { title: "Portfolio Websites", desc: "Personal portfolio websites for developers and professionals to showcase their work.", accent: "border-t-purple-500", icon: "🎨" },
  { title: "Landing Pages", desc: "High-converting landing pages for marketing campaigns and product launches.", accent: "border-t-emerald-500", icon: "🚀" },
]

const faqs = [
  { q: "How long does it take to build a website?", a: "Most websites take between 1–3 weeks depending on the complexity and features required." },
  { q: "Do you work with international clients?", a: "Yes, I work with clients globally and communicate via email or video calls." },
  { q: "Can you redesign my existing website?", a: "Absolutely! I can improve the design, performance and responsiveness of your current website." },
]

const infoCards = [
  { icon: <IoMdMailUnread />, label: "Email", value: "tanveersinghh85446@gmail.com", iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
  { icon: <FaMapLocationDot />, label: "Location", value: "Delhi, Dwarka, India", iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
  { icon: <SiFreelancer />, label: "Availability", value: "Open for freelance projects", iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-[0.85rem] overflow-hidden border transition-colors duration-300 ${open ? "border-indigo-500/35" : "border-white/[0.07]"} bg-white/0.03`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="font-['Syne',sans-serif] font-bold text-[0.95rem] text-white text-left">{q}</span>
        <span className={`text-xl text-white/40 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}>+</span>
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm text-white/45 leading-[1.75]">{a}</p>
      )}
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Tanveer Singh | Frontend Developer</title>
        <meta name="description" content="Get in touch with Tanveer Singh for freelance web development projects. Available for business websites, portfolio sites, and landing pages." />
        <meta name="keywords" content="Contact Tanveer Singh, Hire Frontend Developer, Freelance Web Developer, React Developer Delhi" />
        <meta name="author" content="Tanveer Singh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanveersingh.dev/Contact" />
        <meta property="og:title" content="Contact — Tanveer Singh | Frontend Developer" />
        <meta property="og:description" content="Have a project idea? Let's build something amazing together." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanveersingh.dev/Contact" />
        <meta property="og:image" content="https://tanveersingh.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — Tanveer Singh | Frontend Developer" />
        <meta name="twitter:description" content="Have a project idea? Let's build something amazing together." />
        <meta name="twitter:image" content="https://tanveersingh.dev/og-image.jpg" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="bg-[#08090d] text-white min-h-screen font-['DM_Sans',sans-serif]">
        <div className="max-w-275 mx-auto px-6 pt-20">

          {/* HEADER */}
          <header className="text-center mb-16">
            <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-4
              after:content-[''] after:inline-block after:w-10 after:h-px after:bg-white/10">
              Get In Touch
            </span>
            <h1 className="font-['Syne',sans-serif] font-extrabold text-[clamp(2.2rem,5vw,4rem)] text-white leading-[1.1] tracking-tight mb-4">
              Let's Build Something Amazing
            </h1>
            <p className="text-white/40 max-w-lg mx-auto text-[0.95rem] leading-[1.75]">
              I love creating modern, responsive and high-performance websites. Have a project idea? Feel free to reach out.
            </p>
          </header>

          {/* FORM + INFO */}
          <section className="flex flex-wrap gap-10 mb-20" aria-label="Contact form">

            {/* Form */}
            <div className="flex-1 min-w-80">
              <form action="https://formspree.io/f/xpqyrrry" method="POST" className="flex flex-col gap-4">
                <input
                  type="text" name="name" placeholder="Your Name" required
                  className="w-full px-4 py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25
                  focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
                />
                <input
                  type="email" name="email" placeholder="Your Email" required
                  className="w-full px-4 py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25
                  focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
                />
                <input
                  type="tel" name="phone" placeholder="Your Phone Number" required pattern="[0-9]{10}" title="Enter a 10-digit phone number"
                  className="w-full px-4 py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25
                  focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
                />
                <textarea
                  name="message" rows="5" placeholder="Your Message" required
                  className="w-full px-4 py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25 resize-y
                  focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-indigo-500 text-white font-['Syne',sans-serif] font-bold text-sm rounded-xl cursor-pointer border-none tracking-wide
                  hover:bg-indigo-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(79,110,247,0.35)] transition-all duration-200">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="flex-1 min-w-64 flex flex-col gap-4 justify-center">
              {infoCards.map(({ icon, label, value, iconBg }) => (
                <div key={label}
                  className="flex flex-row items-center gap-4 px-6 py-5 bg-white/0.03 border border-white/[0.07] rounded-2xl
                  hover:-translate-y-1 hover:border-indigo-500/25 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl shrink-0 border flex items-center justify-center text-xl ${iconBg}`}>
                    {icon}
                  </div>
                  <div>
                    <p className="font-['Syne',sans-serif] font-bold text-[0.8rem] text-white/60 mb-0.5">{label}</p>
                    <p className="text-[0.85rem] text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* SERVICES */}
          <section className="mb-20" aria-label="Services">
            <div className="text-center mb-10">
              <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3
                after:content-[''] after:inline-block after:w-10 after:h-px after:bg-white/10">
                What I Offer
              </span>
              <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.6rem,3vw,2.4rem)] text-white">Services</h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
              {services.map(({ title, desc, accent, icon }) => (
                <div key={title}
                  className={`bg-white/0.03 border border-white/[0.07] border-t-2 ${accent} rounded-2xl p-7
                  hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300`}>
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-['Syne',sans-serif] font-bold text-base text-white mb-2">{title}</h3>
                  <p className="text-[0.83rem] text-white/45 leading-[1.7]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-180 mx-auto mb-20" aria-label="FAQ">
            <div className="text-center mb-10">
              <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3
                after:content-[''] after:inline-block after:w-10 after:h-px after:bg-white/10">
                FAQ
              </span>
              <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.6rem,3vw,2.4rem)] text-white">Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="border-t border-white/[0.07] py-10 px-6 text-center">
          <p className="text-xs text-white/30 mb-3">© {new Date().getFullYear()} Tanveer Singh</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/tanveer-singh-ab008637b/"
              className="text-white/35 text-sm no-underline hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href="https://www.instagram.com/web_createrr/"
              className="text-white/35 text-sm no-underline hover:text-white transition-colors duration-200">Instagram</a>
          </div>
        </footer>

      </main>
    </>
  )
}