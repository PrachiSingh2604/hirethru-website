import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-16 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary to-accent opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-secondary to-primary opacity-20 rounded-full filter blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ready to transform your IT recruitment?
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Connect with our team today to discuss how we can help you find the perfect IT talent for your organization.
          </p>
          <div className="mt-10">
            <motion.a 
              href="#contact" 
              className="inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Get Started Now
            </motion.a>
            <motion.a 
              href="#contact" 
              className="inline-block ml-4 px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Schedule a Call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
