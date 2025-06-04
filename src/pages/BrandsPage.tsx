
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { brands } from '@/data/constants';
import { phones } from '@/data/phones';
import { Smartphone } from 'lucide-react';

const BrandsPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getBrandPhoneCount = (brand: string) => {
    return phones.filter(phone => phone.brand === brand).length;
  };

  const getBrandImage = (brand: string) => {
    const brandPhone = phones.find(phone => phone.brand === brand);
    return brandPhone?.image || '/placeholder.svg';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Phone Brands
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore phones from all major brands. Find your perfect device from our comprehensive collection.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link 
              key={brand} 
              to={`/brand/${brand.toLowerCase()}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    {/* Brand Image */}
                    <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <img
                        src={getBrandImage(brand)}
                        alt={brand}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = '';
                          e.currentTarget.nextElementSibling?.classList.remove('');
                        }}
                      />
                      <Smartphone className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Brand Name */}
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {brand}
                    </h3>
                    
                    {/* Phone Count */}
                    <div className="flex justify-center">
                      <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {getBrandPhoneCount(brand)} phones
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BrandsPage;
