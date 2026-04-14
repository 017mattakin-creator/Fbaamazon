/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import ClientStories from './components/ClientStories';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AdminFooter from './components/AdminFooter';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // রাইট-ক্লিক বন্ধ করা
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // ইমেজ ড্র্যাগ করা বন্ধ করা
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-slate-50 text-slate-800">
        <Navbar />
        <Hero />
        <Features />
        <Workflow />
        <Testimonials />
        <ClientStories />
        <FAQ />
        <Pricing />
        <Footer onToggleAdmin={() => setShowAdmin(!showAdmin)} />
        <AdminFooter isVisible={showAdmin} />
      </div>
    </LanguageProvider>
  );
}
