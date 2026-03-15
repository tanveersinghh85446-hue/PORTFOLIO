import { useState } from 'react'
import { SiCodersrank } from "react-icons/si"
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi"

const navStyle = ({ isActive }) =>
  isActive
    ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
    : "hover:text-yellow-200 transition"

const links = [
  { to: "/", label: "Home" },
  { to: "/Project", label: "Projects" },
  { to: "/Contact", label: "Contact" },
  { to: "/Blog", label: "Blog" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">

      {/* NAVBAR */}
      <div className="h-20 px-6 md:px-20 flex justify-between items-center bg-linear-to-r from-blue-900 via-blue-700 to-blue-600 text-white">

        {/* LOGO */}
        <div className="flex gap-2 items-center">
          <NavLink to="/" className="text-2xl md:text-4xl font-serif">
            Developer
          </NavLink>
          <SiCodersrank className="text-amber-300 text-3xl md:text-5xl animate-bounce" />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 text-xl font-serif">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navStyle}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-3xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* DARK OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* SLIDE DRAWER MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0f172a] text-white transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <FiX
            className="text-3xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* MENU LINKS */}
        <nav className="flex flex-col gap-6 p-6 text-lg font-serif">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={navStyle}
            >
              {label}
            </NavLink>
          ))}
        </nav>

      </div>

    </div>
  )
}