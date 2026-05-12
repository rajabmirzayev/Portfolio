import { motion, useSpring, useMotionValue } from 'motion/react';
import { Mail } from 'lucide-react';
import { useRef, MouseEvent } from 'react';

export default function ContactSection() {
  const buttonRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rectRef = useRef<DOMRect | null>(null);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseEnter() {
    if (buttonRef.current) {
      rectRef.current = buttonRef.current.getBoundingClientRect();
    }
  }

  function handleMouseMove(e: MouseEvent) {
    if (!rectRef.current) {
      rectRef.current = buttonRef.current?.getBoundingClientRect() || null;
    }
    if (!rectRef.current) return;

    const centerX = rectRef.current.left + rectRef.current.width / 2;
    const centerY = rectRef.current.top + rectRef.current.height / 2;
    
    // Smooth magnetic pull
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  }

  return (
    <section id="contact" className="py-64 px-6 md:px-12 bg-[#030303] flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="max-w-4xl"
      >
        <span className="text-xs font-bold tracking-widest text-brand-accent mb-12 block uppercase opacity-80">04 // Conclusion</span>
        <h2 className="text-[10vw] md:text-[6vw] font-display font-extrabold leading-[1] tracking-[-0.05em] mb-24">
          Open for<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent/40">Collaborations.</span>
        </h2>

        <div 
          className="group relative inline-block cursor-none"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={buttonRef}
            style={{ x: springX, y: springY, transformTranslateZ: 0 }}
            className="relative z-10"
          >
            <a 
              href="mailto:me@rajabmirzayev.dev"
              className="flex flex-col items-center gap-6"
            >
              <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-700">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl md:text-5xl font-display font-bold tracking-tight">me@rajabmirzayev.dev</span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="mt-48 flex flex-col items-center justify-center gap-8 border-t border-white/5 pt-12 text-[11px] font-bold tracking-[0.2em] uppercase w-full font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-brand-gray">
            <a href="https://www.linkedin.com/in/rajabmirzayev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-accent transition-all duration-300">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/rajabmirzayev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-accent transition-all duration-300">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://stackoverflow.com/users/32352537/rajab-mirzayev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-accent transition-all duration-300">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] fill-current"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 4.544 6.115 1.718-1.276-4.542-6.116zm-3.053 3.652l-1.397 1.624 5.922 5.096 1.396-1.623-5.921-5.097zm-2.476 4.384l-.946 1.932 7.02 3.447.946-1.932-7.02-3.447zm-1.353 5.419l-.364 2.115 7.636 1.31.364-2.115-7.636-1.31zm-1.026 5.867v-5.63h-2.146v7.776h11.968v-7.776h-2.146v5.63h-7.676z"/></svg>
              Stack Overflow
            </a>
          </div>
          <span className="text-brand-gray/40 text-center">© 2026 RAJAB MIRZAYEV — BAKU, AZE</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
