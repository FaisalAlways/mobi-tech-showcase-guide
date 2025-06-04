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
  const [darkMode, setDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = stored === 'true' || (!stored && prefersDark);
    setDarkMode(enabled);
    document.documentElement.classList.toggle('dark', enabled);
    setHasMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const getBrandPhoneCount = (brand: string) =>
    phones.filter((phone) => phone.brand.toLowerCase() === brand.toLowerCase()).length;

  const getBrandImage = (brand: string) => {
    const phone = phones.find((p) => p.brand.toLowerCase() === brand.toLowerCase());
    return phone?.image || '/placeholder.svg';
  };

  if (!hasMounted) return null; // Prevent render until darkMode is known

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Phone Brands
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore phones from all major brands. Find your perfect device from our comprehensive collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link
              key={brand}
              to={`/brand/${brand.toLowerCase()}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <img
                        src={getBrandImage(brand)}
                        alt={brand}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <Smartphone className="h-8 w-8 text-primary absolute" />
                    </div>

                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {brand}
                    </h3>

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
