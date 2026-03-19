import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SiCodersrank } from 'react-icons/si'
import { FiMenu, FiX } from 'react-icons/fi'
import { HiHome, HiFolder, HiMail, HiPencil } from 'react-icons/hi'

const links = [
  { to: '/', label: 'Home', end: true, icon: <HiHome /> },
  { to: '/Project', label: 'Projects', icon: <HiFolder /> },
  { to: '/Contact', label: 'Contact', icon: <HiMail /> },
  { to: '/Blog', label: 'Blog', icon: <HiPencil /> },
]

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

  const navLink = ({ isActive }) =>
    `text-sm font-serif pb-1 border-b-2 transition-all duration-200 ${
      isActive
        ? 'text-amber-300 border-amber-300'
        : 'text-blue-100/80 border-transparent hover:text-white hover:border-amber-300/50'
    }`

  const drawerLink = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl border-l-4 transition-all duration-200 ${
      isActive
        ? 'bg-amber-300/10 text-amber-300 border-amber-300'
        : 'text-blue-200/70 border-transparent hover:text-white hover:bg-white/5 hover:border-blue-400/40'
    }`

  return (
    <>
      {/* NAVBAR */}
      <nav className={`h-16 px-6 md:px-16 flex items-center justify-between text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-950 shadow-xl' : 'bg-blue-800 shadow-md'
      }`}>

        {/* LOGO */}
        <NavLink to="/" end className="flex items-center gap-2 font-bold font-serif text-xl">
          Developer
          <SiCodersrank className="text-amber-300 text-3xl" />
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={!!end} className={navLink}>
              {label}
            </NavLink>
          ))}
          <Link
            to="/Contact"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-amber-300 border border-amber-300/30 bg-amber-300/10 hover:bg-amber-300/20 transition-all duration-200"
          >
            Hire Me ✦
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white text-xl hover:bg-white/20 transition-all"
        >
          <FiMenu />
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* DRAWER */}
      <div className={`fixed top-0 left-0 h-full w-64 z-50 flex flex-col bg-[#0a1628] border-r border-white/5 shadow-2xl transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>

        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <NavLink to="/" end onClick={() => setOpen(false)} className="flex items-center gap-2 font-bold font-serif text-white">
            Developer
            <SiCodersrank className="text-amber-300 text-2xl" />
          </NavLink>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-blue-200 hover:bg-red-500/15 hover:text-red-300 transition-all"
          >
            <FiX />
          </button>
        </div>

        {/* DRAWER LINKS */}
        <nav className="flex flex-col gap-1 px-3 mt-4">
          {links.map(({ to, label, end, icon }) => (
            <NavLink key={to} to={to} end={!!end} onClick={() => setOpen(false)} className={drawerLink}>
              <span className="text-lg">{icon}</span>
              <span className="font-serif">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* HIRE ME */}
        <div className="px-3 mt-4">
          <Link
            to="/Contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-amber-300 border border-amber-300/25 bg-amber-300/10 hover:bg-amber-300/20 transition-all"
          >
            ✦ Hire Me
          </Link>
        </div>

        {/* FOOTER */}
        <div className="mt-auto px-5 py-4 border-t border-white/5 text-center text-[11px] text-blue-400/30">
          © 2026 Developer Portfolio
        </div>
      </div>
    </>
  )
}