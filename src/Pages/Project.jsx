import React from "react"
import { Fragment } from "react"
import { Helmet } from "react-helmet-async"
import { CgWebsite } from "react-icons/cg"
import { HiArrowUpRight } from "react-icons/hi2"
import { motion } from "framer-motion"

const projects = [
  { title: "Nursery Website", description: "A modern Nursery Website built with React and Tailwind CSS.", image: "Nursery.jpg", tech: ["HTML", "CSS", "React", "Tailwind"], github: "https://plants-gamma-murex.vercel.app/", accent: "#4f6ef7" },
  { title: "E-Commerce UI", description: "Responsive e-commerce frontend with product pages and cart UI.", image: "E-Commerce.jpg", tech: ["React", "Tailwind", "JavaScript"], github: "#", accent: "#a855f7" },
  { title: "Landing Page", description: "High converting business landing page with modern UI and animations.", image: "Landing Page.jpg", tech: ["HTML", "CSS", "JavaScript"], github: "https://landing-theta-five-94.vercel.app/", accent: "#10b981" },
  { title: "Blog Website", description: "Clean blog platform with responsive layout and article pages.", image: "Blog.jpg", tech: ["React", "Tailwind"], github: "#", accent: "#f59e0b" },
  { title: "Business Website", description: "Professional business website for small companies and startups.", image: "Business.jpg", tech: ["HTML", "CSS", "JavaScript"], github: "#", accent: "#61dbfb" },
  { title: "Dashboard UI", description: "Modern admin dashboard interface with charts and reusable components.", image: "Dashbord.jpg", tech: ["React", "Tailwind"], github: "#", accent: "#e879f9" },
  { title: "Hotel Website", description: "Responsive website designed for a Hotel to showcase menu and reservations.", image: "Hotal.jpg", tech: ["React", "Tailwind"], github: "https://hotel-ruddy-seven.vercel.app/", accent: "#f43f5e" },
  { title: "Real Estate Landing Page", description: "Landing page for a real estate company to showcase property listings.", image: "Real Estate.jpg", tech: ["HTML", "CSS", "JavaScript"], github: "https://estate-plum-psi.vercel.app/", accent: "#22c55e" },
  { title: "Fitness Trainer Portfolio", description: "Personal portfolio website for a fitness trainer to promote services.", image: "Fitness.jpg", tech: ["React", "Tailwind"], github: "https://gym-alpha-ashy.vercel.app/", accent: "#0ea5e9" },
  { title: "Restaurant Website", description: "Responsive website designed for a restaurant to showcase menu and reservations.", image: "Restaurant.jpg", tech: ["React", "Tailwind"], github: "https://restaurant-52fh.vercel.app/", accent: "#f43f5e" },
]

const STYLES = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');`

function resolveImage(filename) {
  const parts = filename.split("/")
  parts[parts.length - 1] = encodeURIComponent(parts[parts.length - 1])
  return parts.join("/")
}

function FadeIn({ children, delay = 0, className = "", style = {} }) {
  return (
    <motion.div className={className} style={{ height: "100%", ...style }}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}

function GlowButton({ href, accent = "#4f6ef7", fillClass, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "center", gap: "8px", border: `1px solid ${accent}`, background: "transparent", color: "#fff", padding: "0.5rem 1.1rem", borderRadius: "9999px", fontFamily: "'Syne',sans-serif", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer", textDecoration: "none", alignSelf: "flex-start", transition: "color 0.3s" }}
      onMouseEnter={e => e.currentTarget.querySelector(`.${fillClass}`).style.transform = "scaleX(1)"}
      onMouseLeave={e => e.currentTarget.querySelector(`.${fillClass}`).style.transform = "scaleX(0)"}>
      <span className={fillClass} style={{ position: "absolute", inset: 0, background: accent, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s cubic-bezier(.4,0,.2,1)", borderRadius: "9999px" }} />
      {children}
    </a>
  )
}

function ProjectCard({ title, description, image, tech, github, accent, index }) {
  return (
    <FadeIn delay={index * 0.07}>
      <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", transition: "border-color 0.3s,box-shadow 0.3s" }}>
        <div style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: accent, zIndex: 2 }} />
          <motion.img src={resolveImage(image)} alt={title} whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }}
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#0e1018" }} />
        </div>
        <div style={{ padding: "1.4rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: "0.45rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent, display: "inline-block", flexShrink: 0 }} />
            {title}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1rem", flex: 1 }}>{description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.1rem" }}>
            {tech.map((t, i) => (
              <span key={i} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", fontWeight: 500, padding: "0.22rem 0.65rem", borderRadius: "9999px", background: `${accent}18`, color: accent, border: `1px solid ${accent}55`, whiteSpace: "nowrap" }}>{t}</span>
            ))}
          </div>
          <GlowButton href={github} accent={accent} fillClass={`fill-${index}`}>
            <CgWebsite style={{ position: "relative", zIndex: 1 }} />
            <span style={{ position: "relative", zIndex: 1 }}>View</span>
            <HiArrowUpRight style={{ position: "relative", zIndex: 1 }} />
          </GlowButton>
        </div>
      </motion.article>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects — Tanveer Singh | Frontend Developer</title>
        <meta name="description" content="Explore web development projects by Tanveer Singh — including business websites, e-commerce UIs, dashboards, and more built with React and Tailwind CSS." />
        <meta name="keywords" content="Tanveer Singh Projects, React Projects, Web Development Portfolio, Frontend Projects, Tailwind CSS" />
        <meta name="author" content="Tanveer Singh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanveersingh.dev/Project" />

        {/* Open Graph */}
        <meta property="og:title" content="Projects — Tanveer Singh | Frontend Developer" />
        <meta property="og:description" content="A collection of web projects built with modern tools — each crafted for performance, accessibility, and great UX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanveersingh.dev/Project" />
        <meta property="og:image" content="https://tanveersingh.dev/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects — Tanveer Singh | Frontend Developer" />
        <meta name="twitter:description" content="A collection of web projects built with modern tools — each crafted for performance, accessibility, and great UX." />
        <meta name="twitter:image" content="https://tanveersingh.dev/og-image.jpg" />
      </Helmet>

      <style>{STYLES}</style>
      <main style={{ background: "var(--bg,#08090d)", minHeight: "100vh" }}>

        {/* HERO */}
        <section style={{ position: "relative", padding: "5rem 1.5rem 1.5rem", textAlign: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 40% at 50% 0%,rgba(79,110,247,0.11) 0%,transparent 70%)" }} />
          {[500, 320].map((size, i) => (
            <div key={i} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: size, height: size, borderRadius: "50%", border: `1px solid rgba(79,110,247,${i === 0 ? 0.07 : 0.1})`, pointerEvents: "none" }} />
          ))}
          <FadeIn style={{ height: "auto" }}>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4f6ef7", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
              My Work
              <span style={{ display: "inline-block", height: "1px", width: "60px", background: "rgba(255,255,255,0.07)" }} />
            </span>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.2rem,6vw,4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.08, marginBottom: "1rem" }}>
              Projects &{" "}
              <span style={{ WebkitTextStroke: "1px rgba(79,110,247,0.7)", color: "transparent" }}>Case Studies</span>
            </h1>
            <p style={{ color: "#6b7280", fontSize: "1rem", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
              A collection of web projects built with modern tools — each crafted for performance, accessibility, and great UX.
            </p>
          </FadeIn>
        </section>

        {/* PROJECTS GRID */}
        <section style={{ padding: "0 1.5rem 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem", alignItems: "stretch", maxWidth: "1200px", margin: "0 auto" }}>
            {projects.map((project, index) => <ProjectCard key={index} {...project} index={index} />)}
          </div>
        </section>

      </main>
    </>
  )
}