import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GalleryAbout from './components/GalleryAbout';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState({ visible: false, message: '' });

  const triggerToast = (msg) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 4000);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <GalleryAbout />
        <ContactSection triggerToast={triggerToast} />
      </main>
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}
