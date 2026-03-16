import { useState, useEffect } from 'react'
import { SiCodersrank } from 'react-icons/si'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { HiHome, HiFolder, HiMail, HiPencil } from 'react-icons/hi'

const links = [
  { to: '/', label: 'Home', end: true, icon: <HiHome /> },
  { to: '/Project', label: 'Projects', icon: <HiFolder /> },
  { to: '/Contact', label: 'Contact', icon: <HiMail /> },
  { to: '/Blog', label: 'Blog', icon: <HiPencil /> },
]

const navStyle = ({ isActive }) =>
  isActive
    ? 'text-amber-300 font-semibold border-b-2 border-amber-300 pb-1'
    : 'text-blue-100/80 hover:text-white border-b-2 border-transparent hover:border-amber-300/50 pb-1 transition-all duration-200'

const drawerStyle = ({ isActive }) =>
  isActive
    ? 'flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-300/10 text-amber-300 border-l-4 border-amber-300 font-semibold'
    : 'flex items-center gap-3 px-4 py-3 rounded-xl text-blue-200/70 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-blue-400/40 hover:translate-x-1 transition-all duration-200'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="relative">

      {/* ── NAVBAR ── */}
      <div
        className={`h-16 sm:h-20 px-6 sm:px-10 md:px-20 flex justify-between items-center text-white transition-all duration-500
          ${scrolled
            ? 'bg-linear-to-r from-blue-950 via-blue-900 to-blue-800 shadow-xl shadow-blue-950/60'
            : 'bg-linear-to-r from-blue-900 via-blue-700 to-blue-600 shadow-lg shadow-blue-900/40'
          }
        `}
      >

        {/* LOGO */}
        <NavLink to="/" end className="flex items-center gap-2 group">
          <span className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-white group-hover:text-blue-100 transition-colors duration-200">
            Developer
          </span>
          <SiCodersrank className="text-amber-300 text-3xl sm:text-4xl animate-bounce drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-base font-serif">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={!!end} className={navStyle}>
              {label}
            </NavLink>
          ))}

          {/* Hire Me CTA */}
          <Link
            to="/Contact"
            className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold text-amber-300 bg-amber-300/10 border border-amber-300/30 hover:bg-amber-300/20 hover:border-amber-300/60 hover:text-amber-200 hover:shadow-[0_0_16px_rgba(251,191,36,0.2)] transition-all duration-200"
          >
            Hire Me ✦
          </Link>
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/15 hover:bg-white/20 hover:border-amber-300/40 hover:shadow-[0_0_10px_rgba(251,191,36,0.15)] text-white text-xl transition-all duration-200"
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* ── OVERLAY ── */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/65 backdrop-blur-sm z-40 transition-all duration-300
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      {/* ── SLIDE DRAWER ── */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 flex flex-col
          bg-grad-to-b from-[#06101f] via-[#0a1933] to-[#0c1e3e]
          border-r border-white/5 shadow-2xl
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >

        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/7">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 group"
          >
            <span className="text-xl font-bold font-serif text-white group-hover:text-blue-100 transition-colors duration-200">
              Developer
            </span>
            <SiCodersrank className="text-amber-300 text-3xl drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
          </NavLink>

          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/6 border border-white/10 hover:bg-red-500/15 hover:border-red-400/30 text-blue-200 hover:text-red-300 text-lg transition-all duration-200"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        {/* SECTION LABEL */}
        <p className="px-6 pt-5 pb-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-blue-400/40">
          Navigation
        </p>

        {/* DRAWER LINKS */}
        <nav className="flex flex-col gap-1 px-4 mt-1">
          {links.map(({ to, label, end, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={!!end}
              onClick={() => setOpen(false)}
              className={drawerStyle}
            >
              <span className="text-xl transition-transform duration-200 group-hover:scale-125">
                {icon}
              </span>
              <span className="text-base font-serif">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* DIVIDER */}
        <div className="mx-6 mt-6 mb-4 h-px bg-white/6" />

        {/* DRAWER CTA */}
        <div className="px-4">
          <Link
            to="/Contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-amber-300 bg-amber-300/10 border border-amber-300/25 hover:bg-amber-300/20 hover:border-amber-300/50 hover:text-amber-200 transition-all duration-200"
          >
            <span>✦</span> Hire Me
          </Link>
        </div>

        {/* DRAWER FOOTER */}
        <div className="mt-auto px-6 py-5 border-t border-white/6 bg-black/20">
          <p className="text-[11px] text-blue-400/35 text-center tracking-wide">
            © 2026 Developer Portfolio
          </p>
        </div>

      </div>
    </div>
  )
}