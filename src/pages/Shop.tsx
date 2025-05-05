
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuFilter from '@/components/MenuFilter';
import MealCard from '@/components/MealCard';
import { getCategories, getMealsByCategory } from '@/data/meals';

const Shop: React.FC = () => {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState("all");
  const meals = getMealsByCategory(activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-brand-lightgray pb-16">
        <div className="bg-brand-green text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Unser Menü</h1>
            <p className="mt-2 text-lg">Frische, ausgewogene Mahlzeiten für jeden Geschmack</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-8">
          <MenuFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {meals.map(meal => (
              <MealCard 
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                image={meal.image}
                calories={meal.nutrition.calories}
                protein={meal.nutrition.protein}
                carbs={meal.nutrition.carbs}
                fat={meal.nutrition.fat}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
