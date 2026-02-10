import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Header(){
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="name">Sushil Thanet</h1>
        <div className="title">Full Stack Developer • MERN • Cloud Enthusiast</div>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link to="about" smooth={true} offset={-20} activeClass="active">About</Link>
          <Link to="skills" smooth={true} offset={-20} activeClass="active">Skills</Link>
          <Link to="experience" smooth={true} offset={-20} activeClass="active">Experience</Link>
          <Link to="projects" smooth={true} offset={-20} activeClass="active">Projects</Link>
          <Link to="testimonials" smooth={true} offset={-20} activeClass="active">Testimonials</Link>
          <Link to="contact" smooth={true} offset={-20} activeClass="active">Contact</Link>
        </nav>

        <button onClick={toggleTheme} style={{background:'transparent',border:'none',color:'inherit',fontSize:'1.5rem',cursor:'pointer'}}>🌙</button>

        <button className="mobile-toggle" aria-controls="mobile-nav" aria-expanded={open} onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>

        <div id="mobile-nav" className={`nav-panel ${open? 'open':''}`} role="dialog" aria-modal="true">
          <nav aria-label="Mobile navigation">
            <Link to="about" smooth={true} offset={-20} onClick={close}>About</Link>
            <Link to="skills" smooth={true} offset={-20} onClick={close}>Skills</Link>
            <Link to="experience" smooth={true} offset={-20} onClick={close}>Experience</Link>
            <Link to="projects" smooth={true} offset={-20} onClick={close}>Projects</Link>
            <Link to="testimonials" smooth={true} offset={-20} onClick={close}>Testimonials</Link>
            <Link to="contact" smooth={true} offset={-20} onClick={close}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
