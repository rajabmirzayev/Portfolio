import { motion } from 'motion/react';
import { Terminal, BookOpen, GraduationCap, Code2 } from 'lucide-react';

const experiences = [
  {
    year: '2026 - PRESENT',
    company: 'Self-Project Development',
    role: 'Java Backend Developer (Junior)',
    desc: 'Focus on building enterprise-grade backend systems. Actively developing microservices-based projects to master technologies like Spring Boot, Kafka, and Redis',
    icon: <Terminal className="w-6 h-6 text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500" />
  },
  {
    year: '2025 - 2026',
    company: 'ITBrains Academy',
    role: 'Java Backend Development Course',
    desc: 'Completed an intensive program focusing on Java ecosystem, Spring Framework, and backend architecture. Gained hands-on experience in building scalable RESTful services.',
    icon: <BookOpen className="w-6 h-6 text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500" />
  },
  {
    year: '2023 - 2027',
    company: 'ADNSU',
    role: 'Bachelor in Computer Engineering',
    desc: 'Gaining a solid foundation in software engineering, algorithms, and system design. Applying academic knowledge to practical backend architecture.',
    icon: <GraduationCap className="w-6 h-6 text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500" />
  },
  {
    year: '2021 - 2022',
    company: 'Frontend Foundations',
    role: 'Self-Taught Student',
    desc: 'First steps into the coding world. Learned HTML, CSS, and JavaScript by building small-scale web projects. This period sparked my deep passion for software development and logic-driven engineering.',
    icon: <Code2 className="w-6 h-6 text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500" />
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-48 px-6 md:px-12 bg-brand-bg max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3 sticky top-32 h-fit"
        >
          <span className="text-xs font-semibold tracking-wide text-brand-accent mb-4 block uppercase opacity-80">03 // Background</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1]">
            Growth <br />Path
          </h2>
        </motion.div>

        <div className="md:w-2/3 border-t border-white/5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "circOut" }}
              className="group relative py-16 border-b border-white/5 flex flex-col md:flex-row justify-between gap-8 md:items-start hover:bg-white/[0.01] transition-colors duration-500 rounded-xl px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <div className="md:w-1/4 flex flex-col gap-4">
                {exp.icon}
                <span className="text-2xl font-display font-black text-brand-accent/20 group-hover:text-brand-accent transition-colors duration-500">{exp.year}</span>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-display font-bold mb-2 group-hover:text-brand-accent transition-colors duration-500">{exp.company}</h3>
                <p className="text-xs font-bold text-brand-gray/40 mb-8 uppercase tracking-[0.2em]">{exp.role}</p>
                <p className="text-[15px] text-brand-gray leading-relaxed max-w-2xl">
                  {exp.desc}
                </p>
              </div>

              {/* Hover line indicator */}
              <div className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
