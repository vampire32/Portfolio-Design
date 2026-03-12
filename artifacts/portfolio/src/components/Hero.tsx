import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Software Engineer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary mb-6 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 text-white">
              Hi, I'm <span className="text-gradient">Abdul Moiz</span>
              <br />
              <span className="block h-[1.2em] mt-2 text-4xl sm:text-5xl lg:text-6xl text-slate-300">
                {text}<span className="animate-pulse text-primary">|</span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Specializing in MERN, LAMP, Next.js, and modern web architecture. Building scalable, production-grade web applications with 4+ years of professional experience.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView()} className="gap-2 group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-background/50 backdrop-blur-sm">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Connect with me</p>
              <div className="h-px w-12 bg-border"></div>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-full glass hover:text-primary hover:border-primary/50 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats / Graphic side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="glass-card p-6 rounded-2xl animate-float" style={{ animationDelay: '0s' }}>
                  <h3 className="text-4xl font-display font-bold text-white mb-1">4+</h3>
                  <p className="text-muted-foreground text-sm font-medium">Years Experience</p>
                </div>
                <div className="glass-card p-6 rounded-2xl animate-float bg-primary/10 border-primary/20" style={{ animationDelay: '1s' }}>
                  <h3 className="text-4xl font-display font-bold text-primary mb-1">10+</h3>
                  <p className="text-muted-foreground text-sm font-medium">Happy Clients</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-card p-6 rounded-2xl animate-float bg-slate-800/50" style={{ animationDelay: '0.5s' }}>
                  <h3 className="text-4xl font-display font-bold text-white mb-1">20+</h3>
                  <p className="text-muted-foreground text-sm font-medium">Projects Built</p>
                </div>
                <div className="glass-card p-6 rounded-2xl flex items-center justify-center min-h-[160px] animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full text-primary" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-20" />
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="251" strokeDashoffset="50" className="animate-[spin_4s_linear_infinite]" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-primary">
                      100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
