import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3.5 py-2 text-sm rounded-lg no-underline font-['Syne',sans-serif] transition-all duration-150 ${
      isActive
        ? 'text-indigo-600 bg-indigo-50 font-medium'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-normal'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-[0.95rem] rounded-xl no-underline font-['Syne',sans-serif] transition-all duration-150 ${
      isActive
        ? 'text-indigo-600 bg-indigo-50 font-medium'
        : 'text-gray-800 hover:bg-gray-50 font-normal'
    }`;

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-8 h-16 bg-white border-b border-gray-200 sticky top-0 z-100">

        {/* Logo */}
        <div className="text-xl font-semibold tracking-tight text-gray-900 font-['Syne',sans-serif]">
          Developer<span className="text-indigo-600"></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/Project" className={linkClass}>Project</NavLink>
          <NavLink to="/Blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/Contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Desktop CTA */}
        
          <a href="/contact"
          className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium no-underline hover:bg-indigo-700 transition-colors duration-150 font-['Syne',sans-serif]"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors p-1.5"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile Dropdown ── */}
      <div className={`md:hidden flex-col gap-1 px-4 pb-4 pt-2 bg-white border-b border-gray-200 sticky top-16 z-99 ${isOpen ? 'flex' : 'hidden'}`}>
        <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/Project" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Project</NavLink>
        <NavLink to="/Blog" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Blog</NavLink>
        <NavLink to="/Contact" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
        
          <a href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-2 block text-center px-4 py-3 bg-indigo-600 text-white rounded-xl text-[0.95rem] font-medium no-underline font-['Syne',sans-serif]"
        >
          Hire Me
        </a>
      </div>
    </>
  );
}