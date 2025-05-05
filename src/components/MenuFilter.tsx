
import React from 'react';
import { Button } from '@/components/ui/button';

interface CategoryButtonProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, active, onClick }) => {
  return (
    <Button
      variant={active ? "default" : "outline"}
      className={active ? "bg-brand-green hover:bg-brand-darkgreen" : ""}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

interface MenuFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const MenuFilter: React.FC<MenuFilterProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">Unsere Menüs</h2>
      <div className="flex flex-wrap gap-2">
        <CategoryButton
          name="Alle"
          active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            name={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
