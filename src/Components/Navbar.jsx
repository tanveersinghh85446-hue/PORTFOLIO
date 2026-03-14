import { useState } from 'react'
import { SiCodersrank } from "react-icons/si"
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi"

const navStyle = ({ isActive }) =>
    isActive ? "text-yellow-300 border-b-2 border-yellow-300 pb-1" : "hover:text-yellow-200 transition"

const desktopLinks = [
    { to: "/", label: "Home" },
    { to: "/Project", label: "Projects" },
    { to: "/Contact", label: "Contact" },
    { to: "/Blog", label: "Blog" },
]

const mobileLinks = [
    ...desktopLinks,
    { to: "/ClientProject", label: "Client Project" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)

    return (
        <div>
            {/* NAVBAR */}
            <div className="h-20 px-6 md:px-20 flex flex-col md:flex-row justify-center md:justify-between items-center bg-linear-to-br from-blue-900 via-blue-600">
                <div className="flex gap-2 items-center">
                    <NavLink to="/" className="text-2xl md:text-4xl font-serif text-white">Developer</NavLink>
                    <SiCodersrank className="text-amber-300 text-3xl md:text-5xl animate-bounce" />
                </div>
                <nav className="hidden md:flex text-sm md:text-xl gap-6 font-serif text-white">
                    {desktopLinks.map(({ to, label }) => (
                        <NavLink key={to} to={to} className={navStyle}>{label}</NavLink>
                    ))}
                </nav>
            </div>

            {/* FLOATING BUTTON (MOBILE) */}
            <button
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                className="md:hidden fixed bottom-8 right-8 bg-blue-600 text-white text-2xl p-3 rounded-full shadow-lg z-50"
            >
                {open ? <FiX /> : <FiMenu />}
            </button>

            {/* FLOATING MENU */}
            {open && (
                <nav className="fixed bottom-24 right-8 bg-[#0f172a] border border-white/10 rounded-2xl p-4 flex flex-col gap-3 text-white text-sm shadow-2xl z-40">
                    {mobileLinks.map(({ to, label }) => (
                        <NavLink key={to} to={to} onClick={close} className={navStyle}>{label}</NavLink>
                    ))}
                </nav>
            )}
        </div>
    )
}