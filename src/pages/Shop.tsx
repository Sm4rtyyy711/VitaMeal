
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/use-toast';

interface MealConfig {
  protein: string;
  side: string;
  vegetables: string;
  sauces: string[];
  price: number;
}

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  
  const [mealConfig, setMealConfig] = useState<MealConfig>({
    protein: '',
    side: '',
    vegetables: '',
    sauces: [],
    price: 9.99
  });
  
  const proteins = [
    { id: 'beef', name: 'Rind', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 'chicken', name: 'Huhn', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 'salmon', name: 'Lachs', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 'soy', name: 'Soja', image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];
  
  const sides = [
    { id: 'potatoes', name: 'Kartoffeln', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 'sweet-potatoes', name: 'Süßkartoffeln', image: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 'rice', name: 'Reis', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 'pasta', name: 'Nudeln', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];
  
  const vegetables = [
    { id: 'mediterranean', name: 'Mediterran', description: 'Zucchini, Auberginen, Paprika und Tomaten' },
    { id: 'kaiser', name: 'KaiserGemüse', description: 'Karotten, Brokkoli, Blumenkohl und grüne Bohnen' },
    { id: 'asia', name: 'Asia', description: 'Pak Choi, Sojasprossen, Paprika und Bambussprossen' },
  ];
  
  const sauces = [
    { id: 'herb-cream', name: 'Kräuter-Creme', description: 'Cremige Sauce mit frischen Kräutern' },
    { id: 'bbq', name: 'BBQ', description: 'Rauchig-süße Barbecue Sauce' },
    { id: 'peanut', name: 'Erdnuss', description: 'Cremige Erdnusssauce mit asiatischen Gewürzen' },
    { id: 'ginger-soy', name: 'Ingwer-Soja', description: 'Fruchtige Sauce mit Ingwer und Sojasauce' },
    { id: 'curry-yogurt', name: 'Curry-Joghurt', description: 'Milde Joghurtsauce mit Currygewürzen' },
    { id: 'garlic-olive', name: 'Knoblauch-Olivenöl', description: 'Mediterranes Olivenöl mit frischem Knoblauch' },
    { id: 'sweet-chili', name: 'Sweet Chili', description: 'Süß-scharfe Chilisauce' },
  ];
  
  const handleProteinChange = (value: string) => {
    setMealConfig({
      ...mealConfig,
      protein: value
    });
  };
  
  const handleSideChange = (value: string) => {
    setMealConfig({
      ...mealConfig,
      side: value
    });
  };
  
  const handleVegetablesChange = (value: string) => {
    setMealConfig({
      ...mealConfig,
      vegetables: value
    });
  };
  
  const handleSauceToggle = (sauceId: string) => {
    const currentSauces = [...mealConfig.sauces];
    
    if (currentSauces.includes(sauceId)) {
      // Remove sauce if already selected
      setMealConfig({
        ...mealConfig,
        sauces: currentSauces.filter(id => id !== sauceId)
      });
    } else {
      // Add sauce if not selected and less than 5 sauces are selected
      if (currentSauces.length < 5) {
        setMealConfig({
          ...mealConfig,
          sauces: [...currentSauces, sauceId]
        });
      } else {
        toast({
          title: "Maximale Anzahl erreicht",
          description: "Du kannst maximal 5 Soßen auswählen.",
          variant: "destructive"
        });
      }
    }
  };
  
  const addMealToCart = () => {
    // Validate that all required options are selected
    if (!mealConfig.protein || !mealConfig.side || !mealConfig.vegetables) {
      toast({
        title: "Bitte vervollständige deine Mahlzeit",
        description: "Wähle eine Proteinquelle, eine Beilage und eine Gemüsemischung aus.",
        variant: "destructive"
      });
      return;
    }
    
    // Get names of selected items
    const proteinName = proteins.find(p => p.id === mealConfig.protein)?.name || '';
    const sideName = sides.find(s => s.id === mealConfig.side)?.name || '';
    const vegetablesName = vegetables.find(v => v.id === mealConfig.vegetables)?.name || '';
    const sauceNames = mealConfig.sauces.map(
      sauceId => sauces.find(s => s.id === sauceId)?.name || ''
    ).join(', ');
    
    // Create cart item
    const mealName = `${proteinName} mit ${sideName} und ${vegetablesName}-Gemüse`;
    const description = sauceNames ? `Soßen: ${sauceNames}` : 'Ohne Soße';
    
    addToCart({
      id: Date.now(), // Use timestamp as unique ID
      name: mealName,
      price: mealConfig.price,
      quantity: 1,
      image: proteins.find(p => p.id === mealConfig.protein)?.image || '',
      description: description
    });
    
    toast({
      title: "Mahlzeit hinzugefügt",
      description: "Deine individuell zusammengestellte Mahlzeit wurde zum Warenkorb hinzugefügt.",
    });
  };
  
  const isOptionSelected = (section: 'protein' | 'side' | 'vegetables', id: string) => {
    return mealConfig[section] === id;
  };
  
  const isSauceSelected = (id: string) => {
    return mealConfig.sauces.includes(id);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-brand-lightgray pb-16">
        <div className="bg-brand-green text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Mahlzeit konfigurieren</h1>
            <p className="mt-2 text-lg">Stelle deine individuelle, gesunde Mahlzeit zusammen</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Deine individuelle VitaMeal</h2>
            
            {/* Protein Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">1. Wähle deine Proteinquelle</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {proteins.map((protein) => (
                  <div 
                    key={protein.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      isOptionSelected('protein', protein.id) 
                        ? 'border-brand-green ring-2 ring-brand-green' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleProteinChange(protein.id)}
                  >
                    <img 
                      src={protein.image} 
                      alt={protein.name} 
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4 flex items-center justify-between">
                      <span className="font-medium">{protein.name}</span>
                      <div className={`w-5 h-5 rounded-full border ${
                        isOptionSelected('protein', protein.id)
                          ? 'bg-brand-green border-brand-green'
                          : 'border-gray-300'
                      }`}>
                        {isOptionSelected('protein', protein.id) && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Side Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">2. Wähle deine Beilage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {sides.map((side) => (
                  <div 
                    key={side.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      isOptionSelected('side', side.id) 
                        ? 'border-brand-green ring-2 ring-brand-green' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleSideChange(side.id)}
                  >
                    <img 
                      src={side.image} 
                      alt={side.name} 
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4 flex items-center justify-between">
                      <span className="font-medium">{side.name}</span>
                      <div className={`w-5 h-5 rounded-full border ${
                        isOptionSelected('side', side.id)
                          ? 'bg-brand-green border-brand-green'
                          : 'border-gray-300'
                      }`}>
                        {isOptionSelected('side', side.id) && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vegetable Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">3. Wähle deine Gemüsemischung</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {vegetables.map((veg) => (
                  <div 
                    key={veg.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      isOptionSelected('vegetables', veg.id) 
                        ? 'border-brand-green ring-2 ring-brand-green' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleVegetablesChange(veg.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{veg.name}</span>
                      <div className={`w-5 h-5 rounded-full border ${
                        isOptionSelected('vegetables', veg.id)
                          ? 'bg-brand-green border-brand-green'
                          : 'border-gray-300'
                      }`}>
                        {isOptionSelected('vegetables', veg.id) && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{veg.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sauce Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">4. Wähle deine Soßen (max. 5)</h3>
              <p className="text-sm text-gray-600 mb-4">Wähle bis zu 5 Soßen für deine Mahlzeit</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sauces.map((sauce) => (
                  <div 
                    key={sauce.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      isSauceSelected(sauce.id) 
                        ? 'border-brand-green ring-2 ring-brand-green' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleSauceToggle(sauce.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{sauce.name}</span>
                      <div className={`w-5 h-5 rounded border ${
                        isSauceSelected(sauce.id)
                          ? 'bg-brand-green border-brand-green'
                          : 'border-gray-300'
                      }`}>
                        {isSauceSelected(sauce.id) && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{sauce.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price and Add to Cart */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t">
              <div className="mb-4 sm:mb-0">
                <span className="text-gray-700 mr-2">Preis:</span>
                <span className="text-2xl font-bold">€{mealConfig.price.toFixed(2)}</span>
              </div>
              <Button 
                onClick={addMealToCart}
                className="bg-brand-green hover:bg-brand-darkgreen w-full sm:w-auto"
                size="lg"
              >
                In den Warenkorb
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
