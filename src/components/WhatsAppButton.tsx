import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton = ({ 
  phoneNumber = "917981999562", 
  message = "Hello! I'm interested in your IT recruiting / staffing services." 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="w-8 h-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 0C7.174 0 0 7.174 0 16.002c0 2.823.737 5.584 2.137 8.012L.074 32l8.188-2.148a15.95 15.95 0 007.74 1.975c8.828 0 16.002-7.174 16.002-16.002C32.004 7.174 24.83 0 16.002 0zm0 29.315a13.26 13.26 0 01-6.767-1.855l-.486-.289-5.034 1.322 1.344-4.91-.316-.503A13.21 13.21 0 012.69 16.002c0-7.339 5.973-13.312 13.312-13.312 7.34 0 13.313 5.973 13.313 13.312 0 7.34-5.973 13.313-13.313 13.313zm7.305-9.973c-.4-.2-2.367-1.168-2.734-1.301-.367-.134-.634-.2-.9.2-.267.4-1.034 1.301-1.268 1.568-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.188-1.06-1.99-2.37-2.224-2.77-.233-.4-.025-.617.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.778-.655-.673-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.334 0 1.967 1.434 3.867 1.634 4.134.2.267 2.822 4.31 6.838 6.043.955.412 1.7.658 2.282.843.958.305 1.832.262 2.522.159.77-.115 2.367-.968 2.7-1.902.334-.934.334-1.734.234-1.901-.1-.167-.367-.267-.767-.467z"/>
      </svg>
    </motion.a>
  );
};