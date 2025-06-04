
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, phones } from '@/data/phones';
import { X, PlusCircle, Check, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const ComparePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [darkMode, setDarkMode] = useState(false);
  const [comparePhones, setComparePhones] = useState<Phone[]>([]);
  const [selectedPhone, setSelectedPhone] = useState('');

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

  useEffect(() => {
    const phoneIds = searchParams.getAll('id');
    if (phoneIds.length) {
      const foundPhones = phones.filter(p => phoneIds.includes(p.id));
      setComparePhones(foundPhones);
    }
  }, [searchParams]);

  const addToCompare = (phoneId: string) => {
    if (phoneId) {
      const phone = phones.find(p => p.id === phoneId);
      if (phone && !comparePhones.find(p => p.id === phone.id)) {
        setComparePhones(prev => [...prev, phone]);
        
        // Update URL with phone IDs
        const newPhoneIds = [...comparePhones.map(p => p.id), phone.id];
        setSearchParams(
          newPhoneIds.map(id => ['id', id])
        );
      }
      setSelectedPhone('');
    }
  };

  const removeFromCompare = (phoneId: string) => {
    const newPhones = comparePhones.filter(p => p.id !== phoneId);
    setComparePhones(newPhones);
    
    // Update URL with remaining phone IDs
    setSearchParams(
      newPhones.map(phone => ['id', phone.id])
    );
  };

  // Get phones that aren't currently being compared
  const availablePhones = phones.filter(
    p => !comparePhones.find(cp => cp.id === p.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Compare Phones</h1>
        
        {/* Phone selection */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedPhone}
              onValueChange={setSelectedPhone}
            >
              <SelectTrigger className="w-full sm:w-[300px]">
                <SelectValue placeholder="Add phone to compare" />
              </SelectTrigger>
              <SelectContent>
                {availablePhones.map(phone => (
                  <SelectItem key={phone.id} value={phone.id}>
                    {phone.brand} {phone.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              onClick={() => addToCompare(selectedPhone)}
              disabled={!selectedPhone}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add to Compare
            </Button>
          </div>
        </div>
        
        {comparePhones.length === 0 ? (
          <div className="text-center py-16 bg-muted/30 rounded-lg border">
            <Smartphone className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No phones added for comparison</h3>
            <p className="text-muted-foreground mb-6">
              Add phones to see a side-by-side comparison of specifications.
            </p>
            <Select
              value={selectedPhone}
              onValueChange={setSelectedPhone}
              className="mx-auto w-[250px] mb-4"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a phone" />
              </SelectTrigger>
              <SelectContent>
                {phones.map(phone => (
                  <SelectItem key={phone.id} value={phone.id}>
                    {phone.brand} {phone.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              onClick={() => addToCompare(selectedPhone)}
              disabled={!selectedPhone}
            >
              Start Comparing
            </Button>
          </div>
        ) : (
          <ScrollArea className="w-full overflow-auto">
            <div className="min-w-[768px] border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/40">
                    <th className="text-left p-4 w-[200px] border-r">Specification</th>
                    {comparePhones.map((phone) => (
                      <th key={phone.id} className="p-4 border-r last:border-r-0 text-center relative">
                        <div className="mb-2">
                          <img 
                            src={phone.image}
                            alt={phone.name}
                            className="w-20 h-20 object-cover rounded-md mx-auto mb-2"
                          />
                          <h3 className="font-semibold">{phone.brand} {phone.name}</h3>
                        </div>
                        <Button
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeFromCompare(phone.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Basic Info */}
                  <tr className="bg-accent/5">
                    <td colSpan={comparePhones.length + 1} className="px-4 py-2 font-medium">
                      Basic Information
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Price</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        ${phone.price.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Category</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.category}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Display */}
                  <tr className="bg-accent/5">
                    <td colSpan={comparePhones.length + 1} className="px-4 py-2 font-medium">
                      Display
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Size</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.display.size}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Resolution</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.display.resolution}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Type</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.display.type}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Refresh Rate</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.display.refreshRate}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Processor */}
                  <tr className="bg-accent/5">
                    <td colSpan={comparePhones.length + 1} className="px-4 py-2 font-medium">
                      Processor
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Chipset</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.processor.chipset}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">CPU</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.processor.cpu}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">GPU</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.processor.gpu}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Memory */}
                  <tr className="bg-accent/5">
                    <td colSpan={comparePhones.length + 1} className="px-4 py-2 font-medium">
                      Memory
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">RAM</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.memory.ram}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Storage</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.memory.storage}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Expandable</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.memory.expandable ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Camera */}
                  <tr className="bg-accent/5">
                    <td colSpan={comparePhones.length + 1} className="px-4 py-2 font-medium">
                      Camera
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Rear Camera</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.camera.rear}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Front Camera</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.camera.front}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Camera Features</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        <ul className="list-none">
                          {phone.specifications.camera.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Battery */}
                  <tr className="bg-accent/5">
                    <td colSpan={comparePhones.length + 1} className="px-4 py-2 font-medium">
                      Battery
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Capacity</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.battery.capacity}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Charging</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.battery.charging}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">Wireless Charging</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.battery.wireless ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* OS */}
                  <tr className="bg-accent/5">
                    <td colSpan={comparePhones.length + 1} className="px-4 py-2 font-medium">
                      Operating System
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r">OS</td>
                    {comparePhones.map((phone) => (
                      <td key={phone.id} className="px-4 py-3 border-r last:border-r-0 text-center">
                        {phone.specifications.os}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollArea>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ComparePage;
