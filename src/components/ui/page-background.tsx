import { motion } from "framer-motion";

interface PageBackgroundProps {
  variant?: "default" | "secondary" | "gradient";
  children: React.ReactNode;
}

export const PageBackground = ({ variant = "default", children }: PageBackgroundProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top right blur circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-20 -right-20 md:top-20 md:right-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-primary/5 rounded-full blur-3xl"
        />
        
        {/* Bottom left blur circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-20 -left-20 md:bottom-20 md:left-10 w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-accent/5 rounded-full blur-3xl"
        />
        
        {/* Center accent */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-3xl"
        />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export const SectionBackground = ({ variant = "default", children }: PageBackgroundProps) => {
  const bgClass = variant === "secondary" 
    ? "bg-gradient-to-b from-secondary/50 via-secondary to-secondary/50" 
    : variant === "gradient"
    ? "bg-gradient-to-b from-background via-secondary/20 to-background"
    : "bg-background";

  return (
    <div className={`relative overflow-hidden ${bgClass}`}>
      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-primary/3 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-accent/3 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
