import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) => ({
    padding: '8px 14px',
    fontSize: '14px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: isActive ? '#4F46E5' : '#374151',
    background: isActive ? '#EEF2FF' : 'transparent',
    fontWeight: isActive ? '500' : '400',
    transition: 'all 0.15s ease',
  });

  const mobileLinkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '12px 16px',
    fontSize: '15px',
    borderRadius: '10px',
    textDecoration: 'none',
    color: isActive ? '#4F46E5' : '#1F2937',
    background: isActive ? '#EEF2FF' : 'transparent',
    fontWeight: isActive ? '500' : '400',
    transition: 'all 0.15s ease',
  });

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; gap: 4px; }
        .nav-cta            { display: inline-block; }
        .nav-hamburger      { display: none; }
        .nav-mobile-menu    {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 10px 16px 16px;
          border-top: 0.5px solid #e5e5e5;
          background: #fff;
          position: sticky;
          top: 64px;
          z-index: 99;
        }
        .nav-mobile-menu.open { display: flex; }
        .nav-hamburger-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: #1F2937;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none; }
          .nav-cta            { display: none; }
          .nav-hamburger      {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: 36px;
            height: 36px;
            background: none;
            border: none;
            cursor: pointer;
            border-radius: 8px;
            padding: 6px;
          }
          .nav-hamburger:hover { background: #f5f5f5; }

          .nav-hamburger.open .bar1 { transform: rotate(45deg) translate(5px, 5px); }
          .nav-hamburger.open .bar2 { opacity: 0; transform: scaleX(0); }
          .nav-hamburger.open .bar3 { transform: rotate(-45deg) translate(5px, -5px); }
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: '64px',
        backgroundColor: '#fff',
        borderBottom: '0.5px solid #e5e5e5',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        {/* Logo */}
        <div style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '-0.3px', color: '#111827' }}>
          Developer<span style={{ color: '#4F46E5' }}></span>
        </div>

        {/* Desktop Links */}
        <div className="nav-desktop-links">
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/Project" style={linkStyle}>Project</NavLink>
          <NavLink to="/Blog" style={linkStyle}>Blog</NavLink>
          <NavLink to="/Contact" style={linkStyle}>Contact</NavLink>
        </div>

        {/* Desktop CTA */}
        <a href="/contact" className="nav-cta" style={{
          padding: '8px 18px',
          background: '#4F46E5',
          color: '#fff',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'background 0.15s ease',
        }}>
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`nav-hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="nav-hamburger-bar bar1" />
          <span className="nav-hamburger-bar bar2" />
          <span className="nav-hamburger-bar bar3" />
        </button>
      </nav>

      {/* ── Mobile Dropdown ── */}
      <div className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" style={mobileLinkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/Project" style={mobileLinkStyle} onClick={() => setIsOpen(false)}>Project</NavLink>
        <NavLink to="/Blog" style={mobileLinkStyle} onClick={() => setIsOpen(false)}>Blog</NavLink>
        <NavLink to="/Contact" style={mobileLinkStyle} onClick={() => setIsOpen(false)}>Contact</NavLink>

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          style={{
            marginTop: '8px',
            display: 'block',
            textAlign: 'center',
            padding: '12px',
            background: '#4F46E5',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}