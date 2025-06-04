
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

  const getCategoryPhoneCount = (category: string) => {
    return phones.filter(phone => phone.category === category).length;
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'flagship':
        return <Star className="h-8 w-8 text-primary" />;
      case 'gaming':
        return <Zap className="h-8 w-8 text-primary" />;
      case 'camera':
        return <Camera className="h-8 w-8 text-primary" />;
      case 'budget':
        return <DollarSign className="h-8 w-8 text-primary" />;
      case 'business':
        return <Briefcase className="h-8 w-8 text-primary" />;
      default:
        return <Smartphone className="h-8 w-8 text-primary" />;
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

  const getCategoryGradient = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'flagship':
        return 'from-yellow-500/10 to-yellow-600/5';
      case 'gaming':
        return 'from-red-500/10 to-red-600/5';
      case 'camera':
        return 'from-purple-500/10 to-purple-600/5';
      case 'budget':
        return 'from-green-500/10 to-green-600/5';
      case 'business':
        return 'from-blue-500/10 to-blue-600/5';
      default:
        return 'from-primary/10 to-primary/5';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Phone Categories
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse phones by category to find devices that match your specific needs and preferences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category} 
              to={`/category/${category.toLowerCase()}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className={`hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br ${getCategoryGradient(category)} border-0 shadow-lg`}>
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Category Icon */}
                    <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      {getCategoryIcon(category)}
                    </div>
                    
                    {/* Category Name */}
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {category}
                    </h3>
                    
                    {/* Category Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {getCategoryDescription(category)}
                    </p>
                    
                    {/* Phone Count */}
                    <div className="flex justify-center">
                      <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 px-4 py-1">
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
