import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/data/processSteps";

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="process" ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">How It Works</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Proven Recruitment Process
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A structured approach to finding the perfect match between talented IT professionals and your organization's needs.
          </p>
        </div>

        <div className="relative">
          {/* Process path line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          {/* Process steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`relative lg:flex lg:items-center lg:justify-between ${isEven ? '' : 'flex-row-reverse'}`}
                >
                  <motion.div 
                    className="lg:w-5/12"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                  >
                    <div className={`bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg ${isEven ? 'ml-auto' : 'mr-auto'}`} style={{ maxWidth: '95%' }}>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                          <span className="text-lg font-bold">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>

                  <div className="hidden lg:block absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white transform -translate-x-1/2 -translate-y-1/2"></div>

                  <motion.div 
                    className="mt-6 lg:mt-0 lg:w-5/12"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
                    transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                  >
                    <div className={`${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <motion.img 
                        src={step.image} 
                        alt={step.imageAlt} 
                        className="rounded-lg shadow-md h-64 w-full object-cover"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
