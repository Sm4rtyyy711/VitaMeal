
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FaqItem: React.FC<{ faq: FAQ; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('allgemein');
  
  const faqs: FAQ[] = [
    {
      question: "Wie funktioniert VitaMeal?",
      answer: "VitaMeal ist ganz einfach: Du wählst deine Mahlzeiten aus unserem Shop, bestellst online und erhältst deine frisch zubereiteten Mahlzeiten direkt nach Hause. Die Gerichte sind fertig zubereitet und müssen nur noch aufgewärmt werden.",
      category: "allgemein"
    },
    {
      question: "Wie lange sind die Mahlzeiten haltbar?",
      answer: "Unsere Mahlzeiten sind im Kühlschrank bei 2-7°C bis zu 5 Tage haltbar. Das genaue Mindesthaltbarkeitsdatum findest du auf jeder Verpackung.",
      category: "allgemein"
    },
    {
      question: "Wie werden die Mahlzeiten geliefert?",
      answer: "Wir liefern deine Mahlzeiten in speziellen Kühlboxen, die sicherstellen, dass die Lebensmittel während des Transports gekühlt bleiben. So ist die Frische und Qualität der Mahlzeiten garantiert.",
      category: "allgemein"
    },
    {
      question: "Kann ich meine Bestellung anpassen oder stornieren?",
      answer: "Ja, du kannst deine Bestellung bis zu 48 Stunden vor dem geplanten Lieferdatum anpassen oder stornieren. Logge dich einfach in dein Konto ein und nimm die gewünschten Änderungen vor.",
      category: "bestellung"
    },
    {
      question: "Welche Zahlungsmethoden werden akzeptiert?",
      answer: "Wir akzeptieren Kreditkarten (Visa, Mastercard), PayPal und Lastschrift. Die Zahlung erfolgt sicher und verschlüsselt.",
      category: "bestellung"
    },
    {
      question: "Gibt es Lieferkosten?",
      answer: "Die Lieferung ist ab einem Bestellwert von 40€ kostenlos. Bei Bestellungen unter 40€ berechnen wir eine Liefergebühr von 4,99€.",
      category: "bestellung"
    },
    {
      question: "Wann wird meine Bestellung geliefert?",
      answer: "Die Lieferung erfolgt von Montag bis Freitag zwischen 8:00 und 18:00 Uhr. Du kannst deinen Wunschtag bei der Bestellung auswählen.",
      category: "lieferung"
    },
    {
      question: "Liefert ihr in meine Region?",
      answer: "Wir liefern derzeit in alle großen Städte Deutschlands und deren Umgebung. Gib einfach deine Postleitzahl im Shop ein, um zu prüfen, ob wir in deine Region liefern.",
      category: "lieferung"
    },
    {
      question: "Was passiert, wenn ich bei der Lieferung nicht zu Hause bin?",
      answer: "Wenn du bei der Lieferung nicht zu Hause bist, versucht unser Lieferpartner, das Paket bei einem Nachbarn abzugeben oder an einem sicheren Ort zu hinterlassen. Du erhältst eine Benachrichtigung, wo dein Paket hinterlegt wurde.",
      category: "lieferung"
    },
    {
      question: "Sind eure Mahlzeiten für eine bestimmte Diät geeignet?",
      answer: "Ja, wir bieten verschiedene Mahlzeitenoptionen an, die für verschiedene Ernährungsziele geeignet sind, einschließlich kohlenhydratarm, proteinreich, kalorienarm und vegetarisch/vegan. Alle Nährwertinformationen sind in den Produktdetails verfügbar.",
      category: "ernaehrung"
    },
    {
      question: "Sind die Zutaten in euren Mahlzeiten von hoher Qualität?",
      answer: "Ja, wir verwenden ausschließlich hochwertige, frische Zutaten. Wir arbeiten mit lokalen Lieferanten zusammen, um die bestmögliche Qualität zu gewährleisten.",
      category: "ernaehrung"
    },
    {
      question: "Deklariert ihr Allergene?",
      answer: "Ja, alle Allergene und Inhaltsstoffe sind auf unserer Website und auf den Verpackungen klar gekennzeichnet. Bei spezifischen Allergien kannst du uns gerne kontaktieren.",
      category: "ernaehrung"
    }
  ];
  
  const filteredFaqs = activeCategory === 'alle' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-brand-lightgray">
        {/* Hero Section */}
        <div className="bg-brand-green text-[#fdf4cf] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Hier findest du Antworten auf die häufigsten Fragen zu VitaMeal.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === 'alle' ? "default" : "outline"}
                className={activeCategory === 'alle' ? "bg-brand-green hover:bg-brand-darkgreen text-[#fdf4cf]" : ""}
                onClick={() => setActiveCategory('alle')}
              >
                Alle Fragen
              </Button>
              <Button
                variant={activeCategory === 'allgemein' ? "default" : "outline"}
                className={activeCategory === 'allgemein' ? "bg-brand-green hover:bg-brand-darkgreen text-[#fdf4cf]" : ""}
                onClick={() => setActiveCategory('allgemein')}
              >
                Allgemein
              </Button>
              <Button
                variant={activeCategory === 'bestellung' ? "default" : "outline"}
                className={activeCategory === 'bestellung' ? "bg-brand-green hover:bg-brand-darkgreen text-[#fdf4cf]" : ""}
                onClick={() => setActiveCategory('bestellung')}
              >
                Bestellung
              </Button>
              <Button
                variant={activeCategory === 'lieferung' ? "default" : "outline"}
                className={activeCategory === 'lieferung' ? "bg-brand-green hover:bg-brand-darkgreen text-[#fdf4cf]" : ""}
                onClick={() => setActiveCategory('lieferung')}
              >
                Lieferung
              </Button>
              <Button
                variant={activeCategory === 'ernaehrung' ? "default" : "outline"}
                className={activeCategory === 'ernaehrung' ? "bg-brand-green hover:bg-brand-darkgreen text-[#fdf4cf]" : ""}
                onClick={() => setActiveCategory('ernaehrung')}
              >
                Ernährung
              </Button>
            </div>
          </div>
          
          {/* FAQ List */}
          <div className="bg-[#fdf4cf] rounded-lg shadow-md p-8">
            {filteredFaqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
          
          {/* Additional Help */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Noch Fragen?</h2>
            <p className="text-gray-600 mb-6">
              Wenn deine Frage hier nicht beantwortet wurde, kontaktiere uns gerne direkt. Wir helfen dir gerne weiter!
            </p>
            <Button 
              asChild
              className="bg-brand-green hover:bg-brand-darkgreen text-[#fdf4cf]"
            >
              <Link to="/contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faq;
