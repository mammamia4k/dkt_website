import React from 'react';
import aboutPhoto from '../assets/about_photo.jpg';

const workAreas = [
  'Gecikmiş dil ve konuşma',
  'Gelişimsel dil bozuklukları',
  'Artikülasyon bozuklukları',
  'Fonolojik bozukluklar',
  'Kekemelik',
  'Hızlı bozuk konuşma',
  'Dudak damak yarıkları',
  'Otizm',
  'Down sendromu',
  'Ses bozuklukları',
  'Yutma bozuklukları',
  'Dizartri ve apraksi',
  'Zihinsel engel',
  'Beslenme sorunları'
];

export default function AboutSection() {
  return (
    <section className="about-bio-section" id="hakkimda">
      <div className="container">
        <div className="about-bio-grid">
          
          {/* Image & Card Column */}
          <div className="about-bio-image-wrapper">
            <div className="about-bio-card glass-card">
              <div className="about-bio-img-box">
                <img src={aboutPhoto} alt="DKT Sultan Teyfur" className="about-bio-img" />
              </div>
              <div className="about-bio-badge">
                <div className="bio-badge-icon">🎓</div>
                <div className="bio-badge-text">
                  <h4>Biruni Üniversitesi</h4>
                  <p>Dil ve Konuşma Terapisi - Onur Mezunu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="about-bio-content">
            <span className="section-badge">Hakkımda</span>
            <h2 className="section-title">DKT Sultan Teyfur</h2>
            
            <div className="bio-paragraphs">
              <p>
                Merhaba ben Sultan, tam burslu girdiğim Biruni Üniversitesi Dil ve Konuşma Terapisi Bölümünden <strong>onur öğrencisi</strong> olarak mezun oldum.
              </p>
              <p>
                2020-2023 yılları arasında anaokulu, klinik ve özel eğitim rehabilitasyon merkezlerinde, son yılımda Stajyer Dil ve Konuşma Terapisti olarak Biruni Üniversitesi Dil ve Konuşma Terapisi Uygulama Kliniklerinde uygulama stajımı tamamladım.
              </p>
              <p>
                Klinik gözlem ve uygulama stajlarımın yanı sıra mesleki gelişimim adına çeşitli kurs, seminer ve kongrelere katılım sağladım. Şu anda da çeşitli eğitimlere katılarak gelişimimi sürdürmekteyim. Bebeklik döneminden yaşlılık dönemine kadar tüm yaş gruplarında terapi vermekteyim.
              </p>
            </div>

            <div className="work-areas-container">
              <h3 className="work-areas-title">
                <span className="title-icon">✨</span> ÇALIŞMA ALANLARI
              </h3>
              <div className="work-areas-grid">
                {workAreas.map((area, index) => (
                  <div key={index} className="work-area-chip">
                    <span className="chip-icon">✓</span>
                    <span className="chip-text">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
