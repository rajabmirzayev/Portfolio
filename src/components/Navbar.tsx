import { motion } from 'motion/react';
import { Menu, X, Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INDEX', href: '#' },
    { name: 'STACK', href: 'stack' },
    { name: 'WORKS', href: 'works' },
    { name: 'EXP', href: 'experience' },
    { name: 'CONTACT', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    
    if (href === '#') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(href);
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { duration: 1.5, offset: -80 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 px-8 py-10 md:px-16 flex justify-between items-center transition-all duration-500",
        scrolled && "py-6 bg-black/60 backdrop-blur-xl border-b border-white/5"
      )}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display text-xl tracking-[-0.04em] font-extrabold flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Monitor className="w-5 h-5 text-brand-accent group-hover:rotate-12 transition-transform duration-500" />
          <span>Rajab Mirzayev</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href === '#' ? '#' : `#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-all hover:text-brand-accent font-mono"
            >
              {item.name}
            </motion.a>
          ))}
          <div className="ml-4 w-[1px] h-4 bg-white/10" />
          <a href="mailto:me@rajabmirzayev.dev" className="text-[11px] font-bold tracking-widest text-brand-accent border border-brand-accent/30 px-6 py-2.5 rounded-full hover:bg-brand-accent hover:text-white transition-all font-mono">
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? '0%' : '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "fixed inset-0 bg-brand-bg md:hidden flex flex-col items-center justify-center gap-6 z-[100]",
          !isOpen && "pointer-events-none"
        )}
      >
        <button 
          className="absolute top-10 right-8 text-brand-gray hover:text-white z-[101]"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href === '#' ? '#' : `#${item.href}`}
            onClick={(e) => handleNavClick(e, item.href)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: i * 0.1 }}
            className="font-display text-5xl font-extrabold tracking-tight hover:text-brand-accent transition-colors"
          >
            {item.name}
          </motion.a>
        ))}
        <div className="w-12 h-[1px] bg-white/10 my-8" />
        <a href="mailto:me@rajabmirzayev.dev" className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase">
          Get in touch
        </a>
      </motion.div>
    </>
  );
}
