import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real Estate Platform",
    description: "A full-featured real estate listing platform with robust property search, dynamic filters, and interactive map integration.",
    tags: ["MERN Stack", "Google Maps API", "Tailwind", "Redux"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Map-Based Property Data System",
    description: "Interactive property data visualization tool featuring geospatial mapping, heatmaps, and complex data filtering capabilities.",
    tags: ["React.js", "Node.js", "Mapbox GL", "MongoDB"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "API Integration System",
    description: "Multi-service API orchestration layer connecting complex payment gateways, shipping providers, and inventory management systems.",
    tags: ["Node.js", "Express.js", "REST APIs", "Redis"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Enterprise WordPress Suite",
    description: "Fully customized headless WordPress architecture and proprietary plugin suite built for an enterprise media client.",
    tags: ["PHP", "Laravel", "MySQL", "React"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Full Stack MERN Dashboard",
    description: "Comprehensive analytics dashboard with real-time data visualization, WebSocket events, and granular admin role controls.",
    tags: ["MongoDB", "Express", "React", "Chart.js"],
    demo: "#",
    github: "#",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-full flex"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="glass-card relative flex flex-col p-8 rounded-2xl w-full hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <FolderGit2 className="w-8 h-8" />
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <a href={project.github} className="hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-mono text-cyan-300 bg-cyan-950/30 px-2 py-1 rounded-md border border-cyan-900/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-4 h-4" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
