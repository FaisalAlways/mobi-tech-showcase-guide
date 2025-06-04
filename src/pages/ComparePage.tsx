import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { phones } from '@/data/phones';
import type { Phone } from '@/types/phone';

const ComparePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [darkMode, setDarkMode] = useState(false);
  const [comparePhones, setComparePhones] = useState<Phone[]>([]);
  const [selectedPhone, setSelectedPhone] = useState('');

  useEffect(() => {
    const phoneIds = searchParams.get('phones')?.split(',') || [];
    const validPhones = phoneIds
      .map(id => phones.find(p => p.id === id))
      .filter(Boolean) as Phone[];
    setComparePhones(validPhones);
  }, [searchParams]);

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

  const addPhone = () => {
    if (selectedPhone && comparePhones.length < 3) {
      const phone = phones.find(p => p.id === selectedPhone);
      if (phone && !comparePhones.find(p => p.id === phone.id)) {
        const newPhones = [...comparePhones, phone];
        setComparePhones(newPhones);
        const newParams = new URLSearchParams();
        newParams.set('phones', newPhones.map(p => p.id).join(','));
        setSearchParams(newParams);
        setSelectedPhone('');
      }
    }
  };

  const removePhone = (phoneId: string) => {
    const newPhones = comparePhones.filter(p => p.id !== phoneId);
    setComparePhones(newPhones);
    const newParams = new URLSearchParams();
    if (newPhones.length > 0) {
      newParams.set('phones', newPhones.map(p => p.id).join(','));
    }
    setSearchParams(newParams);
  };

  const availablePhones = phones.filter(p => !comparePhones.find(cp => cp.id === p.id));

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/phones">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Phones
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Compare Phones</h1>
        </div>

        {/* Add Phone Section */}
        {comparePhones.length < 3 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add Phone to Compare</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Select value={selectedPhone} onValueChange={setSelectedPhone}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select a phone to compare" />
                  </SelectTrigger>
                  <SelectContent>
                    {availablePhones.map(phone => (
                      <SelectItem key={phone.id} value={phone.id}>
                        {phone.brand} {phone.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={addPhone} disabled={!selectedPhone}>
                  Add to Compare
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comparison Table */}
        {comparePhones.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparePhones.map(phone => (
                <Card key={phone.id} className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => removePhone(phone.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  <CardHeader>
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-lg">{phone.brand} {phone.name}</CardTitle>
                    <p className="text-2xl font-bold text-primary">${phone.price.toLocaleString()}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Display</h4>
                      <p className="text-sm text-muted-foreground">{phone.specifications.display.size}</p>
                      <p className="text-sm text-muted-foreground">{phone.specifications.display.resolution}</p>
                      <p className="text-sm text-muted-foreground">{phone.specifications.display.type}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Performance</h4>
                      <p className="text-sm text-muted-foreground">{phone.specifications.processor.chipset}</p>
                      <p className="text-sm text-muted-foreground">RAM: {phone.specifications.memory.ram}</p>
                      <p className="text-sm text-muted-foreground">Storage: {phone.specifications.memory.storage}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Camera</h4>
                      <p className="text-sm text-muted-foreground">Rear: {phone.specifications.camera.rear}</p>
                      <p className="text-sm text-muted-foreground">Front: {phone.specifications.camera.front}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Battery</h4>
                      <p className="text-sm text-muted-foreground">{phone.specifications.battery.capacity}</p>
                      <p className="text-sm text-muted-foreground">{phone.specifications.battery.charging}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <Card className="text-center py-16">
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">No phones to compare</h3>
              <p className="text-muted-foreground mb-6">
                Add phones from the selection above to start comparing their specifications.
              </p>
              <Link to="/phones">
                <Button>Browse Phones</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ComparePage;
