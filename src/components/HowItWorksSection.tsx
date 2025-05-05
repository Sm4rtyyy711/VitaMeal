
import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">So funktioniert's</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          PrepMyMeal macht gesunde Ernährung einfach und bequem. In nur wenigen Schritten bekommst du deine frischen Mahlzeiten direkt nach Hause.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Step 
            number={1}
            title="Wähle deine Mahlzeiten"
            description="Durchstöbere unser vielfältiges Angebot und wähle die Gerichte, die dir gefallen."
          />
          
          <Step 
            number={2}
            title="Bestelle online"
            description="Füge deine Auswahl zum Warenkorb hinzu und schließe die Bestellung ab."
          />
          
          <Step 
            number={3}
            title="Erhalte & Genieße"
            description="Empfange deine frisch zubereiteten Mahlzeiten, wärme sie auf und genieße."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
