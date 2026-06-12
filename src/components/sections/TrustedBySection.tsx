import { motion } from "framer-motion";

const logos = [
  { name: "Ford", logo: "/logos/ford.png", large: false },
  { name: "Gulf", logo: "/logos/gulf.png", large: false },
  { name: "Walmart", logo: "/logos/walmart.webp", large: true },
  { name: "Superdry", logo: "/logos/superdry.png", large: false },
  { name: "LG", logo: "/logos/lg.webp", large: false },
  { name: "L&T", logo: "/logos/lnt.png", large: false },
  { name: "Mercedes-Benz", logo: "/logos/mercedes.png", large: false },
  { name: "Samsung", logo: "/logos/samsung.webp", large: true },
  { name: "Shell", logo: "/logos/shell.svg", large: false },
];

export const TrustedBySection = () => {

  return (
    <section className="py-4 md:py-6 bg-white overflow-hidden border-b border-[#e5e5e5]">
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex"
        >
          <div className="flex animate-scroll gap-12 md:gap-16 lg:gap-20">
          {logos.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 px-6 md:px-8 lg:px-10 py-2 flex items-center justify-center min-w-fit"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className={`${item.large ? 'h-10 md:h-12 lg:h-16' : 'h-6 md:h-8 lg:h-10'} w-auto max-w-[120px] md:max-w-[150px] object-contain transition-all duration-300 opacity-80 hover:opacity-100`}
                  />
                ) : (
                  <span className="text-base md:text-lg lg:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex animate-scroll gap-12 md:gap-16 lg:gap-20">
            {logos.map((item, index) => (
              <div
                key={`${item.name}-duplicate-${index}`}
                className="flex-shrink-0 px-6 md:px-8 lg:px-10 py-2 flex items-center justify-center min-w-fit"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className={`${item.large ? 'h-10 md:h-12 lg:h-16' : 'h-6 md:h-8 lg:h-10'} w-auto max-w-[120px] md:max-w-[150px] object-contain transition-all duration-300 opacity-80 hover:opacity-100`}
                  />
                ) : (
                  <span className="text-base md:text-lg lg:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
