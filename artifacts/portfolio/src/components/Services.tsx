import { motion } from "framer-motion";
import { Monitor, Smartphone, Database, Globe, Layers, Server } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Full Stack Development",
    desc: "End-to-end web application development using MERN and LAMP stacks, delivering robust and scalable solutions."
  },
  {
    icon: Globe,
    title: "Custom Web Apps",
    desc: "Tailor-made web applications designed specifically for your business needs with modern UIs and complex logic."
  },
  {
    icon: Layers,
    title: "WordPress Development",
    desc: "Custom theme and plugin development, headless WordPress architecture, and enterprise-level CMS setups."
  },
  {
    icon: Server,
    title: "API Development",
    desc: "Designing and integrating secure, fast RESTful APIs and microservices for cross-platform communication."
  },
  {
    icon: Database,
    title: "Database Architecture",
    desc: "Structuring and optimizing relational (MySQL) and NoSQL (MongoDB) databases for high performance."
  },
  {
    icon: Smartphone,
    title: "React Native Apps",
    desc: "Building cross-platform mobile applications that share codebase and deliver native-like performance."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">Specialized services to help you build, launch, and scale your digital products.</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl group hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background text-primary transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
