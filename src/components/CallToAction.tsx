
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-brand-green text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für gesundes, leckeres Essen?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Starte jetzt mit PrepMyMeal und erhalte frische, ausgewogene Mahlzeiten direkt zu dir nach Hause.
        </p>
        <Button 
          asChild
          size="lg" 
          className="bg-white text-brand-green hover:bg-gray-100 px-8 py-6 text-lg"
        >
          <Link to="/shop">Jetzt bestellen</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
