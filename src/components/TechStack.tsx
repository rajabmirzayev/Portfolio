import { motion } from 'motion/react';
import { Database, Server, Layers, Layout, GitBranch } from 'lucide-react';

const skills = [
  { 
    name: 'Data & Persistence', 
    icon: <Database className="w-5 h-5 text-brand-accent" />, 
    details: <>PostgreSQL, MySQL, <strong>JDBC, Liquibase</strong>.</>,
    className: 'md:col-span-4'
  },
  { 
    name: 'Distributed Systems', 
    icon: <Server className="w-5 h-5 text-brand-accent" />, 
    details: <>Microservices, FeignClient, <strong>Apache Kafka, Redis</strong>.</>,
    className: 'md:col-span-6'
  },
  { 
    name: 'API & Real-time', 
    icon: <Layers className="w-5 h-5 text-brand-accent" />, 
    details: <><strong>REST API, WebSockets</strong>, MapStruct.</>,
    className: 'md:col-span-6'
  },
  { 
    name: 'UI Fundamentals', 
    icon: <Layout className="w-5 h-5 text-brand-accent" />, 
    details: <><strong>React</strong>, JS, HTML/CSS. <br/><span className="italic block mt-3 opacity-50 text-[13px]">Capable of building full-stack prototypes.</span></>,
    className: 'md:col-span-6'
  },
  { 
    name: 'Workflow', 
    icon: <GitBranch className="w-5 h-5 text-brand-accent" />, 
    details: <><strong>Git</strong>, <strong>RBAC</strong> (Role-Based Access Control).</>,
    className: 'md:col-span-6'
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-brand-accent mb-4 uppercase opacity-80">Tech Stack</span>
        <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-[-0.04em]">Technical Expertise</h2>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-12 gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1
            }
          }
        }}
      >
        {/* Header Block / Card 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring", bounce: 0.4 } }
          }}
          className="md:col-span-8 bento-card flex flex-col justify-end min-h-[340px] hover:border-brand-accent/30 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-radial-gradient from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.3em] text-brand-accent mb-6 uppercase opacity-80 block">01 // Backend Core</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-[-0.05em] leading-[1.1] mb-6">
              Java, <strong>Spring Boot</strong><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/30 text-2xl md:text-3xl lg:text-4xl">(MVC, Security, Data JPA)</span>
            </h2>
            <p className="text-brand-gray text-[14px] md:text-[15px] font-medium italic border-l-2 border-brand-accent/50 pl-4 py-1 inline-block">
              "Robust and scalable server-side logic."
            </p>
          </div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-accent/20 transition-all duration-700 delay-100" />
        </motion.div>

        {/* Dynamic Skill Blocks */}
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring", bounce: 0.4 } }
            }}
            className={`${skill.className} bento-card group flex flex-col justify-between hover:border-brand-accent/30 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden`}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8 group-hover:bg-brand-accent/20 group-hover:border-brand-accent/40 transition-all duration-500">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-brand-text">{skill.name}</h3>
                <p className="text-brand-gray text-[14px] leading-relaxed">
                  {skill.details}
                </p>
              </div>
              <div className="mt-8 pt-8 flex items-center justify-between border-t border-white/[0.02] mt-auto">
                <span className="text-[10px] font-mono tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">
                  EXP_0{i + 2}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-radial-gradient from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
