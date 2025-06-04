
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PhoneCard from '@/components/PhoneCard';
import { phones, brands } from '@/data/phones';
import { Smartphone } from 'lucide-react';

const BrandPage = () => {
  const { brand } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  const brandPhones = phones.filter(phone => 
    phone.brand.toLowerCase() === brand?.toLowerCase()
  );
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const brandName = brands.find(
    b => b.toLowerCase() === brand?.toLowerCase()
  ) || brand;

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        {brandName ? (
          <>
            {/* Brand Header */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-10">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="h-24 w-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                  <Smartphone className="h-12 w-12 text-primary" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold mb-2">{brandName} Phones</h1>
                  <p className="text-muted-foreground">
                    Browse all {brandPhones.length} {brandName} phones with complete specifications and detailed information.
                  </p>
                </div>
              </div>
            </div>
            
            {brandPhones.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandPhones.map((phone) => (
                  <PhoneCard key={phone.id} phone={phone} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-muted/30 rounded-lg border">
                <Smartphone className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No phones found</h3>
                <p className="text-muted-foreground">
                  We couldn't find any phones for this brand. Please check back later.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Brand not found</h1>
            <p className="text-muted-foreground">The brand you're looking for doesn't exist.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default BrandPage;
