
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PhoneCard from '@/components/PhoneCard';
import { phones, categories } from '@/data/phones';
import { Star, Zap, Camera, DollarSign, Briefcase, Smartphone } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  
  const categoryPhones = phones.filter(phone => 
    phone.category.toLowerCase() === category?.toLowerCase()
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

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'flagship':
        return <Star className="h-12 w-12 text-primary" />;
      case 'gaming':
        return <Zap className="h-12 w-12 text-primary" />;
      case 'camera':
        return <Camera className="h-12 w-12 text-primary" />;
      case 'budget':
        return <DollarSign className="h-12 w-12 text-primary" />;
      case 'business':
        return <Briefcase className="h-12 w-12 text-primary" />;
      default:
        return <Smartphone className="h-12 w-12 text-primary" />;
    }
  };

  const getCategoryDescription = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'flagship':
        return 'Premium smartphones with cutting-edge technology, top-tier performance, and the best features available in the market.';
      case 'gaming':
        return 'High-performance phones optimized for gaming with powerful processors, advanced cooling systems, and high refresh rate displays.';
      case 'camera':
        return 'Phones with exceptional camera systems, featuring high-resolution sensors, advanced computational photography, and professional-grade image processing.';
      case 'budget':
        return 'Affordable smartphones that offer great value for money with decent specifications and features at a lower price point.';
      case 'business':
        return 'Phones designed for professional use with enhanced security features, productivity tools, and reliable performance.';
      default:
        return 'Discover a wide range of smartphones in this category.';
    }
  };

  const categoryName = categories.find(
    c => c.toLowerCase() === category?.toLowerCase()
  ) || category;

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        {categoryName ? (
          <>
            {/* Category Header */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-10">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="h-24 w-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                  {getCategoryIcon(categoryName.toString())}
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold mb-2">{categoryName} Phones</h1>
                  <p className="text-muted-foreground">
                    {getCategoryDescription(categoryName.toString())}
                  </p>
                </div>
              </div>
            </div>
            
            {categoryPhones.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPhones.map((phone) => (
                  <PhoneCard key={phone.id} phone={phone} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-muted/30 rounded-lg border">
                <Smartphone className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No phones found</h3>
                <p className="text-muted-foreground">
                  We couldn't find any phones in this category. Please check back later.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Category not found</h1>
            <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
