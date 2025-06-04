import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/constants';
import { phones } from '@/data/phones';
import { Star, Zap, Camera, DollarSign, Briefcase, Smartphone } from 'lucide-react';

const CategoriesPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
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

  const getCategoryPhoneCount = (category: string) => {
    return phones.filter((phone) => phone.category === category).length;
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'flagship':
        return <Star className="h-8 w-8 text-blue-600" />;
      case 'gaming':
        return <Zap className="h-8 w-8 text-red-600" />;
      case 'camera':
        return <Camera className="h-8 w-8 text-purple-600" />;
      case 'budget':
        return <DollarSign className="h-8 w-8 text-green-600" />;
      case 'business':
        return <Briefcase className="h-8 w-8 text-blue-600" />;
      default:
        return <Smartphone className="h-8 w-8 text-gray-600" />;
    }
  };

  const getCategoryDescription = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'flagship':
        return 'Premium smartphones with cutting-edge technology and top-tier performance.';
      case 'gaming':
        return 'High-performance phones optimized for gaming with powerful processors.';
      case 'camera':
        return 'Phones with exceptional camera systems and professional photography features.';
      case 'budget':
        return 'Affordable smartphones that offer great value for money.';
      case 'business':
        return 'Phones designed for professional use with enhanced security features.';
      default:
        return 'Discover a wide range of smartphones in this category.';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Phone Categories
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Browse phones by category to find devices that match your specific needs and preferences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category} to={`/category/${category.toLowerCase()}`} className="block">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                      {getCategoryIcon(category)}
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {category}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {getCategoryDescription(category)}
                    </p>

                    {/* Count */}
                    <div className="flex justify-center">
                      <Badge variant="secondary" className="px-4 py-1">
                        {getCategoryPhoneCount(category)} phones available
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

export default CategoriesPage;
