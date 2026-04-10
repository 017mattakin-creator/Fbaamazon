/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AdminFooter from './components/AdminFooter';

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <FAQ />
      <Pricing />
      <Footer onToggleAdmin={() => setShowAdmin(!showAdmin)} />
      <AdminFooter isVisible={showAdmin} />
    </div>
  );
}
