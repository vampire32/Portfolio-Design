import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiMysql, SiLaravel, SiPhp, 
  SiTailwindcss, SiJavascript, SiTypescript, SiWordpress
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB", level: 95 },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 90 },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E", level: 95 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 95 },
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 90 },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF", level: 90 },
      { name: "PHP", icon: SiPhp, color: "#777BB4", level: 85 },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", level: 80 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85 },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 90 },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-display font-semibold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span>
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div key={sIdx} variants={itemVariants} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon style={{ color: skill.color }} className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {['REST APIs', 'GraphQL', 'Git/GitHub', 'Docker', 'AWS', 'Vercel', 'Postman', 'WordPress'].map((tool, i) => (
              <span key={i} className="px-6 py-3 rounded-full glass border-white/5 text-sm font-medium text-slate-300 hover:text-primary hover:border-primary/30 transition-all cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
