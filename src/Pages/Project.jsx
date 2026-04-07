import React from "react";
import { Helmet } from "react-helmet-async";
import { CgWebsite } from "react-icons/cg";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Nursery Website",
    description: "A modern Nursery Website built with React and Tailwind CSS.",
    image: "Nursery.jpg",
    tech: ["HTML", "CSS", "React", "Tailwind"],
    github: "https://plants-gamma-murex.vercel.app/",
    accent: "indigo",
    accentHex: "#4f6ef7",
  },
  {
    title: "E-Commerce UI",
    description:
      "Responsive e-commerce frontend with product pages and cart UI.",
    image: "E-Commerce.jpg",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://e-commerce-zeta-eosin-y5a7jm8f0m.vercel.app/",
    accent: "purple",
    accentHex: "#a855f7",
  },
  {
    title: "Landing Page",
    description:
      "High converting business landing page with modern UI and animations.",
    image: "Landing Page.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://landing-theta-five-94.vercel.app/",
    accent: "emerald",
    accentHex: "#10b981",
  },
  {
    title: "Blog Website",
    description:
      "Clean blog platform with responsive layout and article pages.",
    image: "Blog.jpg",
    tech: ["React", "Tailwind"],
    github: "https://blog-rose-five-83.vercel.app/",
    accent: "amber",
    accentHex: "#f59e0b",
  },
  {
    title: "Business Website",
    description:
      "Professional business website for small companies and startups.",
    image: "Business.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    accent: "cyan",
    accentHex: "#61dbfb",
  },
  {
    title: "Dashboard UI",
    description:
      "Modern admin dashboard interface with charts and reusable components.",
    image: "Dashbord.jpg",
    tech: ["React", "Tailwind"],
    github: "#",
    accent: "fuchsia",
    accentHex: "#e879f9",
  },
  {
    title: "Hotel Website",
    description:
      "Responsive website designed for a Hotel to showcase menu and reservations.",
    image: "Hotal.jpg",
    tech: ["React", "Tailwind"],
    github: "https://hotel-ruddy-seven.vercel.app/",
    accent: "rose",
    accentHex: "#f43f5e",
  },
  {
    title: "Real Estate Landing Page",
    description:
      "Landing page for a real estate company to showcase property listings.",
    image: "Real Estate.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://estate-plum-psi.vercel.app/",
    accent: "green",
    accentHex: "#22c55e",
  },
  {
    title: "Fitness Trainer Portfolio",
    description:
      "Personal portfolio website for a fitness trainer to promote services.",
    image: "Fitness.jpg",
    tech: ["React", "Tailwind"],
    github: "https://gym-alpha-ashy.vercel.app/",
    accent: "sky",
    accentHex: "#0ea5e9",
  },
  {
    title: "Restaurant Website",
    description:
      "Responsive website designed for a restaurant to showcase menu and reservations.",
    image: "Restaurant.jpg",
    tech: ["React", "Tailwind"],
    github: "https://restaurant-52fh.vercel.app/",
    accent: "rose",
    accentHex: "#f43f5e",
  },
  {
    title: "Yoga Website",
    description:
      "Responsive website designed for a yoga to showcase menu and reservations.",
    image: "Yoga.jpg",
    tech: ["React", "Tailwind"],
    github: "https://yoga-lilac.vercel.app/",
    accent: "rose",
    accentHex: "#f43f5e",
  },
  {
    title: "Space Explorer",
    description:
      "Interactive space website featuring planets, galaxies, nebula videos, solar system information and space gallery built with React and Tailwind.",
    image: "Space.jpg",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://x-pace.vercel.app/",
    accent: "blue",
    accentHex: "#3b82f6",
  },
];

function resolveImage(filename) {
  const parts = filename.split("/");
  parts[parts.length - 1] = encodeURIComponent(parts[parts.length - 1]);
  return parts.join("/");
}

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  accentHex,
  index,
}) {
  return (
    <FadeIn delay={index * 0.07} className="h-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="bg-white/0.04] border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col h-full hover:border-white/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-300"
      >
        {/* Image */}
        <div className="relative overflow-hidden shrink-0">
          <div
            className="absolute top-0 left-0 right-0 h-0.75 z-10"
            style={{ background: accentHex }}
          />
          <motion.img
            src={resolveImage(image)}
            alt={title}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="w-full aspect-video object-cover block bg-[#0e1018]"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-['Syne',sans-serif] font-bold text-[1.05rem] text-white mb-2 flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full shrink-0 inline-block"
              style={{ background: accentHex }}
            />
            {title}
          </h3>
          <p className="text-sm text-gray-500 leading-[1.65] mb-4 flex-1">
            {description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="font-['DM_Sans',sans-serif] text-[0.68rem] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap"
                style={{
                  background: `${accentHex}18`,
                  color: accentHex,
                  border: `1px solid ${accentHex}55`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Button */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-2 self-start px-4 py-2 rounded-full font-['Syne',sans-serif] text-[0.8rem] font-semibold text-white no-underline
            before:content-[''] before:absolute before:inset-0 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:rounded-full
            hover:before:scale-x-100 *:relative *:z-10 transition-colors duration-300"
            style={{ border: `1px solid ${accentHex}` }}
            onMouseEnter={(e) =>
              e.currentTarget.style.setProperty("--btn-bg", accentHex)
            }
          >
            <style>{`a:hover::before { background: ${accentHex}; }`}</style>
            <CgWebsite />
            <span>View</span>
            <HiArrowUpRight />
          </a>
        </div>
      </motion.article>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects — Tanveer Singh | Frontend Developer</title>
        <meta
          name="description"
          content="Explore web development projects by Tanveer Singh — including business websites, e-commerce UIs, dashboards, and more built with React and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Tanveer Singh Projects, React Projects, Web Development Portfolio, Frontend Projects, Tailwind CSS"
        />
        <meta name="author" content="Tanveer Singh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanveersingh.dev/Project" />
        <meta
          property="og:title"
          content="Projects — Tanveer Singh | Frontend Developer"
        />
        <meta
          property="og:description"
          content="A collection of web projects built with modern tools — each crafted for performance, accessibility, and great UX."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanveersingh.dev/Project" />
        <meta
          property="og:image"
          content="https://tanveersingh.dev/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects — Tanveer Singh | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="A collection of web projects built with modern tools — each crafted for performance, accessibility, and great UX."
        />
        <meta
          name="twitter:image"
          content="https://tanveersingh.dev/og-image.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main className="bg-[#08090d] min-h-screen font-['DM_Sans',sans-serif]">
        {/* HERO */}
        <section className="relative pt-20 pb-6 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(79,110,247,0.11)_0%,transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full border border-indigo-500/[0.07] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-indigo-500/10 pointer-events-none" />

          <FadeIn>
            <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center gap-2 mb-5">
              My Work
            </span>
            <h1 className="font-['Syne',sans-serif] text-[clamp(2.2rem,6vw,4rem)] font-extrabold text-white leading-[1.08] mb-4">
              Projects &{" "}
              <span className="[-webkit-text-stroke:1px_rgba(79,110,247,0.7)] text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-gray-500 text-base leading-[1.7] max-w-120 mx-auto">
              A collection of web projects built with modern tools — each
              crafted for performance, accessibility, and great UX.
            </p>
          </FadeIn>
        </section>

        {/* PROJECTS GRID */}
        <section className="px-6 pb-8">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 max-w-300 mx-auto items-stretch">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/[0.07] py-10 px-6 text-center mt-12">
          <p className="text-xs text-white/30 mb-3">
            © {new Date().getFullYear()} Tanveer Singh
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/tanveer-singh-ab008637b/"
              className="text-white/40 text-sm no-underline hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/web_createrr/"
              className="text-white/40 text-sm no-underline hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
