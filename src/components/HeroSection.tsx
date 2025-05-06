
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-[#fdf4cf]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          opacity: '0.6'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Gesunde Mahlzeiten direkt zu dir nach Hause
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Frisch zubereitete, ausgewogene Gerichte mit hochwertigen Zutaten. 
          Einfach bestellen, aufwärmen und genießen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-brand-green hover:bg-brand-darkgreen text-[#fdf4cf] px-8 py-6 text-lg"
          >
            <Link to="/shop">Zum Shop</Link>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="bg-transparent border-[#fdf4cf] text-[#fdf4cf] hover:bg-[#fdf4cf] hover:text-gray-900 px-8 py-6 text-lg"
          >
            <Link to="/how-it-works">Wie es funktioniert</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
