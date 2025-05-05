
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-brand-green text-[#fdf4cf]">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="/lovable-uploads/5f5789f0-b5b2-4af1-b88e-80801b43c2df.png" 
          alt="VitaMeal Logo" 
          className="h-16 mx-auto mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für gesundes, leckeres Essen?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Starte jetzt mit VitaMeal und erhalte frische, ausgewogene Mahlzeiten direkt zu dir nach Hause.
        </p>
        <Button 
          asChild
          size="lg" 
          className="bg-[#fdf4cf] text-brand-green hover:bg-[#f5e9b8] px-8 py-6 text-lg"
        >
          <Link to="/shop">Jetzt bestellen</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
