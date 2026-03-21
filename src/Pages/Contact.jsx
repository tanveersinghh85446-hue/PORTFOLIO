import React from "react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { IoMdMailUnread } from "react-icons/io"
import { FaMapLocationDot } from "react-icons/fa6"
import { SiFreelancer } from "react-icons/si"

const services = [
  { title: "Business Websites", desc: "Professional websites designed to represent your brand and attract customers.", accent: "#4f6ef7", icon: "🏢" },
  { title: "Portfolio Websites", desc: "Personal portfolio websites for developers and professionals to showcase their work.", accent: "#a855f7", icon: "🎨" },
  { title: "Landing Pages", desc: "High-converting landing pages for marketing campaigns and product launches.", accent: "#10b981", icon: "🚀" },
]

const faqs = [
  { q: "How long does it take to build a website?", a: "Most websites take between 1–3 weeks depending on the complexity and features required." },
  { q: "Do you work with international clients?", a: "Yes, I work with clients globally and communicate via email or video calls." },
  { q: "Can you redesign my existing website?", a: "Absolutely! I can improve the design, performance and responsiveness of your current website." },
]

const infoCards = [
  { icon: <IoMdMailUnread />, label: "Email", value: "tanveersinghh85446@gmail.com", accent: "#4f6ef7" },
  { icon: <FaMapLocationDot />, label: "Location", value: "Delhi, Dwarka, India", accent: "#10b981" },
  { icon: <SiFreelancer />, label: "Availability", value: "Open for freelance projects", accent: "#f59e0b" },
]

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
body{background:#08090d;font-family:'DM Sans',sans-serif}
.section-label{font-family:'Syne',sans-serif;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#4f6ef7;display:inline-flex;align-items:center;gap:.5rem}
.section-label::after{content:'';display:inline-block;width:40px;height:1px;background:rgba(255,255,255,0.1)}
.form-field{width:100%;padding:.85rem 1rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:.75rem;color:#fff;font-family:'DM Sans',sans-serif;font-size:.9rem;outline:none;transition:border-color .25s,box-shadow .25s;box-sizing:border-box}
.form-field::placeholder{color:rgba(255,255,255,0.25)}
.form-field:focus{border-color:rgba(79,110,247,0.6);box-shadow:0 0 0 3px rgba(79,110,247,0.12)}
.btn-submit{width:100%;padding:.85rem;background:#4f6ef7;color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;border:none;border-radius:.75rem;cursor:pointer;transition:background .25s,transform .2s,box-shadow .25s;letter-spacing:.02em}
.btn-submit:hover{background:#6b86f8;transform:translateY(-2px);box-shadow:0 8px 24px rgba(79,110,247,0.35)}
.info-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:1rem;padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;text-align:center;gap:.75rem;transition:transform .3s,border-color .3s,box-shadow .3s}
.info-card:hover{transform:translateY(-5px);border-color:rgba(79,110,247,0.25);box-shadow:0 12px 36px rgba(0,0,0,0.4)}
.service-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:1rem;padding:1.75rem;transition:transform .3s,border-color .3s,box-shadow .3s}
.service-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(0,0,0,0.4)}
.faq-item{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:.85rem;overflow:hidden;transition:border-color .3s}
.faq-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.25rem 1.5rem;background:none;border:none;cursor:pointer}
.footer-link{color:rgba(255,255,255,0.35);text-decoration:none;font-size:.85rem;transition:color .2s}
.footer-link:hover{color:#fff}
.auto-grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem}
`

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item" style={{ borderColor: open ? "rgba(79,110,247,0.35)" : "rgba(255,255,255,0.07)" }}>
      <button className="faq-btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff", textAlign: "left" }}>{q}</span>
        <span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.4)", transform: open ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0 }}>+</span>
      </button>
      {open && <p style={{ padding: "0 1.5rem 1.25rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{a}</p>}
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

        {/* Open Graph */}
        <meta property="og:title" content="Contact — Tanveer Singh | Frontend Developer" />
        <meta property="og:description" content="Have a project idea? Let's build something amazing together." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanveersingh.dev/Contact" />
        <meta property="og:image" content="https://tanveersingh.dev/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — Tanveer Singh | Frontend Developer" />
        <meta name="twitter:description" content="Have a project idea? Let's build something amazing together." />
        <meta name="twitter:image" content="https://tanveersingh.dev/og-image.jpg" />
      </Helmet>

      <style>{STYLES}</style>
      <div style={{ background: "#08090d", color: "#fff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem 0" }}>

          {/* HERO */}
          <header style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label" style={{ justifyContent: "center", marginBottom: "1rem", display: "inline-flex" }}>Get In Touch</span>
            <h1 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem,5vw,4rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Let's Build Something Amazing
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: "500px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.75 }}>
              I love creating modern, responsive and high-performance websites. Have a project idea? Feel free to reach out.
            </p>
          </header>

          {/* FORM + INFO */}
          <section style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginBottom: "5rem" }} aria-label="Contact form">
            <div style={{ flex: "1 1 360px" }}>
              <form action="https://formspree.io/f/xpqyrrry" method="POST"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="text" name="name" placeholder="Your Name" required className="form-field" />
                <input type="email" name="email" placeholder="Your Email" required className="form-field" />
                <input type="tel" name="phone" placeholder="Your Phone Number" required pattern="[0-9]{10}" title="Enter a 10-digit phone number" className="form-field" />
                <textarea name="message" rows="5" placeholder="Your Message" required className="form-field" style={{ resize: "vertical" }} />
                <button type="submit" className="btn-submit">Send Message →</button>
              </form>
            </div>
            <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
              {infoCards.map(({ icon, label, value, accent }) => (
                <div key={label} className="info-card" style={{ flexDirection: "row", textAlign: "left", gap: "1rem", padding: "1.25rem 1.5rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "0.75rem", flexShrink: 0, background: `${accent}18`, border: `1px solid ${accent}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", color: accent }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.2rem" }}>{label}</p>
                    <p style={{ fontSize: "0.85rem", color: "#fff" }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section style={{ marginBottom: "5rem" }} aria-label="Services">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem", display: "inline-flex" }}>What I Offer</span>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#fff" }}>Services</h2>
            </div>
            <div className="auto-grid-3">
              {services.map(({ title, desc, accent, icon }) => (
                <div key={title} className="service-card" style={{ borderTopColor: accent, borderTopWidth: "2px" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{icon}</div>
                  <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "0.5rem" }}>{title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ maxWidth: "720px", margin: "0 auto 5rem" }} aria-label="FAQ">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem", display: "inline-flex" }}>FAQ</span>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#fff" }}>Frequently Asked Questions</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", marginBottom: "0.75rem" }}>
            © {new Date().getFullYear()} Tanveer Singh
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
            <a href="https://www.linkedin.com/in/tanveer-singh-ab008637b/" className="footer-link">LinkedIn</a>
            <a href="https://www.instagram.com/code_with_tanveer/" className="footer-link">Instagram</a>
          </div>
        </footer>
      </div>
    </>
  )
}