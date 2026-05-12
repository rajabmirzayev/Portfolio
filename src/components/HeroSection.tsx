import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-black"
    >
      {/* Background Image Layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop"
          alt="Technical Background"
          className="w-full h-[110%] object-cover opacity-60 brightness-[0.7] contrast-125 scale-110 grayscale-[30%]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend image into the page */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/30 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-24 md:pb-32"
      >
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-brand-accent" />
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
                Java Backend Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
              className="text-[14vw] md:text-[10vw] font-display font-extrabold leading-[0.85] tracking-[-0.04em] mb-12"
            >
              Building<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">The Logic.</span>
            </motion.h1>
          </div>

          <div className="md:col-span-4 md:mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="glass p-8 rounded-3xl"
            >
              <p className="text-sm text-brand-gray leading-relaxed mb-6">
                Back-end Engineer | Scalable Systems & API Development
              </p>
              <p className="text-sm text-brand-gray leading-relaxed mb-6">
                I am a dedicated Back-end Developer with a passion for building robust, scalable, and high-performance server-side applications. My focus is on writing clean, maintainable code and designing efficient architectures that solve complex business problems.
              </p>
              <div className="flex flex-col gap-4 text-xs font-bold">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="opacity-40 uppercase">Based In</span>
                  <span>Baku, Azerbaijan</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-40 uppercase">Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Available for Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Backdrop elements */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-accent/5 to-transparent pointer-events-none" />

      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[7px] font-mono tracking-[0.6em] rotate-90 mb-6 opacity-30">SCROLL</span>
        <div className="w-[1px] h-16 bg-white/10" />
      </motion.div>
    </section>
  );
}
