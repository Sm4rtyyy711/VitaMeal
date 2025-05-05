
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getMealById } from '@/data/meals';
import { useCart } from '@/contexts/CartContext';
import MealCard from '@/components/MealCard';
import meals from '@/data/meals';

const NutritionItem: React.FC<{ label: string; value: number; unit: string }> = ({ 
  label, value, unit 
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
      <p className="text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}{unit}</p>
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const meal = getMealById(Number(id));
  
  if (!meal) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Produkt nicht gefunden</h1>
          <Button onClick={() => navigate('/shop')}>Zurück zum Shop</Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      quantity,
      image: meal.image
    });
  };
  
  // Get similar meals (same category but not the same meal)
  const similarMeals = meals
    .filter(m => m.category === meal.category && m.id !== meal.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-brand-lightgray">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <button 
              onClick={() => navigate('/shop')}
              className="text-gray-500 hover:text-brand-green"
            >
              Shop
            </button>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{meal.name}</span>
          </div>
          
          {/* Product Details */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="md:w-1/2">
                <img 
                  src={meal.image} 
                  alt={meal.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{meal.name}</h1>
                    <p className="text-2xl font-bold text-brand-green mb-4">€{meal.price.toFixed(2)}</p>
                    <p className="text-gray-600 mb-6">{meal.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Kategorie:</h3>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {meal.category}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {meal.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="bg-brand-gray text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-semibold">Menge:</span>
                      <div className="flex items-center">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300 bg-white">
                          {quantity}
                        </span>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleAddToCart}
                      className="w-full py-3 bg-brand-green hover:bg-brand-darkgreen"
                    >
                      In den Warenkorb
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nutrition Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Nährwertinformationen</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <NutritionItem label="Kalorien" value={meal.nutrition.calories} unit="kcal" />
              <NutritionItem label="Protein" value={meal.nutrition.protein} unit="g" />
              <NutritionItem label="Kohlenhydrate" value={meal.nutrition.carbs} unit="g" />
              <NutritionItem label="Fett" value={meal.nutrition.fat} unit="g" />
            </div>
          </div>
          
          {/* Similar Products */}
          {similarMeals.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Das könnte dir auch gefallen</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarMeals.map(similarMeal => (
                  <MealCard 
                    key={similarMeal.id}
                    id={similarMeal.id}
                    name={similarMeal.name}
                    description={similarMeal.description}
                    price={similarMeal.price}
                    image={similarMeal.image}
                    calories={similarMeal.nutrition.calories}
                    protein={similarMeal.nutrition.protein}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
