
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-meduza-darker py-16 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="inline-block">
              <h2 className="text-2xl font-display font-bold">
                <span className="text-meduza-green">MEDUZA</span> Creations
              </h2>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Premium UI/UX and graphic design services to transform your brand's digital presence.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-4 bg-meduza-green/10 hover:bg-meduza-green/20 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="text-meduza-green" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-meduza-gray/20">
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-meduza-green">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-meduza-green">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-meduza-green">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-meduza-green">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-meduza-green">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-meduza-green">UI/UX Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-meduza-green">Logo Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-meduza-green">Flyer Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-meduza-green">Banner Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-meduza-green">Social Media Graphics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@meduzacreations.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY 10001, USA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MEDUZA Creations. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-meduza-green">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-meduza-green">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
