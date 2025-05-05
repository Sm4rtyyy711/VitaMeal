
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import MealCard from '@/components/MealCard';
import { Link } from 'react-router-dom';
import meals from '@/data/meals';

const Homepage: React.FC = () => {
  // Get a few featured meals
  const featuredMeals = meals.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        
        {/* Featured Meals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Unsere beliebtesten Mahlzeiten</h2>
              <Link 
                to="/shop" 
                className="text-brand-green hover:text-brand-darkgreen font-medium flex items-center"
              >
                Alle anzeigen
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMeals.map(meal => (
                <MealCard 
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                  image={meal.image}
                  calories={meal.nutrition.calories}
                  protein={meal.nutrition.protein}
                />
              ))}
            </div>
          </div>
        </section>
        
        <HowItWorksSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;
