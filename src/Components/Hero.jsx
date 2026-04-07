import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt, FaReact, FaGithub, FaWhatsapp, FaInstagram, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiJavascript } from "react-icons/di";
import { SiCoreldraw } from "react-icons/si";
import { SiNetlify, SiSvelte, SiAstro, SiVite, SiVitest, SiEslint, SiNuxt, SiCodersrank, SiZod } from "react-icons/si";
    import { SiCanva } from "react-icons/si";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { Link } from 'react-router-dom';
import { FaInfinity } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { RiFileExcel2Fill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";


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
    { name: "HTML", icon: <ImHtmlFive2 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "text-sky-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "JavaScript", icon: <DiJavascript />, color: "text-yellow-400" },
    { name: "VS Code", icon: <VscVscode />, color: "text-blue-400" },
    { name: "Netlify", icon: <SiNetlify />, color: "text-teal-400" },

];

const leftIcons = [
    { icon: <FaReact />, color: "text-cyan-400", label: "React" },
    { icon: <FaVuejs />, color: "text-green-400", label: "Vue" },
    { icon: <SiSvelte />, color: "text-orange-500", label: "Svelte" },
    { icon: <SiAstro />, color: "text-orange-400", label: "Astro" },
    { icon: <SiCoreldraw />, color: "text-green-500", label: "Coreldraw" },
    { icon: < SiCanva/>, color: "text-sky-300", label: "Canva" },
    { icon: <SiVite />, color: "text-indigo-400", label: "Vite" },
    { icon: <RiFileExcel2Fill />, color: "text-green-500", label: "Excel" },
    { icon: < TbBrandMysql />, color: "text-white", label: "MySql" },

];

const rightIcons = [
    { icon: <SiVitest />, color: "text-green-400", label: "Vitest" },
    { icon: <RiTailwindCssFill />, color: "text-sky-400", label: "Tailwind" },
    { icon: <SiEslint />, color: "text-indigo-500", label: "ESLint" },
    { icon: <FaInfinity />, color: "text-pink-400", label: "DeveOps" },
    { icon: <SiNuxt />, color: "text-emerald-400", label: "Nuxt" },
    { icon: <FaBrain />, color: "text-pink-500", label: "Ai" },
    { icon: <PiMicrosoftPowerpointLogoFill />, color: "text-red-500", label: "Remix" },
    { icon: <SiZod />, color: "text-violet-500", label: "Zod" },
    { icon: <DiPhotoshop />, color: "text-blue-400", label: "PhotoShop" },

];

const aboutCards = [
    { title: "Projects & Case Studies", desc: "Showcasing web development projects with live demos and GitHub repositories.", accent: 'bg-indigo-500' },
    { title: "Tech Stack", desc: "React, Tailwind CSS, JavaScript, Node.js, and modern web tools.", accent: 'bg-purple-500' },
    { title: "Contact & Collaboration", desc: "Available for freelance work, projects, or just a friendly hello.", accent: 'bg-emerald-500' },
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

export default function Home() {
    const controls = useAnimation();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const radius = 300;

    useEffect(() => { controls.start({ opacity: 1, scale: 1 }); }, [controls]);

    return (
        <>
            <Helmet>
                <title>Tanveer Singh — Frontend Developer</title>
                <meta name="description" content="Frontend developer crafting fast, accessible, and beautiful web experiences using React, Tailwind CSS, and modern web tools." />
                <meta name="keywords" content="Tanveer Singh, Frontend Developer, React Developer, Web Developer, Tailwind CSS, JavaScript, Portfolio" />
                <meta name="author" content="Tanveer Singh" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://tanveersingh.dev/" />
                <meta property="og:title" content="Tanveer Singh — Frontend Developer" />
                <meta property="og:description" content="I craft modern web experiences with clean code, performance, and creativity — turning ideas into fast, beautiful products." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tanveersingh.dev/" />
                <meta property="og:image" content="https://tanveersingh.dev/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tanveer Singh — Frontend Developer" />
                <meta name="twitter:description" content="I craft modern web experiences with clean code, performance, and creativity." />
                <meta name="twitter:image" content="https://tanveersingh.dev/og-image.jpg" />
                <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
            </Helmet>

            <main className="bg-[#08090d] text-[#e8eaf0] font-['DM_Sans',sans-serif] [scrollbar-width:thin] [scrollbar-color:#4f6ef7_#08090d]">

                {/* HERO */}
                <section className="relative min-h-screen flex items-center overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(79,110,247,0.13)_0%,transparent_70%)]" />
                    <div className="absolute top-[-5%] right-[-10%] w-85 h-85 rounded-full border border-[rgba(79,110,247,0.12)] pointer-events-none" />
                    <div className="absolute top-[-2%] right-[-5%] w-85 h-85 rounded-full border border-[rgba(79,110,247,0.07)] pointer-events-none" />

                    <div className="max-w-300 mx-auto px-6 pt-24 pb-16 w-full">
                        <div className="flex flex-wrap gap-12 items-center">

                            {/* Left text */}
                            <div className="flex-1 min-w-105">
                                <FadeIn>
                                    <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 flex items-center gap-2 mb-6
                                        after:content-[''] after:h-px  after:inline-block after:max-w-15 after:flex-1">
                                        Frontend Developer
                                    </span>
                                </FadeIn>
                                <FadeIn delay={0.1}>
                                    <h1 className="font-['Syne',sans-serif] text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.05] text-white mb-6">
                                        Build.<br />
                                        <span className="[-webkit-text-stroke:1px_rgba(79,110,247,0.7)] text-transparent">Design.</span><br />
                                        Create.
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={0.2}>
                                    <p className="text-base leading-relaxed text-gray-500 max-w-100 mb-10">
                                        I craft modern web experiences with clean code, performance, and creativity — turning ideas into fast, beautiful products.
                                    </p>
                                </FadeIn>
                                <FadeIn delay={0.3}>
                                    <div className="flex gap-4 flex-wrap">
                                        <Link to="Contact"
                                            className="relative overflow-hidden border border-indigo-500 bg-transparent text-white px-6 py-2 rounded-full font-['Syne',sans-serif] text-sm font-semibold inline-flex items-center
                                            before:content-[''] before:absolute before:inset-0 before:bg-indigo-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300
                                            hover:before:scale-x-100 [&>span]:relative [&>span]:z-10">
                                            <span>Get in Touch</span>
                                        </Link>
                                        <Link to="Project"
                                            className="relative overflow-hidden border border-purple-500 bg-transparent text-white px-6 py-2 rounded-full font-['Syne',sans-serif] text-sm font-semibold inline-flex items-center
                                            before:content-[''] before:absolute before:inset-0 before:bg-purple-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300
                                            hover:before:scale-x-100 [&>span]:relative [&>span]:z-10">
                                            <span>View Projects</span>
                                        </Link>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Right video */}
                            <FadeIn delay={0.25} className="flex-1 min-w-90">
                                <motion.div
                                    className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] relative"
                                    whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-indigo-500 rounded-tl-2xl z-10 pointer-events-none" />
                                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500 rounded-br-2xl z-10 pointer-events-none" />
                                    <video autoPlay loop muted playsInline className="w-full block object-cover">
                                        <source src="1 Right.mp4" type="video/mp4" />
                                    </video>
                                </motion.div>
                            </FadeIn>

                        </div>
                    </div>
                </section>

                {/* TECH MARQUEE */}
                <section className="py-12 border-t border-b border-white/[0.07] overflow-hidden">
                    <div className="marquee-track flex gap-8 w-max">
                        {[...techStack, ...techStack].map((t, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-500 text-sm font-['Syne',sans-serif] font-semibold whitespace-nowrap">
                                <span className={`${t.color} text-xl`}>{t.icon}</span>
                                {t.name}
                                <span className="ml-4 text-white/10 text-xl">·</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* VIDEO CTA BANNER */}
                <section className="relative h-[90vh] overflow-hidden">
                    <video src="Portfolio.mp4" autoPlay loop muted playsInline
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" />
                    <div className="absolute inset-0 bg-linear-to-b from-[#08090d] via-transparent to-[#08090d]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                        <FadeIn>
                            <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 flex items-center justify-center gap-2 mb-5
                                after:content-[''] after:h-px after:bg-white/10 after:inline-block after:max-w-15 after:flex-1">
                                Crafting Digital Experiences
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 className="font-['Syne',sans-serif] text-[clamp(2rem,5vw,4rem)] font-extrabold text-white leading-[1.1] mb-5 max-w-175">
                                Developer Builds Experiences That Last
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-white/60 text-[1.05rem] mb-8 max-w-120">
                                Web development done right — performant, accessible, and delightful.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <Link to="Contact"
                                className="relative overflow-hidden border border-indigo-500 bg-transparent text-white px-6 py-2 rounded-full font-['Syne',sans-serif] text-sm font-semibold inline-flex items-center
                                before:content-[''] before:absolute before:inset-0 before:bg-indigo-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300
                                hover:before:scale-x-100 [&>span]:relative [&>span]:z-10">
                                <span>Contact Us →</span>
                            </Link>
                        </FadeIn>
                    </div>
                </section>

                {/* SKILLS ORBIT */}
                <div className="hidden md:flex lg:hidden min-h-screen justify-around items-center px-20 py-16">
                    {[{ label: 'FRONTEND', items: frontend }, { label: 'BACKEND', items: backend }].map(({ label, items }) => (
                        <div key={label} className="relative flex justify-center items-center">
                            <motion.div
                                className="font-['Syne',sans-serif] bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold text-base z-10 cursor-grab"
                                style={{ x, y }}
                                drag dragConstraints={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                initial={{ opacity: 0, scale: 0 }} animate={controls} whileTap={{ scale: 1.2 }}>
                                {label}
                            </motion.div>
                            {items.map((item, i) => {
                                const angle = (i / items.length) * 2 * Math.PI;
                                return (
                                    <motion.div key={i}
                                        className="absolute text-[0.72rem] font-medium bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 px-3 py-1 rounded-full whitespace-nowrap cursor-pointer hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all"
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
                <section className="py-24 px-6">
                    <div className="max-w-275 mx-auto">
                        <FadeIn>
                            <div className="text-center mb-14">
                                <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 flex items-center justify-center gap-2 mb-3
                                    after:content-[''] after:h-px after:inline-block after:max-w-15 after:flex-1">
                                    Tech Ecosystem
                                </span>
                                <h2 className="font-['Syne',sans-serif] text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold text-white">Tools I Work With</h2>
                            </div>
                        </FadeIn>
                        <div className="flex flex-wrap gap-6 justify-center items-center">

                            <FadeIn delay={0.1}>
                                <div className="flex flex-wrap gap-3 max-w-80 justify-center">
                                    {leftIcons.map(({ icon, color, label }, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1.5 px-3.5 py-3 rounded-xl bg-white/4 border border-white/[0.07] text-[0.65rem] font-medium text-gray-500
                                            transition-all duration-200 cursor-default hover:-translate-y-1.5 hover:scale-105 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                                            <span className={`${color} text-[1.6rem]`}>{icon}</span>
                                            <span>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mx-2">
                                    <SiCodersrank className="text-4xl text-yellow-400" />
                                    <span className="font-['Syne',sans-serif] font-bold text-lg text-white">Developer</span>
                                    <span className="text-[0.7rem] text-gray-500 tracking-widest">FULL STACK</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="flex flex-wrap gap-3 max-w-80 justify-center">
                                    {rightIcons.map(({ icon, color, label }, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1.5 px-3.5 py-3 rounded-xl bg-white/4 border border-white/[0.07] text-[0.65rem] font-medium text-gray-500
                                            transition-all duration-200 cursor-default hover:-translate-y-1.5 hover:scale-105 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                                            <span className={`${color} text-[1.6rem]`}>{icon}</span>
                                            <span>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="py-24 px-6 border-t border-white/[0.07]">
                    <div className="max-w-275 mx-auto flex flex-wrap gap-12 items-center">
                        <div className="flex-1 min-w-95 flex flex-col gap-5">
                            <FadeIn>
                                <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 flex items-center gap-2 mb-2
                                    after:content-[''] after:h-px  after:inline-block after:max-w-15 after:flex-1">
                                    About My Work
                                </span>
                                <h2 className="font-['Syne',sans-serif] text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-white mb-6">What I Bring to the Table</h2>
                            </FadeIn>
                            {aboutCards.map(({ title, desc, accent }, i) => (
                                <FadeIn key={i} delay={0.1 * (i + 1)}>
                                    <div className="bg-white/4 border border-white/[0.07] rounded-2xl p-5 flex gap-4 items-start
                                        transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_12px_40px_rgba(79,110,247,0.12)]">
                                        <div className={`w-0.75 rounded-full ${accent} self-stretch shrink-0`} />
                                        <div>
                                            <h3 className="font-['Syne',sans-serif] font-bold text-[0.95rem] text-white mb-1.5">{title}</h3>
                                            <p className="text-[0.85rem] text-gray-500 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-white/[0.07] pt-20 pb-10 px-6">
                    <div className="max-w-275 mx-auto">
                        <FadeIn>
                            <div className="text-center mb-16">
                                <h2 className="font-['Syne',sans-serif] text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-white mb-3">Let's Build Something Amazing</h2>
                                <p className="text-gray-500 text-base mb-8">Open for collaborations and freelance projects.</p>
                                <Link to="Contact"
                                    className="relative overflow-hidden border border-indigo-500 bg-transparent text-white px-6 py-2 rounded-full font-['Syne',sans-serif] text-sm font-semibold inline-flex items-center
                                    before:content-[''] before:absolute before:inset-0 before:bg-indigo-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300
                                    hover:before:scale-x-100 [&>span]:relative [&>span]:z-10">
                                    <span>Get in Touch →</span>
                                </Link>
                            </div>
                        </FadeIn>

                        <div className="h-px bg-white/[0.07] mb-12" />

                        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mb-12">
                            <div>
                                <span className="font-['Syne',sans-serif] font-extrabold text-lg text-white block mb-3">Tanveer Singh</span>
                                <p className="text-[0.83rem] text-gray-500 leading-relaxed">Frontend developer crafting fast, accessible web experiences.</p>
                            </div>
                            <div>
                                <h3 className="font-['Syne',sans-serif] font-bold text-[0.8rem] tracking-widest uppercase text-gray-500 mb-4">Contact</h3>
                                <div className="flex flex-col gap-2.5">
                                    <a href="mailto:tanveersinghh85446@gmail.com" className="text-gray-500 text-sm no-underline flex items-center gap-2 hover:text-white transition-colors">
                                        <IoMailOpenOutline /> tanveersinghh85446@gmail.com
                                    </a>
                                    <a href="https://wa.me/919319376656" className="text-gray-500 text-sm no-underline flex items-center gap-2 hover:text-white transition-colors">
                                        <FaWhatsapp /> +91 9319376656
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-['Syne',sans-serif] font-bold text-[0.8rem] tracking-widest uppercase text-gray-500 mb-4">Quick Links</h3>
                                <div className="flex flex-col gap-2">
                                    {footerLinks.map(([href, label]) => (
                                        <a key={href} href={href} className="text-gray-500 text-sm no-underline hover:text-white transition-colors">{label}</a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-['Syne',sans-serif] font-bold text-[0.8rem] tracking-widest uppercase text-gray-500 mb-4">Social</h3>
                                <div className="flex gap-3">
                                    <a href="https://wa.me/919319376656" aria-label="WhatsApp"
                                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/[0.07] text-lg text-gray-500
                                        transition-all duration-200 hover:bg-[#25d366] hover:text-white hover:-translate-y-1">
                                        <FaWhatsapp />
                                    </a>
                                    <a href="https://www.instagram.com/web_createrr/" aria-label="Instagram"
                                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/[0.07] text-lg text-gray-500
                                        transition-all duration-200 hover:bg-[#e1306c] hover:text-white hover:-translate-y-1">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.linkedin.com/in/tanveer-singh-ab008637b/" aria-label="Instagram"
                                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/[0.07] text-lg text-gray-500
                                        transition-all duration-200 hover:bg-[#246ce8] hover:text-white hover:-translate-y-1">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-white/[0.07] mb-6" />
                        <div className="flex justify-between flex-wrap gap-2">
                            <p className="text-[0.8rem] text-gray-500">© {new Date().getFullYear()} Tanveer Singh. All rights reserved.</p>
                            <p className="text-[0.8rem] text-gray-500">Built with React & Tailwind CSS</p>
                        </div>
                    </div>
                </footer>

            </main>
        </>
    );
}