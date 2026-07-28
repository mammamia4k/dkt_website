import React, { useState, useEffect } from 'react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';

const heroImages = [
  {
    src: hero1,
    alt: 'DKT Sultan Teyfur',
    caption: 'DKT Sultan Teyfur'
  },
  {
    src: hero2,
    alt: 'DKT Sultan Teyfur Danışmanlık',
    caption: 'Klinik Terapist'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day >= 1 && day <= 6 && hour >= 9 && hour < 18) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>
                {isOpen 
                  ? 'Klinik Şu An Açık • Randevu Kabul Ediliyor' 
                  : 'Randevu Hattı Aktif • 7/24 Mesaj Bırakabilirsiniz'}
              </span>
            </div>

            <h1 className="hero-title">
              Her Ses Bir Hikâye Anlatır; <span>Biz O Hikâyeye Sevgiyle</span> Eşlik Ediyoruz.
            </h1>

            <p className="hero-desc">
              Çocuk ve yetişkinlerde dil, konuşma, ses, akıcılık ve beslenme-yutma alanlarında bilimsel temelli, bireye özel terapi hizmeti sunuyorum. Her danışanın hikâyesini dinliyor, ihtiyaçlarına uygun bir yol haritasını birlikte oluşturuyoruz.
            </p>

            <div className="specialty-tags">
              <span className="tag">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                SOS Beslenme Terapisti
              </span>
              <span className="tag">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                DIR Floortime 101 Terapisti
              </span>
              <span className="tag">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                DIR Floortime 201 Terapisti
              </span>
              <span className="tag">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                Prompt Klinisyeni
              </span>
              <span className="tag">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                Denver II Gelişimsel Tarama Testi Uygulayıcısı
              </span>
              <span className="tag">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                Oyun Terapisti
              </span>
            </div>

            <div className="hero-buttons">
              <a 
                href="https://wa.me/905336075309?text=Merhaba,%20dil%20ve%20konuşma%20terapisi%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 1a11.011 11.011 0 0 0-9.52 16.545L1 23l5.602-1.465A10.985 10.985 0 0 0 12.031 23c6.074 0 11.012-4.938 11.012-11S18.105 1 12.031 1zm0 20.143c-1.802 0-3.56-.474-5.1-1.37l-.366-.214-3.792.991 1.01-3.694-.236-.376A9.143 9.143 0 1 1 12.03 21.143zm5.024-6.84c-.276-.138-1.636-.807-1.888-.9-.252-.092-.436-.138-.62.138-.184.276-.713.9-.874 1.084-.16.184-.322.207-.598.07-.276-.138-1.166-.43-2.222-1.37-.822-.733-1.377-1.638-1.538-1.915-.16-.276-.017-.425.12-.562.124-.124.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.07-.138-.62-1.495-.85-2.047-.224-.539-.452-.465-.62-.474l-.529-.01c-.184 0-.483.07-.736.345-.253.276-.966.943-.966 2.3 0 1.356.988 2.666 1.126 2.85.138.184 1.944 2.969 4.71 4.164.658.284 1.172.454 1.572.581.66.21 1.26.18 1.734.11.53-.079 1.636-.668 1.866-1.312.23-.644.23-1.196.16-1.312-.069-.115-.253-.184-.529-.322z"/></svg>
                WhatsApp ile İletişime Geç
              </a>
              
              <a href="tel:+905336075309" className="btn btn-outline">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Hemen Arayın
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              {heroImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
                >
                  <img src={img.src} alt={img.alt} className="hero-img" loading={idx === 0 ? "eager" : "lazy"} decoding="async" width="480" height="540" />
                </div>
              ))}

              {heroImages.length > 1 && (
                <>
                  <button className="hero-slider-btn prev" onClick={handlePrevSlide} aria-label="Önceki Fotoğraf">‹</button>
                  <button className="hero-slider-btn next" onClick={handleNextSlide} aria-label="Sonraki Fotoğraf">›</button>

                  <div className="hero-slider-dots">
                    {heroImages.map((_, idx) => (
                      <button 
                        key={idx} 
                        className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Slayt ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="floating-experience-card glass-card">
                <div className="floating-icon">🎓</div>
                <div className="floating-text">
                  <div className="floating-name">DKT Sultan Teyfur</div>
                  <p>Dil ve Konuşma Terapisti</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
