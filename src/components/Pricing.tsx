
import { Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const packages = [
  {
    name: 'Basic',
    price: 99,
    description: 'For startups and small businesses',
    features: [
      'Logo design (2 concepts)',
      'Business card design',
      'Social media profile setup',
      'Basic style guide',
      '1 round of revisions'
    ],
    popular: false,
    color: 'gray'
  },
  {
    name: 'Standard',
    price: 249,
    description: 'Perfect for growing businesses',
    features: [
      'Logo design (5 concepts)',
      'Business card & letterhead',
      'Social media graphics package',
      'Comprehensive style guide',
      'Website UI design (3 pages)',
      '3 rounds of revisions'
    ],
    popular: true,
    color: 'green'
  },
  {
    name: 'Premium',
    price: 499,
    description: 'Comprehensive design solutions',
    features: [
      'Logo design (unlimited concepts)',
      'Complete brand identity package',
      'Social media graphics package',
      'Brand guidelines document',
      'Website UI design (up to 10 pages)',
      'Mobile app UI design',
      'Unlimited revisions',
      'Priority support'
    ],
    popular: false,
    color: 'gray'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-meduza-darker to-meduza-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Pricing Plans</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transparent pricing options to meet your design needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-xl overflow-hidden relative", 
                pkg.popular ? "transform md:scale-105" : ""
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 w-full text-center bg-meduza-green text-meduza-dark py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className={cn(
                "bg-meduza-gray/10 border transition-all duration-300 h-full flex flex-col",
                pkg.popular 
                  ? "border-meduza-green" 
                  : "border-meduza-gray/20 hover:border-meduza-gray/40"
              )}>
                <div className="p-8 border-b border-meduza-gray/20">
                  <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold font-display">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-400 ml-2">/ project</span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className={cn(
                          "rounded-full p-0.5 mr-3 mt-1",
                          pkg.popular ? "bg-meduza-green" : "bg-gray-600"
                        )}>
                          <Check size={14} className={pkg.popular ? "text-meduza-dark" : "text-white"} />
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact" 
                    className={cn(
                      "text-center py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full",
                      pkg.popular 
                        ? "bg-meduza-green text-meduza-dark hover:bg-meduza-green-dark" 
                        : "bg-meduza-gray text-white hover:bg-meduza-gray-light"
                    )}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Need a custom solution? <a href="#contact" className="text-meduza-green link-underline">Contact us</a> for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
