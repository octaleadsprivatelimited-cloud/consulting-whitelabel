import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Target, Clock, Mail } from "lucide-react";

const stats = [
  { 
    value: 3, 
    suffix: "", 
    label: "Core Services",
    icon: Briefcase,
    description: "Comprehensive IT staffing solutions"
  },
  { 
    value: 100, 
    suffix: "%", 
    label: "Client Focus",
    icon: Target,
    description: "Dedicated to your success"
  },
  { 
    value: 24, 
    suffix: "/7", 
    label: "Support Available",
    icon: Clock,
    description: "Round-the-clock assistance"
  },
  { 
    value: 1, 
    suffix: "", 
    label: "Email Contact",
    icon: Mail,
    description: "info@procyonsol.com"
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {displayValue}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Our Commitment to{" "}
            <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Delivering exceptional IT recruiting & staffing services with unwavering dedication to your success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              
              {/* Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <h3 className="text-lg md:text-xl font-semibold text-primary-foreground mb-1">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-primary-foreground/60">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
