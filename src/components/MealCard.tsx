
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface MealCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

const MealCard: React.FC<MealCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  calories,
  protein,
  carbs,
  fat
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image
    });
  };

  return (
    <div className="meal-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-brand-green transition-colors">{name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        {(calories || protein || carbs || fat) && (
          <div className="flex justify-between text-xs text-gray-500 mb-3">
            {calories && <span>{calories} kcal</span>}
            {protein && <span>{protein}g Protein</span>}
            {carbs && <span>{carbs}g Carbs</span>}
            {fat && <span>{fat}g Fat</span>}
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">€{price.toFixed(2)}</span>
          <Button 
            onClick={handleAddToCart}
            className="bg-brand-green hover:bg-brand-darkgreen"
          >
            In den Warenkorb
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
