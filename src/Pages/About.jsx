import React, { useEffect, useRef, useState } from "react";

/* ─── hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ─── skill pill ─── */
const Pill = ({ label }) => (
  <span className="px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white transition transform hover:-translate-y-1">
    {label}
  </span>
);

/* ─── cert card ─── */
const CertCard = ({ src, title }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:scale-105 hover:shadow-xl transition">
    <div className="h-40 overflow-hidden">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition duration-300 hover:scale-110"
      />
    </div>
    <p className="text-sm text-gray-300 px-4 py-2">{title}</p>
  </div>
);

/* ─── info card ─── */
const InfoCard = ({ label, text, icon }) => (
  <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:-translate-y-1 transition">
    <span className="text-2xl mb-2 block">{icon}</span>
    <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">
      {label}
    </p>
    <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
  </div>
);

export default function About() {
  const [heroRef, heroVisible] = useInView();
  const [bodyRef, bodyVisible] = useInView();
  const [certRef, certVisible] = useInView();

  const skills = [
    "HTML","CSS","JavaScript","React","Tailwind",
    "Node.js","Git","Python","SQL","Photoshop",
    "CorelDRAW","Canva","PowerPoint","Excel",
  ];

  return (
    <section className="relative min-h-screen bg-[#08090d] text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      >
        <source src="/Bg.mp4" type="video/mp4" />
      </video>

      {/* HERO */}
      <div
        ref={heroRef}
        className={`relative z-10 max-w-3xl mx-auto text-center px-6 pt-32 pb-16 transition-all duration-700 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="uppercase tracking-widest text-blue-400 text-sm mb-4">
          Portfolio · 2025
        </p>

        <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h1>

        <p className="text-gray-400 mt-6 leading-relaxed max-w-lg mx-auto">
          Full-Stack Web Developer crafting modern, scalable experiences that
          live at the intersection of design & engineering.
        </p>
      </div>

      {/* BODY */}
      <div
        ref={bodyRef}
        className={`relative z-10 max-w-6xl mx-auto px-6 pb-20 transition-all duration-700 ${
          bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="border-t border-blue-500/30 my-10" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Who */}
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Background
            </p>
            <h2 className="text-2xl font-semibold mb-3">Who I Am</h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate web developer who loves building modern,
              responsive, and user-friendly websites. I enjoy turning ideas into
              real-world applications using React and Tailwind CSS.
            </p>
          </div>

          {/* Skills */}
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Tech Stack
            </p>
            <h2 className="text-2xl font-semibold mb-3">My Skills</h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/30 my-10" />

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard
            icon="🎯"
            label="My Goal"
            text="Become a full-stack developer and build scalable web apps."
          />
          <InfoCard
            icon="📚"
            label="Learning"
            text="Backend, APIs, MongoDB & advanced React."
          />
          <InfoCard
            icon="⚡"
            label="Work Style"
            text="Clean code, great UX, and creative problem solving."
          />
        </div>
      </div>

      {/* CERTIFICATES */}
      <div
        ref={certRef}
        className={`relative z-10 max-w-6xl mx-auto px-6 pb-28 transition-all duration-700 ${
          certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="border-t border-blue-500/30 my-10" />

        <p className="text-center text-xs uppercase tracking-widest text-cyan-400">
          Credentials
        </p>

        <h2 className="text-center text-3xl font-bold mb-10 bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent">
          My Certificates
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CertCard src="/certificates/cert1.jpg" title="Web Development" />
          <CertCard src="/certificates/cert2.jpg" title="React" />
          <CertCard src="/certificates/cert3.jpg" title="JavaScript" />
        </div>
      </div>
    </section>
  );
}