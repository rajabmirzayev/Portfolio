import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight, Layout, Monitor } from 'lucide-react';

const backendProjects = [
  {
    id: '01',
    title: 'FOXWEAR',
    category: 'MICROSERVICES ECOSYSTEM',
    description: 'My flagship project: a robust microservices architecture featuring seamless service-to-service communication via FeignClient, service discovery, and reliable database versioning with Liquibase.',
    tags: ['MICROSERVICES', 'SPRING BOOT', 'LIQUIBASE', 'FEIGNCLIENT'],
    link: '#',
    github: 'https://github.com/rajabmirzayev/FoxWearBackend',
    highlight: true,
    version: 'VER_1.0',
    image: '1550751827-4bd374c3f58b',
  },
  {
    id: '02',
    title: 'RGB BANK',
    category: 'REST API',
    description: 'Secure banking RESTful API with complex transaction logic. Focused on efficient CRUD operations, resilient database design, and robust authentication with Spring Security.',
    tags: ['REST API', 'SPRING SECURITY', 'JPA', 'POSTGRESQL'],
    link: '#',
    github: 'https://github.com/rajabmirzayev/BankRgbBackend',
    version: 'VER_1.0',
    image: '',
  }
];

const miniProjects = [
  {
    id: '03',
    title: 'RGB CALC',
    category: 'INTERACTIVE UI',
    description: 'Dynamic calculator app showcasing precise logic and user interactions.',
    tags: ['VANILLA JS', 'DOM MANIPULATION', 'UI/UX'],
    link: 'https://calculatorrgb.netlify.app',
    github: 'https://github.com/rajabmirzayev/Calculator'
  },
  {
    id: '04',
    title: 'HEADPHONE',
    category: 'PROTOTYPE',
    description: 'Modern, pixel-perfect landing page focused on visual fidelity and responsiveness.',
    tags: ['HTML5', 'CSS3/SCSS', 'RESPONSIVE DESIGN'],
    link: 'https://headphone-rgb.netlify.app',
    github: 'https://github.com/rajabmirzayev/Headphone'
  }
];

export default function ProjectShowcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section id="works" className="relative bg-brand-bg z-10">
      <div ref={targetRef} className={isMobile ? "relative py-24 border-t border-white/5" : "relative h-[250vh] md:mb-48"}>
        <div className={isMobile ? "flex flex-col overflow-hidden" : "sticky top-0 h-screen min-h-[700px] flex flex-col justify-center overflow-hidden border-t border-white/5"}>
          <div className="px-8 md:px-16 mb-12 md:mb-20 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs font-semibold tracking-wide text-brand-accent mb-4 block uppercase opacity-80">02 // Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1]">
                Backend <br />Engines
              </h2>
            </motion.div>
          </div>

          <motion.div 
            style={isMobile ? {} : { x }} 
            className={`flex gap-6 md:gap-8 px-6 md:px-12 ${isMobile ? 'w-full overflow-x-auto snap-x snap-mandatory pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'w-max cursor-grab active:cursor-grabbing pb-16'}`}
          >
            {backendProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "circOut" }}
                className={`w-[85vw] md:w-[850px] shrink-0 min-h-[500px] h-auto md:h-[520px] bento-card flex flex-col group p-0 relative overflow-hidden transition-all duration-700 hover:-translate-y-4 ${isMobile ? 'snap-center' : ''} ${project.highlight ? 'border-brand-accent/50 shadow-[0_0_30px_rgba(var(--brand-accent),0.15)] bg-brand-accent/5' : ''}`}
              >
                {project.highlight && (
                   <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-50 mix-blend-overlay pointer-events-none" />
                )}
                <div className="flex flex-col h-full relative z-10 p-6 md:p-12">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6 md:mb-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${project.highlight ? 'bg-brand-accent shadow-[0_0_8px_currentColor]' : 'bg-brand-accent'} animate-pulse`} />
                      <span className="text-[10px] md:text-xs font-bold tracking-widest text-brand-accent uppercase">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest opacity-40">
                      <span>SEC_{project.id}</span>
                      <span className="hidden md:inline-block w-4 h-[1px] bg-white/20" />
                      <span className={project.highlight ? 'text-brand-accent opacity-100' : ''}>{project.version}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-1 h-full overflow-hidden">
                    {/* Text Section */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4 md:mb-6 group-hover:text-brand-accent group-hover:translate-x-2 transition-all duration-500">
                          {project.title}
                        </h3>
                        <p className="text-brand-gray text-sm md:text-base leading-relaxed mb-6 md:mb-8 line-clamp-4 md:line-clamp-none">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map(tag => (
                            <span key={tag} className={`text-[8px] md:text-[9px] font-bold px-3 py-1.5 border rounded-full tracking-wider uppercase ${project.highlight ? 'border-brand-accent/30 bg-brand-accent/10 text-brand-accent' : 'border-white/5 bg-white/[0.02]'}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      {(project.github && project.github !== '#' || project.link && project.link !== '#') && (
                        <div className="flex gap-6 mt-auto">
                          {project.github && project.github !== '#' && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-brand-gray hover:text-white transition-colors">
                              <Github size={14} /> 
                              <span>CODE</span>
                            </a>
                          )}
                          {project.link && project.link !== '#' && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-brand-gray hover:text-white transition-colors">
                              <ExternalLink size={14} /> 
                              <span>LIVE</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Image Section */}
                    {project.image && (
                      <div className="hidden md:block w-full md:w-5/12 h-32 md:h-full rounded-2xl overflow-hidden border border-white/5 opacity-60 group-hover:opacity-100 transition-all duration-700 bg-black relative shrink-0">
                        <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                        <img 
                          src={`https://images.unsplash.com/photo-${project.image}?q=80&w=800&auto=format&fit=crop`}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {isMobile && (
            <div className="flex items-center justify-end gap-3 text-brand-gray/60 px-8 mt-2 mb-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Swipe for more</span>
              <ArrowRight size={14} className="animate-pulse text-brand-accent" />
            </div>
          )}

          {!isMobile && (
            <div className="absolute bottom-12 left-16 flex items-center gap-6 text-brand-gray/30">
              <div className="flex gap-1">
                {[1,2].map(i => <div key={i} className="w-1 h-1 rounded-full bg-brand-accent animate-pulse" />)}
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Horizontal System Pulse</span>
              <ArrowRight size={14} />
            </div>
          )}
        </div>
      </div>

      {/* Mini Projects / Front-end Lab */}
      <div className="w-full bg-brand-bg py-24 md:py-32 px-8 md:px-16 border-t border-white/5 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blend-overlay">
        <div className="absolute inset-0 bg-brand-bg/95 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="w-12 h-[1px] bg-white/20" />
            <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Front-end Lab</h3>
            <span className="text-[10px] font-mono tracking-[0.3em] text-brand-gray uppercase border border-white/10 px-3 py-1 rounded-full">Mini Projects</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {miniProjects.map((project, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "circOut" }}
                key={project.id}
                className="bento-card group flex flex-col justify-between min-h-[300px] hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(74,58,255,0.1)] transition-all duration-700 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-radial-gradient from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/10 transition-all duration-300">
                        {i === 0 ? <Monitor size={18} /> : <Layout size={18} />}
                      </div>
                      <span className="text-[10px] font-mono tracking-widest opacity-20 group-hover:text-brand-accent group-hover:opacity-100 transition-colors">PRJ_{project.id}</span>
                    </div>
                    
                    <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-accent transition-colors">{project.title}</h4>
                    <p className="text-brand-gray text-[14px] leading-relaxed mb-6">{project.description}</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-bold px-3 py-1.5 border border-white/5 bg-white/[0.02] rounded-md tracking-wider uppercase text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(project.github && project.github !== '#' || project.link && project.link !== '#') && (
                      <div className="flex gap-6 border-t border-white/[0.02] pt-6">
                        {project.github && project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-brand-gray hover:text-white transition-colors">
                            <Github size={14} /> 
                            <span>CODE</span>
                          </a>
                        )}
                        {project.link && project.link !== '#' && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-brand-gray hover:text-white transition-colors">
                            <ExternalLink size={14} /> 
                            <span>LIVE</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
