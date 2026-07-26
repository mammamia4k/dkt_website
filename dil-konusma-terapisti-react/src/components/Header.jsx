import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container nav-wrapper">
        <a href="#" className="logo">
          <div className="logo-icon">🗣️</div>
          <div className="logo-text">DKT <span>Sultan Teyfur</span></div>
        </a>

        <ul className="nav-links">
          <li><a href="#hero">Anasayfa</a></li>
          <li><a href="#hakkimda">Hakkında</a></li>
          <li><a href="#klinik">Klinik & Fotoğraflar</a></li>
          <li><a href="#iletisim">İletişim & Randevu</a></li>
        </ul>

        <div className="nav-actions">
          <a href="tel:+905336075309" className="btn btn-outline btn-sm">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
            </svg>
            Ara
          </a>
          <a href="#iletisim" className="btn btn-primary btn-sm">Randevu Al</a>
        </div>
      </div>
    </header>
  );
}
