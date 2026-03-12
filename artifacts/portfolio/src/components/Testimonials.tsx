import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager, TechFlow",
    text: "Abdul Moiz delivered an exceptional real estate platform for us. His full-stack capabilities and attention to detail saved us months of development time. Highly recommended!",
  },
  {
    name: "Marcus Wong",
    role: "Founder, DataSphere",
    text: "Working with Abdul on our API integration system was a breeze. He understands complex architectural challenges and writes incredibly clean, maintainable code.",
  },
  {
    name: "Elena Rodriguez",
    role: "Director, MediaCorp",
    text: "Our enterprise WordPress site needed a complete overhaul. Abdul not only met our expectations but exceeded them with a lightning-fast headless setup.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/50 border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Client Feedback</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 relative z-10">"{test.text}"</p>
              <div className="mt-auto">
                <h4 className="font-bold text-white">{test.name}</h4>
                <p className="text-sm text-primary">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
