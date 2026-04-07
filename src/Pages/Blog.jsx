import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const posts = [
  {
    src: "AI.mp4",
    tag: "Infrastructure",
    title: "Global Data Infrastructure & Visualization",
    desc: "Imagine a digital network where every node flows seamlessly through a virtual ecosystem. Each glowing particle represents real-time data moving across decentralized pathways.",
    bullets: [
      "Cloud computing & big data analytics",
      "Visualization of network traffic",
      "Interconnected systems at a global scale",
    ],
    accent: "text-indigo-400",
    dot: "bg-indigo-400",
  },
  {
    src: "Herov.mp4",
    tag: "Backend",
    title: "Backend Logic & Email Authentication",
    desc: "Explore secure backend systems handling user authentication and email verification. Efficient workflows ensure safe and seamless user registration experiences.",
    bullets: [
      "Account verification logic",
      "Email service integration",
      "Secure backend architecture",
    ],
    accent: "text-purple-400",
    dot: "bg-purple-400",
    reverse: true,
  },
  {
    src: "Code.mp4",
    tag: "Security",
    title: "Cybersecurity & Live Development",
    desc: "Witness real-time coding and cybersecurity practices. Structured code and debugging processes demonstrate the discipline required for professional software development.",
    bullets: [
      "Ethical hacking & security workflows",
      "IDE & live development focus",
      "Best practices for secure coding",
    ],
    accent: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  {
    src: "JavaScript.mp4",
    tag: "Encryption",
    title: "Data Encryption & Matrix Streams",
    desc: "Dense streams of numeric and symbolic data illustrate encryption and data monitoring. This visual gives a clear sense of machine-level data security in action.",
    bullets: [
      "Matrix-style data visualization",
      "Encryption & decryption flow",
      "Cybersecurity monitoring",
    ],
    accent: "text-amber-400",
    dot: "bg-amber-400",
    reverse: true,
  },
  {
    src: "React.mp4",
    tag: "Frontend",
    title: "React JS & Frontend Development",
    desc: "Build modern, scalable user interfaces using React's component-based architecture. Clean JSX structure and modular design ensure maintainable, high-performance web apps.",
    bullets: [
      "Reusable component architecture",
      "JSX structured UI development",
      "State management & hooks integration",
      "Optimized rendering & performance",
    ],
    accent: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  {
    src: "Brain.mp4",
    tag: "AI / ML",
    title: "Neural Networks & Brain Simulation",
    desc: "Explore the dynamic patterns of neural activity and brain simulations. Complex cognitive processes, memory flows, and AI-inspired neural modeling visualized.",
    bullets: [
      "Real-time neural network visualization",
      "Cognitive process simulation",
      "AI-inspired brain modeling",
    ],
    accent: "text-fuchsia-400",
    dot: "bg-fuchsia-400",
    reverse: true,
  },
];

function PostRow({ src, tag, title, desc, bullets, accent, dot, reverse }) {
  return (
    <article
      className={`flex flex-wrap gap-10 items-center py-12 border-b border-white/0.06 ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Video */}
      <div className="flex-1 min-w-80 rounded-2xl overflow-hidden relative group">
        <div className="absolute inset-0 rounded-2xl border border-white/0.08 z-10 pointer-events-none" />
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full block object-cover rounded-2xl blur-sm brightness-75 transition-all duration-500 group-hover:blur-none group-hover:brightness-100 group-hover:scale-[1.03]"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-80">
        <span
          className={`font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase ${accent} inline-block mb-3`}
        >
          {tag}
        </span>
        <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.2rem,2.5vw,1.65rem)] text-white leading-[1.2] mb-4">
          {title}
        </h2>
        <p className="text-sm text-white/50 leading-[1.75] mb-5">{desc}</p>
        <ul className="flex flex-col gap-2 list-none p-0">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-[0.83rem] text-white/45"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dot} shrink-0`} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Tanveer Singh | Frontend Developer</title>
        <meta
          name="description"
          content="Thoughts and insights on frontend development, cybersecurity, React, and the modern web ecosystem by Tanveer Singh."
        />
        <meta
          name="keywords"
          content="Tanveer Singh Blog, Frontend Development, React, Cybersecurity, Web Development, JavaScript"
        />
        <meta name="author" content="Tanveer Singh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanveersingh.dev/Blog" />
        <meta
          property="og:title"
          content="Blog — Tanveer Singh | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Thoughts on frontend development, security, and the web ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanveersingh.dev/Blog" />
        <meta
          property="og:image"
          content="https://tanveersingh.dev/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog — Tanveer Singh | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Thoughts on frontend development, security, and the web ecosystem."
        />
        <meta
          name="twitter:image"
          content="https://tanveersingh.dev/og-image.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main className="bg-[#08090d] min-h-screen text-white font-['DM_Sans',sans-serif]">
        <div className="max-w-275 mx-auto px-6 pt-20">
          {/* PAGE HEADER */}
          <header className="text-center mb-16">
            <span
              className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-4
              after:content-[''] after:inline-block after:w-10 after:h-px"
            >
              Writing & Insights
            </span>
            <h1 className="font-['Syne',sans-serif] font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[1.05] tracking-tight">
              My Blog
            </h1>
            <p className="text-white/40 text-base max-w-sm mx-auto mt-4">
              Thoughts on frontend development, security, and the web ecosystem.
            </p>
          </header>

          {/* POSTS */}
          <section aria-label="Blog posts">
            {posts.map((post, i) => (
              <PostRow key={i} {...post} />
            ))}
          </section>

          {/* JOURNEY */}
          <section
            className="py-20 max-w-xl mx-auto text-center"
            aria-label="Coding journey"
          >
            <span
              className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-4
              after:content-[''] after:inline-block after:w-10 after:h-px"
            >
              My Story
            </span>
            <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.6rem,3vw,2.4rem)] text-white mb-5">
              My Coding Journey
            </h2>
            <p className="text-[0.95rem] text-white/45 leading-[1.8] mb-8">
              I started learning web development with curiosity and passion.
              Building projects and exploring technologies like HTML, CSS,
              JavaScript and React helped me grow my skills and creativity. I
              enjoy crafting responsive, modern web experiences.
            </p>

            {/* Quote Card */}
            <div className="relative bg-indigo-500/[0.07] border border-indigo-500/20 rounded-2xl px-8 py-7 mb-10 text-left overflow-hidden">
              <span className="absolute top-2 left-4 text-[6rem] font-['Georgia',serif] text-indigo-500/10 leading-none pointer-events-none select-none">
                "
              </span>
              <p className="italic text-white/65 text-base leading-[1.7] relative z-10">
                "Code is like art — the more you practice, the better it
                becomes."
              </p>
            </div>

            {/* Button */}
            <Link
              to="/Project"
              className="relative overflow-hidden border border-indigo-500 bg-transparent text-white px-6 py-2 rounded-full font-['Syne',sans-serif] text-sm font-semibold inline-flex items-center
              before:content-[''] before:absolute before:inset-0 before:bg-indigo-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300
              hover:before:scale-x-100 [&>span]:relative [&>span]:z-10"
            >
              <span>View My Projects →</span>
            </Link>
          </section>
        </div>

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
