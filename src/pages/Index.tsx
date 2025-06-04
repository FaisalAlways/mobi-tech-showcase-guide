
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Smartphone, Zap, Camera, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PhoneCard from '@/components/PhoneCard';
import { phones, brands, categories } from '@/data/phones';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const featuredPhones = phones.filter(phone => phone.featured);
  const latestPhones = phones.slice(0, 4);

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

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-blue-50/50 dark:to-gray-900/50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Mobile Phone Specifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover detailed specs, compare features, and find your perfect smartphone. 
              Your ultimate guide to mobile technology with comprehensive reviews and comparisons.
            </p>
            
            {/* Hero Search */}
            <div className="max-w-2xl mx-auto flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for phones, brands, or features..."
                  className="pl-10 h-12 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Search
              </Button>
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="lg">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Flagship', icon: Star, desc: 'Premium phones with cutting-edge tech', link: '/category/flagship' },
              { name: 'Gaming', icon: Zap, desc: 'High-performance gaming smartphones', link: '/category/gaming' },
              { name: 'Camera', icon: Camera, desc: 'Photography-focused mobile devices', link: '/category/camera' },
              { name: 'Budget', icon: DollarSign, desc: 'Affordable phones with great value', link: '/category/budget' }
            ].map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="group p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Phones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Phones</h2>
            <Link to="/phones">
              <Button variant="outline">View All Phones</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPhones.map((phone) => (
              <div key={phone.id} className="animate-scale-in">
                <PhoneCard phone={phone} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestPhones.map((phone) => (
              <div key={phone.id} className="animate-fade-in">
                <PhoneCard phone={phone} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand}
                to={`/brand/${brand.toLowerCase()}`}
                className="p-6 rounded-lg bg-card border hover:shadow-md transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="space-y-2">
                  <Smartphone className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">{brand}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
