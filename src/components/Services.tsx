
import { useEffect, useState } from 'react';
import { Laptop, Palette, LayoutGrid, Image, Instagram, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Laptop className="w-10 h-10" />,
    title: 'UI/UX Design',
    description:
      'Intuitive, engaging user interfaces and experiences that convert visitors into customers.',
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: 'Logo Design',
    description:
      'Memorable, versatile logos and brand identities that make your business stand out.',
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: 'Flyer Design',
    description:
      'Eye-catching flyers and promotional materials that effectively communicate your message.',
  },
  {
    icon: <Image className="w-10 h-10" />,
    title: 'Banner Design',
    description:
      'Striking banner designs for your website, social media, or physical displays.',
  },
  {
    icon: <Instagram className="w-10 h-10" />,
    title: 'Social Media Graphics',
    description:
      'Scroll-stopping visuals that enhance your social media presence and engagement.',
  },
  {
    icon: <LayoutGrid className="w-10 h-10" />,
    title: 'Product Showcase',
    description:
      'Professional product presentations that highlight features and drive consumer interest.',
  },
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach((card, index) => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.85) {
          setVisibleItems((prev) => 
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-meduza-dark to-meduza-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive design solutions to elevate your brand
            across all digital and print platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "service-card bg-meduza-gray/10 border border-meduza-gray/20 p-8 rounded-lg hover:border-meduza-green/50 transition-all duration-500 opacity-0",
                visibleItems.includes(index) && "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-meduza-green mb-6">{service.icon}</div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
