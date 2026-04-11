// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { IoMdMailUnread } from "react-icons/io";
// import { FaMapLocationDot } from "react-icons/fa6";
// import { SiFreelancer } from "react-icons/si";

// const services = [
//   {
//     title: "Business Websites",
//     desc: "Professional websites designed to represent your brand and attract customers.",
//     accent: "border-t-indigo-500",
//     icon: "🏢",
//   },
//   {
//     title: "Portfolio Websites",
//     desc: "Personal portfolio websites for developers and professionals to showcase their work.",
//     accent: "border-t-purple-500",
//     icon: "🎨",
//   },
//   {
//     title: "Landing Pages",
//     desc: "High-converting landing pages for marketing campaigns and product launches.",
//     accent: "border-t-emerald-500",
//     icon: "🚀",
//   },
// ];

// const faqs = [
//   {
//     q: "How long does it take to build a website?",
//     a: "Most websites take between 1–3 weeks depending on the complexity and features required.",
//   },
//   {
//     q: "Do you work with international clients?",
//     a: "Yes, I work with clients globally and communicate via email or video calls.",
//   },
//   {
//     q: "Can you redesign my existing website?",
//     a: "Absolutely! I can improve the design, performance and responsiveness of your current website.",
//   },
// ];

// const infoCards = [
//   {
//     icon: <IoMdMailUnread />,
//     label: "Email",
//     value: "tanveersinghh85446@gmail.com",
//     iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
//   },
//   {
//     icon: <FaMapLocationDot />,
//     label: "Location",
//     value: "Delhi, Dwarka, India",
//     iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
//   },
//   {
//     icon: <SiFreelancer />,
//     label: "Availability",
//     value: "Open for freelance projects",
//     iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
//   },
// ];

// const projectImages = [
//   "project1.jpg",
//   "project2.jpg",
//   "project3.jpg",
//   "project4.jpg",
//   "project5.jpg",
//   "project6.jpg",
//   "project7.jpg",
//   "project8.jpg",
//   "project9.jpg",
//   "project10.jpg",
//   "project11.jpg",
//   "project12.jpg",
//   "project13.jpg",
// ];

// function FaqItem({ q, a }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={`rounded-[0.85rem] overflow-hidden border transition-colors duration-300 ${open ? "border-indigo-500/35" : "border-white/[0.07]"} bg-white/0.03`}
//     >
//       <button
//         className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 bg-transparent border-none cursor-pointer"
//         onClick={() => setOpen((o) => !o)}
//         aria-expanded={open}
//       >
//         {/* FIX: text-left + smaller font on mobile so it doesn't overflow */}
//         <span className="font-['Syne',sans-serif] font-bold text-[0.85rem] sm:text-[0.95rem] text-white text-left">
//           {q}
//         </span>
//         <span
//           className={`text-xl text-white/40 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
//         >
//           +
//         </span>
//       </button>
//       {open && (
//         <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm text-white/45 leading-[1.75]">
//           {a}
//         </p>
//       )}
//     </div>
//   );
// }

// function InfiniteScrollImages() {
//   const doubled = [...projectImages, ...projectImages];

//   return (
//     <section
//       className="mb-16 sm:mb-20 overflow-hidden"
//       aria-label="Project showcase"
//     >
//       <div className="text-center mb-8 sm:mb-10 max-w-275 mx-auto px-4 sm:px-6">
//         <span
//           className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3
//           after:content-[''] after:inline-block after:w-10 after:h-px"
//         >
//           My Work
//         </span>
//         <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.4rem,3vw,2.4rem)] text-white">
//           Projects Showcase
//         </h2>
//       </div>

//       <div className="relative">
//         <div
//           className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none"
//           style={{
//             background: "linear-gradient(to right, #08090d, transparent)",
//           }}
//         />
//         <div
//           className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none"
//           style={{
//             background: "linear-gradient(to left, #08090d, transparent)",
//           }}
//         />

//         {/* FIX: smaller card size on mobile using responsive classes */}
//         <div
//           className="flex gap-3 sm:gap-5 w-max"
//           style={{ animation: "infiniteScroll 30s linear infinite" }}
//         >
//           {doubled.map((src, i) => (
//             <div
//               key={i}
//               className="shrink-0 w-52 h-36 sm:w-72 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.07] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
//             >
//               <img
//                 src={src}
//                 alt={`Project ${(i % projectImages.length) + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes infiniteScroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default function Contact() {
//   return (
//     <>
//       <Helmet>
//         <title>Contact — Tanveer Singh | Frontend Developer</title>
//         <meta
//           name="description"
//           content="Get in touch with Tanveer Singh for freelance web development projects. Available for business websites, portfolio sites, and landing pages."
//         />
//         <meta
//           name="keywords"
//           content="Contact Tanveer Singh, Hire Frontend Developer, Freelance Web Developer, React Developer Delhi"
//         />
//         <meta name="author" content="Tanveer Singh" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://tanveersingh.dev/Contact" />
//         <meta
//           property="og:title"
//           content="Contact — Tanveer Singh | Frontend Developer"
//         />
//         <meta
//           property="og:description"
//           content="Have a project idea? Let's build something amazing together."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://tanveersingh.dev/Contact" />
//         <meta
//           property="og:image"
//           content="https://tanveersingh.dev/og-image.jpg"
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Contact — Tanveer Singh | Frontend Developer"
//         />
//         <meta
//           name="twitter:description"
//           content="Have a project idea? Let's build something amazing together."
//         />
//         <meta
//           name="twitter:image"
//           content="https://tanveersingh.dev/og-image.jpg"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
//           rel="stylesheet"
//         />
//       </Helmet>

//       <main className="bg-[#08090d] text-white min-h-screen font-['DM_Sans',sans-serif]">
//         {/* FIX: pt-12 on mobile, pt-20 on desktop */}
//         <div className="max-w-275 mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
//           {/* HEADER */}
//           <header className="text-center mb-10 sm:mb-16">
//             <span
//               className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3 sm:mb-4
//               after:content-[''] after:inline-block after:w-10 after:h-px"
//             >
//               Get In Touch
//             </span>
//             <h1 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.8rem,5vw,4rem)] text-white leading-[1.1] tracking-tight mb-3 sm:mb-4">
//               Let's Build Something Amazing
//             </h1>
//             <p className="text-white/40 max-w-lg mx-auto text-[0.9rem] sm:text-[0.95rem] leading-[1.75]">
//               I love creating modern, responsive and high-performance websites.
//               Have a project idea? Feel free to reach out.
//             </p>
//           </header>

//           {/* FORM + INFO */}
//           <section
//             className="flex flex-col md:flex-row gap-8 sm:gap-10 mb-16 sm:mb-20"
//             aria-label="Contact form"
//           >
//             {/* FIX: w-full on mobile, flex-1 on desktop. Removed min-w-80 */}
//             <div className="w-full md:flex-1">
//               <form
//                 action="https://formspree.io/f/xpqyrrry"
//                 method="POST"
//                 className="flex flex-col gap-3 sm:gap-4"
//               >
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   required
//                   className="w-full px-4 py-3 sm:py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25
//                   focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   required
//                   className="w-full px-4 py-3 sm:py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25
//                   focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your Phone Number"
//                   required
//                   pattern="[0-9]{10}"
//                   title="Enter a 10-digit phone number"
//                   className="w-full px-4 py-3 sm:py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25
//                   focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
//                 />
//                 <textarea
//                   name="message"
//                   rows="5"
//                   placeholder="Your Message"
//                   required
//                   className="w-full px-4 py-3 sm:py-3.5 bg-white/0.04 border border-white/0.08 rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25 resize-y
//                   focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full py-3 sm:py-3.5 bg-indigo-500 text-white font-['Syne',sans-serif] font-bold text-sm rounded-xl cursor-pointer border-none tracking-wide
//                   hover:bg-indigo-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(79,110,247,0.35)] transition-all duration-200"
//                 >
//                   Send Message →
//                 </button>
//               </form>
//             </div>

//             {/* FIX: w-full on mobile, flex-1 on desktop. Removed min-w-64 */}
//             <div className="w-full md:flex-1 flex flex-col gap-3 sm:gap-4 justify-center">
//               {infoCards.map(({ icon, label, value, iconBg }) => (
//                 <div
//                   key={label}
//                   className="flex flex-row items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 bg-white/0.03 border border-white/[0.07] rounded-2xl
//                   hover:-translate-y-1 hover:border-indigo-500/25 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300"
//                 >
//                   <div
//                     className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 border flex items-center justify-center text-lg sm:text-xl ${iconBg}`}
//                   >
//                     {icon}
//                   </div>
//                   <div className="min-w-0">
//                     <p className="font-['Syne',sans-serif] font-bold text-[0.75rem] sm:text-[0.8rem] text-white/60 mb-0.5">
//                       {label}
//                     </p>
//                     {/* FIX: truncate long email on very small screens */}
//                     <p className="text-[0.8rem] sm:text-[0.85rem] text-white truncate">
//                       {value}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* SERVICES */}
//           <section className="mb-16 sm:mb-20" aria-label="Services">
//             <div className="text-center mb-8 sm:mb-10">
//               <span
//                 className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3
//                 after:content-[''] after:inline-block after:w-10 after:h-px"
//               >
//                 What I Offer
//               </span>
//               <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.4rem,3vw,2.4rem)] text-white">
//                 Services
//               </h2>
//             </div>
//             {/* FIX: minmax reduced to 160px for better mobile fit */}
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 sm:gap-5">
//               {services.map(({ title, desc, accent, icon }) => (
//                 <div
//                   key={title}
//                   className={`bg-white/0.03 border border-white/[0.07] border-t-2 ${accent} rounded-2xl p-5 sm:p-7
//                   hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300`}
//                 >
//                   <div className="text-2xl mb-3">{icon}</div>
//                   <h3 className="font-['Syne',sans-serif] font-bold text-sm sm:text-base text-white mb-2">
//                     {title}
//                   </h3>
//                   <p className="text-[0.8rem] sm:text-[0.83rem] text-white/45 leading-[1.7]">
//                     {desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* FAQ */}
//           {/* FIX: max-w-180 → max-w-full on mobile, max-w-180 on larger */}
//           <section
//             className="w-full sm:max-w-180 mx-auto mb-16 sm:mb-20"
//             aria-label="FAQ"
//           >
//             <div className="text-center mb-8 sm:mb-10">
//               <span
//                 className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3
//                 after:content-[''] after:inline-block after:w-10 after:h-px"
//               >
//                 FAQ
//               </span>
//               <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.4rem,3vw,2.4rem)] text-white">
//                 Frequently Asked Questions
//               </h2>
//             </div>
//             <div className="flex flex-col gap-3">
//               {faqs.map((f, i) => (
//                 <FaqItem key={i} {...f} />
//               ))}
//             </div>
//           </section>
//         </div>

//         <InfiniteScrollImages />

//         {/* FOOTER */}
//         <footer className="border-t border-white/[0.07] py-8 sm:py-10 px-4 sm:px-6 text-center">
//           <p className="text-xs text-white/30 mb-3">
//             © {new Date().getFullYear()} Tanveer Singh
//           </p>
//           <div className="flex justify-center gap-5 sm:gap-6">
//             <a
//               href="https://www.linkedin.com/in/tanveer-singh-ab008637b/"
//               className="text-white/35 text-sm no-underline hover:text-white transition-colors duration-200"
//             >
//               LinkedIn
//             </a>
//             <a
//               href="https://www.instagram.com/web_createrr/"
//               className="text-white/35 text-sm no-underline hover:text-white transition-colors duration-200"
//             >
//               Instagram
//             </a>
//           </div>
//         </footer>
//       </main>
//     </>
//   );
// }



import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoMdMailUnread } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const services = [
  {
    title: "Business Websites",
    desc: "Professional websites designed to represent your brand and attract customers.",
    accent: "border-t-indigo-500",
    icon: "🏢",
  },
  {
    title: "Portfolio Websites",
    desc: "Personal portfolio websites for developers and professionals to showcase their work.",
    accent: "border-t-purple-500",
    icon: "🎨",
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages for marketing campaigns and product launches.",
    accent: "border-t-emerald-500",
    icon: "🚀",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites take between 1–3 weeks depending on the complexity and features required.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, I work with clients globally and communicate via email or video calls.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely! I can improve the design, performance and responsiveness of your current website.",
  },
];

const infoCards = [
  {
    icon: <IoMdMailUnread />,
    label: "Email",
    value: "tanveersinghh85446@gmail.com",
    iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
  },
  {
    icon: <FaMapLocationDot />,
    label: "Location",
    value: "Delhi, Dwarka, India",
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    icon: <SiFreelancer />,
    label: "Availability",
    value: "Open for freelance projects",
    iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
];

const projectImages = [
  "project1.jpg","project2.jpg","project3.jpg","project4.jpg",
  "project5.jpg","project6.jpg","project7.jpg","project8.jpg",
  "project9.jpg","project10.jpg","project11.jpg","project12.jpg","project13.jpg",
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-[0.85rem] overflow-hidden border transition-colors duration-300 ${
        open ? "border-indigo-500/35" : "border-white/[0.07]"
      } bg-white/0.03`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-['Syne',sans-serif] font-bold text-[0.85rem] sm:text-[0.95rem] text-white text-left">
          {q}
        </span>
        <span
          className={`text-xl text-white/40 shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm text-white/45 leading-[1.75]">
          {a}
        </p>
      )}
    </div>
  );
}

// ─── Infinite Scroll Images ───────────────────────────────────────────────────
function InfiniteScrollImages() {
  const doubled = [...projectImages, ...projectImages];
  return (
    <section className="mb-16 sm:mb-20 overflow-hidden" aria-label="Project showcase">
      <div className="text-center mb-8 sm:mb-10 max-w-275 mx-auto px-4 sm:px-6">
        <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3 after:content-[''] after:inline-block after:w-10 after:h-px">
          My Work
        </span>
        <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.4rem,3vw,2.4rem)] text-white">
          Projects Showcase
        </h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #08090d, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #08090d, transparent)" }} />
        <div className="flex gap-3 sm:gap-5 w-max"
          style={{ animation: "infiniteScroll 30s linear infinite" }}>
          {doubled.map((src, i) => (
            <div key={i}
              className="shrink-0 w-52 h-36 sm:w-72 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.07] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
              <img src={src} alt={`Project ${(i % projectImages.length) + 1}`}
                className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes infiniteScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Server not reachable. Please try again later.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 sm:py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm font-['DM_Sans',sans-serif] outline-none placeholder:text-white/25 focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(79,110,247,0.12)] transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        required
        pattern="[0-9]{10}"
        title="Enter a 10-digit phone number"
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-y`}
      />

      {/* Success Message */}
      {status === "success" && (
        <div className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm text-center">
           Message sent! I'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
          ❌ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 sm:py-3.5 bg-indigo-500 text-white font-['Syne',sans-serif] font-bold text-sm rounded-xl cursor-pointer border-none tracking-wide hover:bg-indigo-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(79,110,247,0.35)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Tanveer Singh | Frontend Developer</title>
        <meta name="description" content="Get in touch with Tanveer Singh for freelance web development projects." />
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
        <div className="max-w-275 mx-auto px-4 sm:px-6 pt-12 sm:pt-20">

          {/* HEADER */}
          <header className="text-center mb-10 sm:mb-16">
            <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3 sm:mb-4 after:content-[''] after:inline-block after:w-10 after:h-px">
              Get In Touch
            </span>
            <h1 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.8rem,5vw,4rem)] text-white leading-[1.1] tracking-tight mb-3 sm:mb-4">
              Let's Build Something Amazing
            </h1>
            <p className="text-white/40 max-w-lg mx-auto text-[0.9rem] sm:text-[0.95rem] leading-[1.75]">
              I love creating modern, responsive and high-performance websites.
              Have a project idea? Feel free to reach out.
            </p>
          </header>

          {/* FORM + INFO */}
          <section className="flex flex-col md:flex-row gap-8 sm:gap-10 mb-16 sm:mb-20" aria-label="Contact form">
            <div className="w-full md:flex-1">
              <ContactForm />
            </div>
            <div className="w-full md:flex-1 flex flex-col gap-3 sm:gap-4 justify-center">
              {infoCards.map(({ icon, label, value, iconBg }) => (
                <div key={label}
                  className="flex flex-row items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 bg-white/3 border border-white/[0.07] rounded-2xl hover:-translate-y-1 hover:border-indigo-500/25 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 border flex items-center justify-center text-lg sm:text-xl ${iconBg}`}>
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-['Syne',sans-serif] font-bold text-[0.75rem] sm:text-[0.8rem] text-white/60 mb-0.5">
                      {label}
                    </p>
                    <p className="text-[0.8rem] sm:text-[0.85rem] text-white truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section className="mb-16 sm:mb-20" aria-label="Services">
            <div className="text-center mb-8 sm:mb-10">
              <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3 after:content-[''] after:inline-block after:w-10 after:h-px">
                What I Offer
              </span>
              <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.4rem,3vw,2.4rem)] text-white">
                Services
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 sm:gap-5">
              {services.map(({ title, desc, accent, icon }) => (
                <div key={title}
                  className={`bg-white/3 border border-white/[0.07] border-t-2 ${accent} rounded-2xl p-5 sm:p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300`}>
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-['Syne',sans-serif] font-bold text-sm sm:text-base text-white mb-2">{title}</h3>
                  <p className="text-[0.8rem] sm:text-[0.83rem] text-white/45 leading-[1.7]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="w-full sm:max-w-180 mx-auto mb-16 sm:mb-20" aria-label="FAQ">
            <div className="text-center mb-8 sm:mb-10">
              <span className="font-['Syne',sans-serif] text-xs font-bold tracking-[0.14em] uppercase text-indigo-400 inline-flex items-center justify-center gap-2 mb-3 after:content-[''] after:inline-block after:w-10 after:h-px">
                FAQ
              </span>
              <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.4rem,3vw,2.4rem)] text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => (
                <FaqItem key={i} {...f} />
              ))}
            </div>
          </section>
        </div>

        <InfiniteScrollImages />

        {/* FOOTER */}
        <footer className="border-t border-white/[0.07] py-8 sm:py-10 px-4 sm:px-6 text-center">
          <p className="text-xs text-white/30 mb-3">© {new Date().getFullYear()} Tanveer Singh</p>
          <div className="flex justify-center gap-5 sm:gap-6">
            <a href="https://www.linkedin.com/in/tanveer-singh-ab008637b/"
              className="text-white/35 text-sm no-underline hover:text-white transition-colors duration-200">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/web_createrr/"
              className="text-white/35 text-sm no-underline hover:text-white transition-colors duration-200">
              Instagram
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}