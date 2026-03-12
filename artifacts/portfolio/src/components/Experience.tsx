import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Senior Full Stack Software Engineer",
    company: "Tech Agency / Freelance",
    date: "2020 - Present (4 Years)",
    description: "Leading end-to-end application development for diverse clients. Architecting robust backend systems with Node.js and Laravel. Creating highly interactive frontends using React and Next.js. Overseeing database design, API integrations, and deployment pipelines.",
    icon: Briefcase
  },
  {
    type: "education",
    title: "Bachelor's Degree in Computer Science",
    company: "University",
    date: "Graduated 2020",
    description: "Core focus on Software Engineering, Data Structures, Algorithms, and Web Technologies. Completed capstone project focused on scalable web architecture.",
    icon: GraduationCap
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Journey & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:space-y-12">
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-0 mb-12 md:mb-0"
            >
              <div className="md:grid md:grid-cols-5 items-start gap-8">
                {/* Timeline Node */}
                <div className="absolute left-[-41px] md:left-auto md:relative md:col-span-1 flex flex-col items-center justify-center pt-1 md:pt-0">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center shadow-xl relative z-10 md:mx-auto">
                    <item.icon className={`w-5 h-5 ${item.type === 'work' ? 'text-primary' : 'text-cyan-400'}`} />
                  </div>
                  {/* Line connection for desktop */}
                  <div className="hidden md:block absolute right-0 top-6 w-[50%] h-0.5 bg-slate-800 z-0"></div>
                </div>

                {/* Content Card */}
                <div className="md:col-span-4 glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-primary text-sm font-mono mb-4 border border-white/10">
                    {item.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-lg text-slate-400 font-medium mb-4">{item.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
