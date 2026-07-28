import React, { useState, useEffect } from 'react';
import clinic1 from '../assets/clinic1.jpg';
import clinic2 from '../assets/clinic2.jpg';
import clinic3 from '../assets/clinic3.jpg';

const clinicImages = [
  {
    src: clinic1,
    alt: 'Duyusal Terapi ve Oyun Alanı',
    caption: 'Duyusal Terapi & Oyun Alanı'
  },
  {
    src: clinic2,
    alt: 'Bireysel Terapi ve Görüşme Odası',
    caption: 'Bireysel Terapi & Görüşme Odası'
  },
  {
    src: clinic3,
    alt: 'Gelişim ve Hareket Oyun Alanı',
    caption: 'Gelişim & Hareket Alanı'
  }
];

export default function GalleryAbout() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? clinicImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="gallery-section" id="klinik">
      <div className="container">
        <div className="gallery-grid">
          
          <div 
            className="gallery-slider-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="gallery-img-box">
              {clinicImages.map((img, index) => (
                <div
                  key={index}
                  className={`slider-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" decoding="async" width="600" height="440" />
                  <div className="slide-badge">{img.caption}</div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                className="slider-btn prev-btn" 
                onClick={handlePrev}
                aria-label="Önceki Fotoğraf"
              >
                ‹
              </button>
              <button 
                className="slider-btn next-btn" 
                onClick={handleNext}
                aria-label="Sonraki Fotoğraf"
              >
                ›
              </button>

              {/* Counter Indicator */}
              <div className="slider-counter">
                {currentIndex + 1} / {clinicImages.length}
              </div>

              {/* Indicator Dots */}
              <div className="slider-dots">
                {clinicImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Fotoğraf ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="gallery-content">
            <span className="section-badge">Terapi Yaklaşımı</span>
            <h2 className="section-title">Bilimsel, Bireysel ve Aile Odaklı Terapi</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Her danışanın ihtiyaçları birbirinden farklıdır. Bu nedenle terapi sürecini bilimsel değerlendirmeler doğrultusunda bireyselleştiriyor, aileyi sürecin aktif bir parçası olarak görüyorum. Amacım; güvenli, destekleyici ve iş birliğine dayalı bir ortamda kalıcı gelişimi birlikte inşa etmek.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h3>Sürekli Mesleki Gelişim</h3>
                  <p>Mesleki gelişimin hiç bitmediğine inanıyor; eğitimler, seminerler ve güncel yaklaşımlarla kendimi sürekli geliştirmeye devam ediyorum.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h3>Aile ile İş Birliği</h3>
                  <p>Aileyi terapi sürecinin önemli bir parçası olarak görüyor, seans dışında da gelişimi destekleyecek rehberlik sunuyorum.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h3>Bilimsel Yaklaşım</h3>
                  <p>Kanıta dayalı ve güncel terapi yöntemleriyle her danışana özel çözümler geliştiriyorum.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h3>Bireyselleştirilmiş Terapi</h3>
                  <p>Her danışanın güçlü yönlerine ve ihtiyaçlarına uygun terapi planı oluşturuyorum.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
