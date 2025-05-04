import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { animateCounter } from "@/lib/animations";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = +(counter as HTMLElement).getAttribute('data-target') || 0;
        animateCounter(counter as HTMLElement, target);
      });
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-primary-dark text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">top IT talent</span> through HireThru
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Streamline your recruitment process with our expertise in IT staffing. We help companies find and hire the best tech professionals efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Get Started
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Our Services
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-5 text-center">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg transform transition-transform hover:scale-105 duration-300">
                <h3 className="font-bold text-accent text-3xl"><span className="counter" data-target="500">0</span>+</h3>
                <p className="text-sm mt-1 text-gray-300">Successful Placements</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg transform transition-transform hover:scale-105 duration-300">
                <h3 className="font-bold text-accent text-3xl"><span className="counter" data-target="98">0</span>%</h3>
                <p className="text-sm mt-1 text-gray-300">Client Satisfaction</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg transform transition-transform hover:scale-105 duration-300">
                <h3 className="font-bold text-accent text-3xl"><span className="counter" data-target="120">0</span>+</h3>
                <p className="text-sm mt-1 text-gray-300">Partner Companies</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-accent/30 filter blur-3xl"></div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="IT professionals collaborating" 
              className="relative z-10 rounded-lg shadow-2xl transform rotate-2 max-w-md mx-auto transition-all duration-500 hover:rotate-0 hover:scale-105"
            />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Modern office workspace" 
              className="absolute bottom-0 -right-16 z-20 rounded-lg shadow-2xl transform -rotate-3 w-60 transition-all duration-500 hover:rotate-0 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
