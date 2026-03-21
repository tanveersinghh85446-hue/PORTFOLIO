import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const posts = [
  {
    src: "AI.mp4",
    tag: "Infrastructure",
    title: "Global Data Infrastructure & Visualization",
    desc: "Imagine a digital network where every node flows seamlessly through a virtual ecosystem. Each glowing particle represents real-time data moving across decentralized pathways.",
    bullets: ["Cloud computing & big data analytics", "Visualization of network traffic", "Interconnected systems at a global scale"],
    accent: "#4f6ef7",
  },
  {
    src: "Herov.mp4",
    tag: "Backend",
    title: "Backend Logic & Email Authentication",
    desc: "Explore secure backend systems handling user authentication and email verification. Efficient workflows ensure safe and seamless user registration experiences.",
    bullets: ["Account verification logic", "Email service integration", "Secure backend architecture"],
    accent: "#a855f7",
    reverse: true,
  },
  {
    src: "Code.mp4",
    tag: "Security",
    title: "Cybersecurity & Live Development",
    desc: "Witness real-time coding and cybersecurity practices. Structured code and debugging processes demonstrate the discipline required for professional software development.",
    bullets: ["Ethical hacking & security workflows", "IDE & live development focus", "Best practices for secure coding"],
    accent: "#10b981",
  },
  {
    src: "JavaScript.mp4",
    tag: "Encryption",
    title: "Data Encryption & Matrix Streams",
    desc: "Dense streams of numeric and symbolic data illustrate encryption and data monitoring. This visual gives a clear sense of machine-level data security in action.",
    bullets: ["Matrix-style data visualization", "Encryption & decryption flow", "Cybersecurity monitoring"],
    accent: "#f59e0b",
    reverse: true,
  },
  {
    src: "React.mp4",
    tag: "Frontend",
    title: "React JS & Frontend Development",
    desc: "Build modern, scalable user interfaces using React's component-based architecture. Clean JSX structure and modular design ensure maintainable, high-performance web apps.",
    bullets: ["Reusable component architecture", "JSX structured UI development", "State management & hooks integration", "Optimized rendering & performance"],
    accent: "#61dbfb",
  },
  {
    src: "Brain.mp4",
    tag: "AI / ML",
    title: "Neural Networks & Brain Simulation",
    desc: "Explore the dynamic patterns of neural activity and brain simulations. Complex cognitive processes, memory flows, and AI-inspired neural modeling visualized.",
    bullets: ["Real-time neural network visualization", "Cognitive process simulation", "AI-inspired brain modeling"],
    accent: "#e879f9",
    reverse: true,
  },
]

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
body{background:#08090d;font-family:'DM Sans',sans-serif}
.blog-video{filter:blur(4px) brightness(0.8);transition:filter .5s,transform .5s}
.blog-video-wrap:hover .blog-video{filter:blur(0) brightness(1);transform:scale(1.03)}
.section-label{font-family:'Syne',sans-serif;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#4f6ef7;display:inline-flex;align-items:center;gap:.5rem}
.section-label::after{content:'';display:inline-block;width:40px;height:1px;background:rgba(255,255,255,0.1)}
.quote-card{background:rgba(79,110,247,0.07);border:1px solid rgba(79,110,247,0.2);border-radius:1rem;padding:1.75rem 2rem;position:relative;overflow:hidden}
.quote-card::before{content:'"';position:absolute;top:-.5rem;left:1rem;font-size:6rem;font-family:Georgia,serif;color:rgba(79,110,247,0.12);line-height:1;pointer-events:none}
.btn-glow{position:relative;overflow:hidden;border:1px solid #4f6ef7;background:transparent;color:#fff;padding:.55rem 1.5rem;border-radius:9999px;font-family:'Syne',sans-serif;font-size:.85rem;font-weight:600;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;transition:color .3s}
.btn-glow::before{content:'';position:absolute;inset:0;background:#4f6ef7;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.4,0,.2,1)}
.btn-glow:hover::before{transform:scaleX(1)}
.btn-glow span{position:relative;z-index:1}
.footer-link{color:rgba(255,255,255,0.4);text-decoration:none;font-size:.85rem;transition:color .2s}
.footer-link:hover{color:#fff}
`

function PostRow({ src, tag, title, desc, bullets, accent, reverse }) {
  return (
    <article style={{
      display: 'flex', flexWrap: 'wrap',
      flexDirection: reverse ? 'row-reverse' : 'row',
      gap: '2.5rem', alignItems: 'center',
      padding: '3rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div style={{ flex: '1 1 340px', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }} className="blog-video-wrap">
        <div style={{ position: 'absolute', inset: 0, borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.08)', zIndex: 2, pointerEvents: 'none' }} />
        <video src={src} autoPlay loop muted playsInline
          style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: '1rem' }}
          className="blog-video" />
      </div>
      <div style={{ flex: '1 1 320px' }}>
        <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, display: 'inline-block', marginBottom: '0.85rem' }}>
          {tag}
        </span>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.2rem,2.5vw,1.65rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1rem' }}>
          {title}
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
          {desc}
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', listStyle: 'none', padding: 0 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: accent, flexShrink: 0 }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Tanveer Singh | Frontend Developer</title>
        <meta name="description" content="Thoughts and insights on frontend development, cybersecurity, React, and the modern web ecosystem by Tanveer Singh." />
        <meta name="keywords" content="Tanveer Singh Blog, Frontend Development, React, Cybersecurity, Web Development, JavaScript" />
        <meta name="author" content="Tanveer Singh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanveersingh.dev/Blog" />

        {/* Open Graph */}
        <meta property="og:title" content="Blog — Tanveer Singh | Frontend Developer" />
        <meta property="og:description" content="Thoughts on frontend development, security, and the web ecosystem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanveersingh.dev/Blog" />
        <meta property="og:image" content="https://tanveersingh.dev/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog — Tanveer Singh | Frontend Developer" />
        <meta name="twitter:description" content="Thoughts on frontend development, security, and the web ecosystem." />
        <meta name="twitter:image" content="https://tanveersingh.dev/og-image.jpg" />
      </Helmet>

      <style>{STYLES}</style>
      <div style={{ background: '#08090d', minHeight: '100vh', color: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 1.5rem 0' }}>

          {/* PAGE HEADER */}
          <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem', display: 'inline-flex' }}>Writing & Insights</span>
            <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,4.5rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              My Blog
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', maxWidth: '440px', margin: '1rem auto 0' }}>
              Thoughts on frontend development, security, and the web ecosystem.
            </p>
          </header>

          {/* POSTS */}
          <section aria-label="Blog posts">
            {posts.map((post, i) => <PostRow key={i} {...post} />)}
          </section>

          {/* JOURNEY */}
          <section style={{ padding: '5rem 0 3rem', maxWidth: '640px', margin: '0 auto', textAlign: 'center' }} aria-label="Coding journey">
            <span className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem', display: 'inline-flex' }}>My Story</span>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#fff', marginBottom: '1.25rem' }}>
              My Coding Journey
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '2rem' }}>
              I started learning web development with curiosity and passion. Building projects and exploring technologies like HTML, CSS, JavaScript and React helped me grow my skills and creativity. I enjoy crafting responsive, modern web experiences.
            </p>
            <div className="quote-card" style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
              <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
                "Code is like art — the more you practice, the better it becomes."
              </p>
            </div>
            <Link to="/Project" className="btn-glow"><span>View My Projects →</span></Link>
          </section>

        </div>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2.5rem 1.5rem', textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>
            © {new Date().getFullYear()} Tanveer Singh
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="https://www.linkedin.com/in/tanveer-singh-ab008637b/" className="footer-link">LinkedIn</a>
            <a href="https://www.instagram.com/code_with_tanveer/" className="footer-link">Instagram</a>
          </div>
        </footer>
      </div>
    </>
  )
}