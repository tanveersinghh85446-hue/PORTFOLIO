import React, { useEffect, useRef } from 'react'
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt, FaReact, FaGithub, FaWhatsapp, FaInstagram, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiJavascript } from "react-icons/di";
import { SiNetlify, SiSvelte, SiAstro, SiAlpinedotjs, SiVite, SiRedwoodjs, SiVitest, SiEslint, SiTrpc, SiNuxt, SiRemix, SiCodersrank, SiAuth0, SiZod } from "react-icons/si";
import { TbBrandSolidjs, TbBrandStorybook } from "react-icons/tb";
import { FaPlaystation } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion, useAnimation, useMotionValue } from "framer-motion";

const frontend = [
    "UI / UX Design", "Responsive Design", "Cross-Browser Compatibility",
    "Performance Optimization", "SEO Optimization", "Animations & Interactions",
    "Component Architecture", "State Management", "Progressive Web Apps",
    "Web Accessibility", "Framework Integration", "Frontend Testing"
];
const backend = [
    "API Development", "Database Management", "Authentication & Security",
    "Server Logic", "Data Processing", "Scalability",
    "Integration with APIs", "Performance & Caching", "RESTful API Design",
    "Error Handling & Logging", "Cloud Deployment", "Microservices Architecture"
];

const techStack = [
    { name: "HTML", icon: <ImHtmlFive2 />, color: "#e34f26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572b6" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "#38bdf8" },
    { name: "React", icon: <FaReact />, color: "#61dbfb" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "JavaScript", icon: <DiJavascript />, color: "#f7df1e" },
    { name: "VS Code", icon: <VscVscode />, color: "#007acc" },
    { name: "Netlify", icon: <SiNetlify />, color: "#00c7b7" },
];

const leftIcons = [
    { icon: <FaReact />, color: "#61DBFB", label: "React" },
    { icon: <FaVuejs />, color: "#42b883", label: "Vue" },
    { icon: <SiSvelte />, color: "#ff3e00", label: "Svelte" },
    { icon: <SiAstro />, color: "#ff4500", label: "Astro" },
    { icon: <TbBrandSolidjs />, color: "#ff3f6c", label: "Solid" },
    { icon: <SiAlpinedotjs />, color: "#8bc0d0", label: "Alpine" },
    { icon: <SiVite />, color: "#646cff", label: "Vite" },
    { icon: <SiRedwoodjs />, color: "#ff6d5a", label: "Redwood" },
    { icon: <SiAuth0 />, color: "#eb5424", label: "Auth0" },
];

const rightIcons = [
    { icon: <SiVitest />, color: "#6eeb83", label: "Vitest" },
    { icon: <RiTailwindCssFill />, color: "#38bdf8", label: "Tailwind" },
    { icon: <SiEslint />, color: "#4b32c3", label: "ESLint" },
    { icon: <SiTrpc />, color: "#ed64a6", label: "tRPC" },
    { icon: <SiNuxt />, color: "#00dc82", label: "Nuxt" },
    { icon: <TbBrandStorybook />, color: "#ff4785", label: "Storybook" },
    { icon: <SiRemix />, color: "#f21361", label: "Remix" },
    { icon: <SiZod />, color: "#7c3aed", label: "Zod" },
    { icon: <FaPlaystation />, color: "#f1b82d", label: "PS" },
];

const aboutCards = [
    { title: "Projects & Case Studies", desc: "Showcasing web development projects with live demos and GitHub repositories.", accent: 'var(--accent)' },
    { title: "Tech Stack", desc: "React, Tailwind CSS, JavaScript, Node.js, and modern web tools.", accent: 'var(--accent2)' },
    { title: "Contact & Collaboration", desc: "Available for freelance work, projects, or just a friendly hello.", accent: '#10b981' },
];

const footerLinks = [['/', 'Home'], ['/Project', 'Projects'], ['/ClientProject', 'Client Work'], ['/About', 'About']];

function FadeIn({ children, delay = 0, className = "" }) {
    return (
        <motion.div className={className}
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}>
            {children}
        </motion.div>
    );
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#08090d;--surface:#0e1018;--border:rgba(255,255,255,0.07);--accent:#4f6ef7;--accent2:#a855f7;--text:#e8eaf0;--muted:#6b7280;--card:rgba(255,255,255,0.04)}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif}
.syne{font-family:'Syne',sans-serif}
body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:9999;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");background-repeat:repeat;background-size:180px;opacity:.35;mix-blend-mode:overlay}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--accent);border-radius:99px}
.btn-glow{position:relative;overflow:hidden;border:1px solid var(--accent);background:transparent;color:#fff;padding:.55rem 1.4rem;border-radius:9999px;font-family:'Syne',sans-serif;font-size:.85rem;font-weight:600;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;transition:color .3s}
.btn-glow::before{content:'';position:absolute;inset:0;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.4,0,.2,1)}
.btn-glow:hover::before{transform:scaleX(1)}
.btn-glow span{position:relative;z-index:1}
.btn-glow2{border-color:var(--accent2)}.btn-glow2::before{background:var(--accent2)}
.chip{font-family:'DM Sans',sans-serif;font-size:.72rem;font-weight:500;background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.25);color:#a5b4fc;padding:.25rem .75rem;border-radius:9999px;white-space:nowrap;transition:background .25s,border-color .25s}
.chip:hover{background:rgba(79,110,247,0.2);border-color:rgba(79,110,247,0.5)}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.marquee-track{display:flex;gap:2rem;animation:marquee 28s linear infinite;width:max-content}
.marquee-track:hover{animation-play-state:paused}
.hero-glow{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 60% 50% at 50% 60%,rgba(79,110,247,0.13) 0%,transparent 70%)}
.card-lift{background:var(--card);border:1px solid var(--border);border-radius:1rem;transition:transform .3s,box-shadow .3s,border-color .3s}
.card-lift:hover{transform:translateY(-4px);border-color:rgba(79,110,247,0.35);box-shadow:0 12px 40px rgba(79,110,247,0.12)}
.icon-badge{display:flex;flex-direction:column;align-items:center;gap:.35rem;padding:.75rem .9rem;border-radius:.75rem;background:var(--card);border:1px solid var(--border);font-size:.65rem;font-weight:500;color:var(--muted);transition:transform .25s,border-color .25s,box-shadow .25s;cursor:default}
.icon-badge:hover{transform:translateY(-5px) scale(1.08);border-color:rgba(255,255,255,0.18);box-shadow:0 8px 24px rgba(0,0,0,0.4)}
.icon-badge svg{font-size:1.6rem}
.section-label{font-family:'Syne',sans-serif;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);display:flex;align-items:center;gap:.5rem}
.section-label::after{content:'';flex:1;height:1px;background:var(--border);display:inline-block;max-width:60px}
.divider{height:1px;background:var(--border)}
.footer-link{color:var(--muted);font-size:.875rem;text-decoration:none;transition:color .2s}
.footer-link:hover{color:var(--text)}
.social-btn{width:40px;height:40px;border-radius:.6rem;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);border:1px solid var(--border);font-size:1.1rem;color:var(--muted);transition:background .25s,color .25s,transform .25s}
.social-btn:hover{background:var(--accent);color:#fff;transform:translateY(-3px)}
.social-btn.wa:hover{background:#25d366}
.social-btn.ig:hover{background:#e1306c}
`;

export default function Home() {
    const controls = useAnimation();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const radius = 300;

    useEffect(() => { controls.start({ opacity: 1, scale: 1 }); }, [controls]);

    return (
        <>
            <style>{STYLES}</style>
            <main style={{ background: 'var(--bg)' }}>

                {/* HERO */}
                <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div className="hero-glow" />
                    {[['520px', '-10%', '-5%', '0.12'], ['340px', '-5%', '-2%', '0.07']].map(([size, top, right, opacity], i) => (
                        <div key={i} style={{ position: 'absolute', top, right, width: size, height: size, borderRadius: '50%', border: `1px solid rgba(79,110,247,${opacity})`, pointerEvents: 'none' }} />
                    ))}
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 1.5rem 4rem', width: '100%' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 420px' }}>
                                <FadeIn><span className="section-label" style={{ marginBottom: '1.5rem', display: 'flex' }}>Frontend Developer</span></FadeIn>
                                <FadeIn delay={0.1}>
                                    <h1 className="syne" style={{ fontSize: 'clamp(2.8rem,7vw,5.5rem)', fontWeight: 800, lineHeight: 1.05, color: '#fff', marginBottom: '1.5rem' }}>
                                        Build.<br />
                                        <span style={{ WebkitTextStroke: '1px rgba(79,110,247,0.7)', color: 'transparent' }}>Design.</span><br />
                                        Create.
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={0.2}>
                                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '400px', marginBottom: '2.5rem' }}>
                                        I craft modern web experiences with clean code, performance, and creativity — turning ideas into fast, beautiful products.
                                    </p>
                                </FadeIn>
                                <FadeIn delay={0.3}>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <Link to="Contact" className="btn-glow"><span>Get in Touch</span></Link>
                                        <Link to="Project" className="btn-glow btn-glow2"><span>View Projects</span></Link>
                                    </div>
                                </FadeIn>
                            </div>
                            <FadeIn delay={0.25} style={{ flex: '1 1 360px' }}>
                                <motion.div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)', position: 'relative' }}
                                    whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                                    {[{ top: 0, left: 0, borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', borderRadius: '1.25rem 0 0 0' },
                                    { bottom: 0, right: 0, borderBottom: '2px solid var(--accent2)', borderRight: '2px solid var(--accent2)', borderRadius: '0 0 1.25rem 0' }
                                    ].map((s, i) => <div key={i} style={{ position: 'absolute', width: '48px', height: '48px', zIndex: 2, pointerEvents: 'none', ...s }} />)}
                                    <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block', objectFit: 'cover' }}>
                                        <source src="1 Right.mp4" type="video/mp4" />
                                    </video>
                                </motion.div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* TECH MARQUEE */}
                <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
                    <div className="marquee-track">
                        {[...techStack, ...techStack].map((t, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.85rem', fontFamily: 'Syne,sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>
                                <span style={{ color: t.color, fontSize: '1.2rem' }}>{t.icon}</span>
                                {t.name}
                                <span style={{ marginLeft: '1rem', color: 'rgba(255,255,255,0.12)', fontSize: '1.2rem' }}>·</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* VIDEO CTA BANNER */}
                <section style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
                    <video src="Portfolio.mp4" autoPlay loop muted playsInline
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,var(--bg) 0%,transparent 15%,transparent 85%,var(--bg) 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
                        <FadeIn><span className="section-label" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>Crafting Digital Experiences</span></FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 className="syne" style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.25rem', maxWidth: '700px' }}>
                                Developer Builds Experiences That Last
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2}><p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '480px' }}>Web development done right — performant, accessible, and delightful.</p></FadeIn>
                        <FadeIn delay={0.3}><Link to="Contact" className="btn-glow"><span>Contact Us →</span></Link></FadeIn>
                    </div>
                </section>

                {/* SKILLS ORBIT — Laptop */}
                <div className="hidden md:flex lg:hidden" style={{ minHeight: '100vh', justifyContent: 'space-around', alignItems: 'center', padding: '4rem 5rem' }}>
                    {[{ label: 'FRONTEND', items: frontend }, { label: 'BACKEND', items: backend }].map(({ label, items }) => (
                        <div key={label} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <motion.div className="syne"
                                style={{ background: 'var(--accent)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '1rem', zIndex: 2, cursor: 'grab', x, y }}
                                drag dragConstraints={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                initial={{ opacity: 0, scale: 0 }} animate={controls} whileTap={{ scale: 1.2 }}>
                                {label}
                            </motion.div>
                            {items.map((item, i) => {
                                const angle = (i / items.length) * 2 * Math.PI;
                                return (
                                    <motion.div key={i} className="chip" style={{ position: 'absolute', cursor: 'pointer' }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, x: radius * Math.cos(angle), y: radius * Math.sin(angle), scale: 1 }}
                                        transition={{ delay: 0.4 + i * 0.15, duration: 0.7 }}>
                                        {item}
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* ICON ECOSYSTEM */}
                <section style={{ padding: '6rem 1.5rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <FadeIn>
                            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                                <span className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>Tech Ecosystem</span>
                                <h2 className="syne" style={{ fontSize: 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 800, color: '#fff' }}>Tools I Work With</h2>
                            </div>
                        </FadeIn>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
                            {[{ icons: leftIcons, delay: 0.1 }, { icons: rightIcons, delay: 0.3 }].map(({ icons, delay }, idx) => (
                                <FadeIn key={idx} delay={delay}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', maxWidth: '320px', justifyContent: 'center' }}>
                                        {icons.map(({ icon, color, label }, i) => (
                                            <div key={i} className="icon-badge"><span style={{ color }}>{icon}</span><span>{label}</span></div>
                                        ))}
                                    </div>
                                </FadeIn>
                            ))[0]}
                            <FadeIn delay={0.2}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1.5rem 2rem', borderRadius: '1.25rem', background: 'linear-gradient(135deg,rgba(79,110,247,0.18),rgba(168,85,247,0.18))', border: '1px solid rgba(79,110,247,0.3)', margin: '0 0.5rem' }}>
                                    <SiCodersrank style={{ fontSize: '2rem', color: '#fbbf24' }} />
                                    <span className="syne" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>Developer</span>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>FULL STACK</span>
                                </div>
                            </FadeIn>
                            {[{ icons: leftIcons, delay: 0.1 }, { icons: rightIcons, delay: 0.3 }].map(({ icons, delay }, idx) => (
                                <FadeIn key={idx} delay={delay}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', maxWidth: '320px', justifyContent: 'center' }}>
                                        {icons.map(({ icon, color, label }, i) => (
                                            <div key={i} className="icon-badge"><span style={{ color }}>{icon}</span><span>{label}</span></div>
                                        ))}
                                    </div>
                                </FadeIn>
                            ))[1]}
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <FadeIn>
                                <span className="section-label" style={{ marginBottom: '0.5rem', display: 'flex' }}>About My Work</span>
                                <h2 className="syne" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>What I Bring to the Table</h2>
                            </FadeIn>
                            {aboutCards.map(({ title, desc, accent }, i) => (
                                <FadeIn key={i} delay={0.1 * (i + 1)}>
                                    <div className="card-lift" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ width: '3px', borderRadius: '99px', background: accent, alignSelf: 'stretch', flexShrink: 0 }} />
                                        <div>
                                            <h3 className="syne" style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '0.4rem' }}>{title}</h3>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer style={{ borderTop: '1px solid var(--border)', padding: '5rem 1.5rem 2.5rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <FadeIn>
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <h2 className="syne" style={{ fontSize: 'clamp(1.75rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>Let's Build Something Amazing</h2>
                                <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '2rem' }}>Open for collaborations and freelance projects.</p>
                                <Link to="Contact" className="btn-glow"><span>Get in Touch →</span></Link>
                            </div>
                        </FadeIn>
                        <div className="divider" style={{ marginBottom: '3rem' }} />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
                            <div>
                                <span className="syne" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', display: 'block', marginBottom: '0.75rem' }}>Tanveer Singh</span>
                                <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.7 }}>Frontend developer crafting fast, accessible web experiences.</p>
                            </div>
                            <div>
                                <h3 className="syne" style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Contact</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <a href="mailto:tanveersinghh85446@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><IoMailOpenOutline /> tanveersinghh85446@gmail.com</a>
                                    <a href="https://wa.me/919319376656" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaWhatsapp /> +91 9319376656</a>
                                </div>
                            </div>
                            <div>
                                <h3 className="syne" style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Quick Links</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {footerLinks.map(([href, label]) => <a key={href} href={href} className="footer-link">{label}</a>)}
                                </div>
                            </div>
                            <div>
                                <h3 className="syne" style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Social</h3>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <a href="https://wa.me/919319376656" className="social-btn wa" aria-label="WhatsApp"><FaWhatsapp /></a>
                                    <a href="https://www.instagram.com/code_with_tanveer/" className="social-btn ig" aria-label="Instagram"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className="divider" style={{ marginBottom: '1.5rem' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>© {new Date().getFullYear()} Tanveer Singh. All rights reserved.</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Built with React & Tailwind CSS</p>
                        </div>
                    </div>
                </footer>

            </main>
        </>
    );
}