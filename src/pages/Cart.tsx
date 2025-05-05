
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  
  const handleCheckout = () => {
    toast({
      title: "Hinweis",
      description: "Das Kassensystem ist in dieser Demo nicht implementiert.",
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Dein Warenkorb</h1>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-6">Dein Warenkorb ist leer.</p>
            <Button asChild className="bg-brand-green hover:bg-brand-darkgreen">
              <Link to="/shop">Jetzt einkaufen</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-brand-lightgray">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Dein Warenkorb</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold">Produkte</h2>
                    <Button 
                      variant="ghost" 
                      className="text-gray-500 hover:text-red-500"
                      onClick={() => clearCart()}
                    >
                      Warenkorb leeren
                    </Button>
                  </div>
                  
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row py-6 border-b">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-32 object-cover rounded-md"
                        />
                      </div>
                      <div className="md:w-3/4 md:pl-6 flex flex-col">
                        <div className="flex justify-between">
                          <Link 
                            to={`/product/${item.id}`} 
                            className="text-lg font-semibold hover:text-brand-green"
                          >
                            {item.name}
                          </Link>
                          <Button 
                            variant="ghost" 
                            className="text-gray-400 hover:text-red-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Button>
                        </div>
                        
                        <div className="flex justify-between items-center mt-auto">
                          <div className="flex items-center mt-4">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300 bg-white">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-semibold">€{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Bestellübersicht</h2>
                
                <div className="border-t border-b py-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Zwischensumme</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Versandkosten</span>
                    <span>€0.00</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-semibold text-lg mb-6">
                  <span>Gesamtsumme</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full py-3 bg-brand-green hover:bg-brand-darkgreen"
                >
                  Zur Kasse
                </Button>
                
                <div className="mt-6">
                  <p className="text-gray-500 text-sm">
                    * Bei Fragen zu deiner Bestellung kannst du uns jederzeit kontaktieren.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="font-semibold mb-4">Weiter einkaufen?</h3>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/shop">Zurück zum Shop</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
