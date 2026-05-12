/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack';
import ProjectShowcase from './components/ProjectShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-brand-bg text-white selection:bg-brand-accent selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <HeroSection />
      
      <div className="relative z-10">
        <TechStack />
        <ProjectShowcase />
        <ExperienceTimeline />
        <ContactSection />
      </div>
    </main>
  );
}

