
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProcessStep: React.FC<{ number: number; title: string; description: string; image: string }> = ({ 
  number, title, description, image 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:w-1/2">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
      <div className="md:w-1/2 p-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold mr-3">
            {number}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-brand-lightgray">
        {/* Hero Section */}
        <div className="bg-brand-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Wie VitaMeal funktioniert</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Gesunde Ernährung war noch nie so einfach. Entdecke unseren unkomplizierten Prozess, der dir Zeit spart und deine Ernährungsziele unterstützt.
            </p>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-12">
            <ProcessStep 
              number={1}
              title="Wähle deine Mahlzeiten"
              description="Durchstöbere unser vielfältiges Angebot im Shop. Ob vegetarisch, proteinreich oder Low-Carb – bei uns findest du genau die Mahlzeiten, die zu deinen Vorlieben und Ernährungszielen passen. Jede Mahlzeit ist nährstoffreich und von unseren Köchen frisch zubereitet."
              image="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            
            <ProcessStep 
              number={2}
              title="Bestelle online"
              description="Lege deine ausgewählten Mahlzeiten in den Warenkorb und schließe deine Bestellung ab. Du kannst problemlos für mehrere Tage oder sogar Wochen im Voraus planen. Unser Bestellsystem ist einfach und sicher – nur wenige Klicks und deine Mahlzeiten sind auf dem Weg zu dir."
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            
            <ProcessStep 
              number={3}
              title="Wir liefern direkt zu dir"
              description="Deine Mahlzeiten werden sorgfältig verpackt und gekühlt zu deinem Wunschtermin geliefert. Unsere zuverlässige Lieferung sorgt dafür, dass du deine Mahlzeiten frisch und in Top-Qualität erhältst – egal ob zu Hause oder im Büro."
              image="https://images.unsplash.com/photo-1589136777398-5c7a4bcc7fac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            
            <ProcessStep 
              number={4}
              title="Aufwärmen und genießen"
              description="In nur 2-3 Minuten ist deine Mahlzeit in der Mikrowelle erhitzt und servierbereit. Alternativ kannst du sie auch im Backofen oder in der Pfanne erwärmen. Unkompliziert, schnell und dennoch geschmacklich auf höchstem Niveau – genieße deine ausgewogene Mahlzeit ohne aufwendiges Kochen und Abwaschen."
              image="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Bereit, es selbst zu erleben?</h2>
            <p className="text-gray-600 mb-8">
              Starte jetzt mit deiner ersten Bestellung und überzeuge dich von der Qualität und Einfachheit von VitaMeal.
            </p>
            <Button 
              asChild
              className="bg-brand-green hover:bg-brand-darkgreen"
            >
              <Link to="/shop">Jetzt bestellen</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
