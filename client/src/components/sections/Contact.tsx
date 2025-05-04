import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Office",
      content: "Gurgaon, Haryana, India"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "client.connect@hirethru.in"
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      content: "+91 9819616197"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Get in touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours. We're here to help you find the perfect IT talent for your organization.
            </p>
            
            <div className="mt-8 space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-light/10 text-primary">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
              <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224400.85881656!2d76.93199001257712!3d28.42826153183303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1683021241427!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
              <div className="flex space-x-6 mt-4">
                <a href="https://linkedin.com/company/hirethru" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://twitter.com/hirethru" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="https://facebook.com/hirethru" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="https://instagram.com/hirethru" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <form action="#" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="first-name">First name</Label>
                      <Input 
                        type="text" 
                        id="first-name" 
                        name="first-name" 
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="last-name">Last name</Label>
                      <Input 
                        type="text" 
                        id="last-name" 
                        name="last-name" 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
