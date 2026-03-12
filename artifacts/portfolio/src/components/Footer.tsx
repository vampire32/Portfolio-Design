import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <a href="#" className="font-display font-bold text-2xl tracking-tight text-white flex items-center gap-2 mb-4">
              Abdul Moiz<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm">
              Building robust, scalable, and premium digital experiences. Available for freelance opportunities worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Abdul Moiz. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive" /> by Replit Agent
          </p>
        </div>
      </div>
    </footer>
  );
}
