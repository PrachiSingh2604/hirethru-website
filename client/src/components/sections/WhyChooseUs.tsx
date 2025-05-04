import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const features = [
    {
      title: "Technical Assessment Expertise",
      description: "Our technical experts thoroughly evaluate candidates' skills to ensure they meet your requirements."
    },
    {
      title: "Extensive Industry Network",
      description: "Access our vast network of pre-screened IT professionals across various specializations."
    },
    {
      title: "Tailored Solutions",
      description: "Customized recruitment strategies aligned with your company culture and specific requirements."
    },
    {
      title: "Advanced Matching Technology",
      description: "Proprietary technology to match candidates based on skills, experience, and cultural fit."
    }
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-lg">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Why Choose Us</span>
              <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                A different approach to IT recruitment
              </h2>
              <p className="mt-4 text-lg text-gray-600 mb-6">
                We combine industry expertise, technology, and a human-centered approach to deliver exceptional recruitment results.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <i className="fas fa-check"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Work With Us
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-w-4 aspect-h-3 lg:aspect-none lg:h-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div 
                    className="relative h-60 overflow-hidden rounded-lg shadow-lg transform translate-y-6"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                      alt="IT team collaborating" 
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="relative h-48 overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                      alt="Professional in tech office" 
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <motion.div 
                    className="relative h-48 overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1573497019236-61f323342eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                      alt="Modern workspace" 
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="relative h-60 overflow-hidden rounded-lg shadow-lg transform translate-y-6"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Tech team meeting" 
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Abstract decoration element */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-gradient-to-br from-secondary to-secondary-light opacity-20 rounded-full filter blur-2xl"></div>
            <div className="absolute -top-10 -left-10 h-40 w-40 bg-gradient-to-br from-primary to-primary-light opacity-20 rounded-full filter blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
