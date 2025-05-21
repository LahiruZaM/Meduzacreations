
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Mock portfolio data - in a real project, this would come from a CMS or API
const categories = ['All', 'UI/UX', 'Logo', 'Flyer', 'Social Media', 'Banner', 'Product'];

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Banking App',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    description: 'Minimalist UI design for a fintech application',
  },
  {
    id: 2,
    title: 'Green Leaf Branding',
    category: 'Logo',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    description: 'Eco-friendly brand identity for organic products',
  },
  {
    id: 3,
    title: 'Yearly Conference',
    category: 'Flyer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    description: 'Marketing materials for tech conference',
  },
  {
    id: 4,
    title: 'Social Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    description: 'Series of promotional posts for product launch',
  },
  {
    id: 5,
    title: 'E-commerce Header',
    category: 'Banner',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    description: 'Sale promotion banner for fashion website',
  },
  {
    id: 6,
    title: 'Product Packaging',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c',
    description: 'Premium packaging design for luxury brand',
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const newFiltered = selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory);
    
    setFilteredItems(newFiltered);
    setVisibleItems([]);
    
    // Trigger animation after filter change
    setTimeout(() => {
      setVisibleItems(newFiltered.map((_, i) => i));
    }, 100);
  }, [selectedCategory]);

  useEffect(() => {
    // Set all items visible on first load
    setTimeout(() => {
      setVisibleItems(filteredItems.map((_, i) => i));
    }, 100);
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-meduza-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our creative work across different design categories
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-5 py-2 text-sm font-medium rounded-full transition-all duration-300',
                selectedCategory === category
                  ? 'bg-meduza-green text-meduza-dark'
                  : 'bg-meduza-gray/10 text-white hover:bg-meduza-gray/20'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'group relative overflow-hidden rounded-lg transition-all duration-500 opacity-0 transform translate-y-10',
                visibleItems.includes(index) && 'animate-fade-in'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-meduza-green text-sm font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold font-display text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
