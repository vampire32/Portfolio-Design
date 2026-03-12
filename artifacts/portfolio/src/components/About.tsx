import { motion } from "framer-motion";
import { Code2, Terminal, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border-white/10 p-2">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-800 relative">
                <img 
                  src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                  alt="Abdul Moiz" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-white">
              Designing scalable solutions and engaging digital experiences.
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a passionate <strong className="text-white">Senior Full Stack Software Engineer</strong> with a Bachelor's Degree in Computer Science and over 4 years of hands-on experience in the tech industry.
              </p>
              <p>
                My expertise spans across both frontend and backend development, allowing me to build comprehensive, end-to-end solutions. I thrive in architecting robust systems using modern stacks like MERN and LAMP, and I'm deeply invested in writing clean, maintainable code.
              </p>
              <p>
                Whether it's crafting a pixel-perfect UI or designing a complex API microservice architecture, I bring dedication and technical excellence to every project I touch.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {[
                { icon: Terminal, title: "Clean Code", desc: "Maintainable & DRY" },
                { icon: Cpu, title: "Architecture", desc: "Scalable Systems" },
                { icon: Code2, title: "Modern Stack", desc: "React & Node.js" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
