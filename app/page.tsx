'use client';

import dynamic from 'next/dynamic';

// Import FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import AnimatedBackground from '@/components/layout/AnimatedBackground';
import AnimatedCursor from '@/components/layout/AnimatedCursor';
import Footer from '@/components/layout/Footer';
import LoadingAnimation from '@/components/layout/LoadingAnimation';
import Navbar from '@/components/layout/Navbar';
import PageTransition from '@/components/layout/PageTransition';
import ScrollProgress from '@/components/layout/ScrollProgress';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ThemeSwitcher from '@/components/layout/ThemeSwitcher';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';

import FaqStructuredData from './components/FaqStructuredData';
import StructuredData from './components/StructuredData';

// Dynamic imports for better page loading performance
const Services = dynamic(() => import('@/components/sections/Services'), {
  ssr: true,
});
const Pricing = dynamic(() => import('@/components/sections/Pricing'), {
  ssr: true,
});
const Booking = dynamic(() => import('@/components/sections/Booking'), {
  ssr: true,
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: true });
const Blog = dynamic(() => import('@/components/sections/Blog'), { ssr: true });
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: true,
});

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <StructuredData />
      <FaqStructuredData />
      <LoadingAnimation duration={2500} />
      <AnimatedCursor />
      <AnimatedBackground particleCount={15} />
      <ThemeSwitcher />
      <ScrollToTop />
      <PageTransition>
        <ScrollProgress />
        <main className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Gallery />
          <Booking />
          <Testimonials />
          <Blog />
          <Contact />
          <Footer />
        </main>
      </PageTransition>
    </>
  );
}
