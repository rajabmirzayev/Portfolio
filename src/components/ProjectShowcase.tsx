import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
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
    version: 'VER_2.4',
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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="works" className="relative bg-brand-bg">
      <div ref={targetRef} className="relative h-[250vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-white/5">
          <div className="px-8 md:px-16 mb-20 max-w-7xl">
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

          <motion.div style={{ x }} className="flex w-max gap-8 px-6 md:px-12 cursor-grab active:cursor-grabbing">
            {backendProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "circOut" }}
                className={`min-w-[350px] md:min-w-[800px] h-[540px] bento-card flex flex-col group p-0 relative overflow-hidden transition-all duration-700 hover:-translate-y-4 ${project.highlight ? 'border-brand-accent/50 shadow-[0_0_30px_rgba(var(--brand-accent),0.15)] bg-brand-accent/5' : ''}`}
              >
                {project.highlight && (
                   <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-50 mix-blend-overlay pointer-events-none" />
                )}
                <div className="grid md:grid-cols-12 h-full relative z-10">
                  <div className="md:col-span-1 border-r border-white/5 flex md:flex-col items-center justify-center p-4 gap-8">
                    <span className="text-[10px] font-mono tracking-widest opacity-20 -rotate-90 md:mb-8">SEC_{project.id}</span>
                    <div className="w-[1px] md:h-12 bg-white/10" />
                    <span className={`${project.highlight ? 'text-brand-accent font-bold' : 'text-brand-text'} font-mono text-[10px] rotate-90`}>
                      {project.version}
                    </span>
                  </div>

                  <div className="md:col-span-11 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-2 h-2 rounded-full ${project.highlight ? 'bg-brand-accent shadow-[0_0_8px_currentColor]' : 'bg-brand-accent'} animate-pulse`} />
                          <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase">{project.category}</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-8 group-hover:translate-x-4 transition-transform duration-700">{project.title}</h3>
                      </div>
                      {project.image && (
                        <div className="w-32 h-24 rounded-2xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 transition-opacity duration-700 bg-black">
                           <img 
                             src={`https://images.unsplash.com/photo-${project.image}?q=80&w=800&auto=format&fit=crop`}
                             alt={project.title}
                             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                             referrerPolicy="no-referrer"
                           />
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-brand-gray text-sm md:text-lg leading-relaxed mb-10 max-w-xl">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-10">
                        {project.tags.map(tag => (
                          <span key={tag} className={`text-[9px] font-bold px-4 py-2 border rounded-full tracking-widest uppercase ${project.highlight ? 'border-brand-accent/30 bg-brand-accent/10 text-brand-accent' : 'border-white/5 bg-white/[0.02]'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {(project.github && project.github !== '#' || project.link && project.link !== '#') && (
                        <div className="flex gap-8 border-t border-white/5 pt-8">
                          {project.github && project.github !== '#' && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-3 text-[11px] font-bold tracking-widest hover:text-brand-accent transition-colors">
                              <Github size={16} /> 
                              <span className="relative overflow-hidden">
                                <span className="block group-hover/link:-translate-y-full transition-transform">SOURCE_CODE</span>
                                <span className="absolute top-0 left-0 block translate-y-full group-hover/link:translate-y-0 transition-transform text-brand-accent">EXPLORE_GIT</span>
                              </span>
                            </a>
                          )}
                          {project.link && project.link !== '#' && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-3 text-[11px] font-bold tracking-widest hover:text-brand-accent transition-colors">
                              <ExternalLink size={16} /> 
                              <span className="relative overflow-hidden">
                                <span className="block group-hover/link:-translate-y-full transition-transform">SYSTEM_DEPLOY</span>
                                <span className="absolute top-0 left-0 block translate-y-full group-hover/link:translate-y-0 transition-transform text-brand-accent">ACCESS_LIVE</span>
                              </span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute bottom-16 left-8 md:left-16 flex items-center gap-6 text-brand-gray/30">
            <div className="flex gap-1">
              {[1,2].map(i => <div key={i} className="w-1 h-1 rounded-full bg-brand-accent animate-pulse" />)}
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Horizontal System Pulse</span>
            <ArrowRight size={14} />
          </div>
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
