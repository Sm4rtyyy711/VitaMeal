
export interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const meals: Meal[] = [
  {
    id: 1,
    name: "Hähnchen mit Süßkartoffeln",
    description: "Zart gegrilltes Hähnchenfilet mit gerösteten Süßkartoffeln und gedünstetem Gemüse.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Fleisch",
    tags: ["Protein", "Low Carb"],
    nutrition: {
      calories: 425,
      protein: 35,
      carbs: 30,
      fat: 15
    }
  },
  {
    id: 2,
    name: "Veganes Buddha Bowl",
    description: "Nährstoffreiche Bowl mit Quinoa, geröstetem Gemüse, Avocado und Kichererbsen.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Vegan",
    tags: ["Vegan", "Vollwertig"],
    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 45,
      fat: 16
    }
  },
  {
    id: 3,
    name: "Lachsfilet mit Gemüse",
    description: "Saftiges Lachsfilet mit Zitrone, frischem Gemüse und Wildreis.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Fisch",
    tags: ["Omega-3", "Protein"],
    nutrition: {
      calories: 410,
      protein: 28,
      carbs: 20,
      fat: 22
    }
  },
  {
    id: 4,
    name: "Vegetarische Pasta",
    description: "Vollkornpasta mit hausgemachter Tomatensauce und gegrilltem Gemüse.",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Vegetarisch",
    tags: ["Vegetarisch", "Vollkorn"],
    nutrition: {
      calories: 395,
      protein: 14,
      carbs: 60,
      fat: 10
    }
  },
  {
    id: 5,
    name: "Rindfleisch mit Brokkoli",
    description: "Zartes Rindfleisch mit Brokkoli, Paprika und Jasminreis.",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1583608205776-babe6e76d63a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Fleisch",
    tags: ["Protein", "Ausgewogen"],
    nutrition: {
      calories: 440,
      protein: 32,
      carbs: 35,
      fat: 18
    }
  },
  {
    id: 6,
    name: "Mediterraner Salat",
    description: "Frischer Salat mit Feta, Oliven, Tomaten, Gurken und hausgemachtem Dressing.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80",
    category: "Vegetarisch",
    tags: ["Low Carb", "Frisch"],
    nutrition: {
      calories: 290,
      protein: 8,
      carbs: 15,
      fat: 20
    }
  },
  {
    id: 7,
    name: "Vegane Linsensuppe",
    description: "Herzhafte Linsensuppe mit Gemüse und aromatischen Kräutern.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Vegan",
    tags: ["Ballaststoffreich", "Vegan"],
    nutrition: {
      calories: 320,
      protein: 16,
      carbs: 40,
      fat: 8
    }
  },
  {
    id: 8,
    name: "Putenbrust mit Quinoa",
    description: "Saftige Putenbrust mit Quinoa und buntem Ofengemüse.",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Fleisch",
    tags: ["Mager", "Protein"],
    nutrition: {
      calories: 380,
      protein: 30,
      carbs: 28,
      fat: 12
    }
  },
  {
    id: 9,
    name: "Thunfisch Poke Bowl",
    description: "Frischer Thunfisch mit Edamame, Avocado, Gurke und Sushi-Reis.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "Fisch",
    tags: ["Omega-3", "Frisch"],
    nutrition: {
      calories: 420,
      protein: 26,
      carbs: 32,
      fat: 18
    }
  },
  {
    id: 10,
    name: "Indisches Curry",
    description: "Aromatisches Gemüsecurry mit Kichererbsen und Basmatireis.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    category: "Vegetarisch",
    tags: ["Würzig", "Vegetarisch"],
    nutrition: {
      calories: 405,
      protein: 13,
      carbs: 55,
      fat: 15
    }
  },
  {
    id: 11,
    name: "Gemüse Tofu Stir-Fry",
    description: "Knackiges Gemüse mit mariniertem Tofu in einer leichten Sojasauce.",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Vegan",
    tags: ["Vegan", "Proteinreich"],
    nutrition: {
      calories: 350,
      protein: 18,
      carbs: 28,
      fat: 16
    }
  },
  {
    id: 12,
    name: "Mediterraner Couscous",
    description: "Couscous mit gegrilltem Gemüse, Feta und frischen Kräutern.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Vegetarisch",
    tags: ["Vegetarisch", "Mediterran"],
    nutrition: {
      calories: 375,
      protein: 12,
      carbs: 48,
      fat: 14
    }
  }
];

export const getCategories = (): string[] => {
  const categoriesSet = new Set(meals.map(meal => meal.category));
  return Array.from(categoriesSet);
};

export const getMealsByCategory = (category: string): Meal[] => {
  if (category === "all") {
    return meals;
  }
  return meals.filter(meal => meal.category === category);
};

export const getMealById = (id: number): Meal | undefined => {
  return meals.find(meal => meal.id === id);
};

export default meals;
