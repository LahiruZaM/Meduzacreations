
import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFormVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-meduza-dark relative">
      <div 
        className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0" 
        aria-hidden="true"
      >
        <div className="absolute -right-36 top-24 w-96 h-96 bg-meduza-green/10 rounded-full blur-[100px]"></div>
        <div className="absolute -left-36 bottom-24 w-96 h-96 bg-meduza-green/5 rounded-full blur-[120px]"></div>
      </div>
      
      <div ref={formRef} className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={cn(
            "lg:col-span-2 opacity-0",
            formVisible && "animate-fade-in-right"
          )}>
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-meduza-green flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">hello@meduzacreations.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-meduza-green flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-meduza-green flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">New York, NY 10001, USA</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-white font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-meduza-gray/10 hover:bg-meduza-green/20 rounded-full transition-colors">
                    <Instagram size={20} className="text-meduza-green" />
                  </a>
                  <a href="#" className="p-2 bg-meduza-gray/10 hover:bg-meduza-green/20 rounded-full transition-colors">
                    <Twitter size={20} className="text-meduza-green" />
                  </a>
                  <a href="#" className="p-2 bg-meduza-gray/10 hover:bg-meduza-green/20 rounded-full transition-colors">
                    <Facebook size={20} className="text-meduza-green" />
                  </a>
                  <a href="#" className="p-2 bg-meduza-gray/10 hover:bg-meduza-green/20 rounded-full transition-colors">
                    <Linkedin size={20} className="text-meduza-green" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "lg:col-span-3 opacity-0",
            formVisible && "animate-fade-in-left"
          )}>
            <form onSubmit={handleSubmit} className="bg-meduza-gray/5 border border-meduza-gray/20 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <div 
                    className={cn(
                      "absolute -inset-[1px] rounded-lg transition-all duration-300",
                      focusedInput === 'name' ? "bg-gradient-to-r from-meduza-green via-meduza-green-light to-meduza-green opacity-60 blur-[2px]" : "opacity-0"
                    )} 
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-meduza-gray/10 border border-meduza-gray/30 rounded-lg p-4 text-white placeholder:text-gray-500 focus:outline-none relative"
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
                
                <div className="relative">
                  <div 
                    className={cn(
                      "absolute -inset-[1px] rounded-lg transition-all duration-300",
                      focusedInput === 'email' ? "bg-gradient-to-r from-meduza-green via-meduza-green-light to-meduza-green opacity-60 blur-[2px]" : "opacity-0"
                    )} 
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full bg-meduza-gray/10 border border-meduza-gray/30 rounded-lg p-4 text-white placeholder:text-gray-500 focus:outline-none relative"
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
              </div>
              
              <div className="relative mb-6">
                <div 
                  className={cn(
                    "absolute -inset-[1px] rounded-lg transition-all duration-300",
                    focusedInput === 'message' ? "bg-gradient-to-r from-meduza-green via-meduza-green-light to-meduza-green opacity-60 blur-[2px]" : "opacity-0"
                  )} 
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-meduza-gray/10 border border-meduza-gray/30 rounded-lg p-4 text-white placeholder:text-gray-500 focus:outline-none relative resize-none"
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full bg-meduza-green text-meduza-dark font-medium py-4 px-6 rounded-lg hover:bg-meduza-green-dark transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={18} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
