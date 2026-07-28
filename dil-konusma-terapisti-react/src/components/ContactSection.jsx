import React, { useState } from 'react';

export default function ContactSection({ triggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: '',
    message: ''
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      triggerToast('Telefon numarası panoya kopyalandı!');
    }).catch(() => {
      triggerToast('Kopyalama gerçekleştirilemedi.');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.topic) return;

    triggerToast(`Teşekkürler Sayın ${formData.name}! Talebiniz alındı. En kısa sürede sizinle iletişime geçilecektir.`);
    setFormData({ name: '', phone: '', topic: '', message: '' });
  };

  return (
    <section className="contact-section" id="iletisim">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-badge">Bizimle İletişime Geçin</span>
          <h2 className="section-title">İletişim & Randevu Bilgileri</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Sorularınız, detaylı bilgi veya randevu talepleriniz için aşağıdaki iletişim kanallarından bize doğrudan ulaşabilirsiniz.
          </p>
        </div>

        <div className="contact-layout">
          
          <div className="contact-cards-container">
            
            {/* Telefon Kartı */}
            <div className="contact-info-card">
              <div className="contact-card-icon icon-phone">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
              </div>
              <div className="contact-card-details">
                <h3>Telefon / Randevu Hattı</h3>
                <a href="tel:+905336075309">+90 533 607 53 09</a>
              </div>
              <div className="contact-card-action">
                <button className="btn btn-outline btn-sm" onClick={() => handleCopy('+90 533 607 53 09')}>Kopyala</button>
              </div>
            </div>

            {/* WhatsApp Kartı */}
            <div className="contact-info-card">
              <div className="contact-card-icon icon-whatsapp">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 1a11.011 11.011 0 0 0-9.52 16.545L1 23l5.602-1.465A10.985 10.985 0 0 0 12.031 23c6.074 0 11.012-4.938 11.012-11S18.105 1 12.031 1zm0 20.143c-1.802 0-3.56-.474-5.1-1.37l-.366-.214-3.792.991 1.01-3.694-.236-.376A9.143 9.143 0 1 1 12.03 21.143zm5.024-6.84c-.276-.138-1.636-.807-1.888-.9-.252-.092-.436-.138-.62.138-.184.276-.713.9-.874 1.084-.16.184-.322.207-.598.07-.276-.138-1.166-.43-2.222-1.37-.822-.733-1.377-1.638-1.538-1.915-.16-.276-.017-.425.12-.562.124-.124.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.07-.138-.62-1.495-.85-2.047-.224-.539-.452-.465-.62-.474l-.529-.01c-.184 0-.483.07-.736.345-.253.276-.966.943-.966 2.3 0 1.356.988 2.666 1.126 2.85.138.184 1.944 2.969 4.71 4.164.658.284 1.172.454 1.572.581.66.21 1.26.18 1.734.11.53-.079 1.636-.668 1.866-1.312.23-.644.23-1.196.16-1.312-.069-.115-.253-.184-.529-.322z"/></svg>
              </div>
              <div className="contact-card-details">
                <h3>Hızlı WhatsApp Mesajı</h3>
                <p>Anında Yanıt İletişimi</p>
              </div>
              <div className="contact-card-action">
                <a href="https://wa.me/905336075309" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">Sohbet Başlat</a>
              </div>
            </div>

            {/* Instagram Kartı */}
            <div className="contact-info-card">
              <div className="contact-card-icon icon-instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div className="contact-card-details">
                <h3>Instagram</h3>
                <p>@dkt.sultanteyfur</p>
              </div>
              <div className="contact-card-action">
                <a href="https://www.instagram.com/dkt.sultanteyfur/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Takip Et</a>
              </div>
            </div>

            {/* Adres Kartı */}
            <div className="contact-info-card">
              <div className="contact-card-icon icon-location">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div className="contact-card-details">
                <h3>Klinik Adresi</h3>
                <p>Yeşil mahalle 1852. sokak no:5 daire4, 09800 Nazilli/Aydın</p>
              </div>
            </div>

            {/* Çalışma SaatleriKartı */}
            <div className="contact-info-card">
              <div className="contact-card-icon icon-clock">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="contact-card-details">
                <h3>Çalışma Saatleri</h3>
                <p>Pzt - Cmt: 09:00 - 18:00 (Pazar Kapalı)</p>
              </div>
            </div>

          </div>

          {/* Form Kartı */}
          <div className="contact-form-card">
            <h3>Bize Mesaj Gönderin</h3>
            <p>Formu doldurarak ön değerlendirme talebinde bulunabilirsiniz.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-control" 
                  placeholder="Örn: Ahmet Yılmaz" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon Numaranız</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="form-control" 
                  placeholder="05XX XXX XX XX" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="topic">Terapi / Danışmanlık Konusu</label>
                <select 
                  id="topic" 
                  className="form-control" 
                  value={formData.topic} 
                  onChange={(e) => setFormData({...formData, topic: e.target.value})} 
                  required
                >
                  <option value="" disabled>Lütfen bir konu seçiniz...</option>
                  <option value="gelisimsel-dil">Gelişimsel Dil Gecikmesi</option>
                  <option value="artikulasyon">Artikülasyon / Konuşma Sesi Bozukluğu</option>
                  <option value="kekemelik">Kekemelik & Hızlı Bozuk Konuşma</option>
                  <option value="ses-terapisi">Ses Terapisi</option>
                  <option value="diğer">Diğer Danışmanlık Konusu</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız (Opsiyonel)</label>
                <textarea 
                  id="message" 
                  className="form-control" 
                  placeholder="Kısaca durumunuzdan bahsedebilirsiniz..." 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                Mesajı Gönder
              </button>
            </form>
          </div>

        </div>

        {/* Harita */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d196.7072044505684!2d28.33551353485277!3d37.923064588906705!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1785274269357!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="DKT Sultan Teyfur Klinik Konumu - Nazilli, Aydın"
          />
        </div>

      </div>
    </section>
  );
}
