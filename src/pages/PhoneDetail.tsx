
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, BarChart3, Smartphone, Monitor, Cpu, HardDrive, Camera, Battery, Wifi, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { phones, Phone } from '@/data/phones';

const PhoneDetail = () => {
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  const [phone, setPhone] = useState<Phone | null>(null);

  useEffect(() => {
    const foundPhone = phones.find(p => p.id === id);
    setPhone(foundPhone || null);
  }, [id]);

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

  if (!phone) {
    return (
      <div className="min-h-screen bg-background">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Phone not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/phones" className="hover:text-primary">Phones</Link>
          <span>/</span>
          <span className="text-foreground">{phone.brand} {phone.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Phone Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted/50 border flex items-center justify-center">
              <img
                src={phone.image}
                alt={`${phone.brand} ${phone.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Action buttons */}
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Add to Favorites
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Compare
              </Button>
            </div>
          </div>

          {/* Phone Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{phone.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{phone.brand} {phone.name}</h1>
              <div className="flex items-end space-x-4">
                <p className="text-3xl font-bold text-primary">${phone.price.toLocaleString()}</p>
              </div>
            </div>
            
            <Separator />
            
            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-3 rounded-lg bg-muted/40">
                <p className="text-xs text-muted-foreground">Display</p>
                <p className="font-medium">{phone.specifications.display.size}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/40">
                <p className="text-xs text-muted-foreground">Processor</p>
                <p className="font-medium">{phone.specifications.processor.chipset.split(' ').slice(-2).join(' ')}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/40">
                <p className="text-xs text-muted-foreground">RAM</p>
                <p className="font-medium">{phone.specifications.memory.ram}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/40">
                <p className="text-xs text-muted-foreground">Storage</p>
                <p className="font-medium">{phone.specifications.memory.storage}</p>
              </div>
            </div>

            <Separator />

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Camera className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span><strong>Camera:</strong> {phone.specifications.camera.rear} (Rear), {phone.specifications.camera.front} (Front)</span>
                </li>
                <li className="flex items-start">
                  <Battery className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span><strong>Battery:</strong> {phone.specifications.battery.capacity}, {phone.specifications.battery.charging}</span>
                </li>
                <li className="flex items-start">
                  <Monitor className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span><strong>Display:</strong> {phone.specifications.display.type}, {phone.specifications.display.resolution}, {phone.specifications.display.refreshRate}</span>
                </li>
                <li className="flex items-start">
                  <Cpu className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span><strong>Processor:</strong> {phone.specifications.processor.chipset}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Full Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Display */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  <span>Display</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Size</span>
                    <span>{phone.specifications.display.size}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Resolution</span>
                    <span>{phone.specifications.display.resolution}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Type</span>
                    <span>{phone.specifications.display.type}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Refresh Rate</span>
                    <span>{phone.specifications.display.refreshRate}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Processor */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <span>Processor</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Chipset</span>
                    <span>{phone.specifications.processor.chipset}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">CPU</span>
                    <span>{phone.specifications.processor.cpu}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">GPU</span>
                    <span>{phone.specifications.processor.gpu}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Memory */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <HardDrive className="h-5 w-5 text-primary" />
                  <span>Memory</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">RAM</span>
                    <span>{phone.specifications.memory.ram}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Storage</span>
                    <span>{phone.specifications.memory.storage}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Expandable Storage</span>
                    <span>{phone.specifications.memory.expandable ? 'Yes' : 'No'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Camera */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <span>Camera</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Rear Camera</span>
                    <span>{phone.specifications.camera.rear}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Front Camera</span>
                    <span>{phone.specifications.camera.front}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Features</span>
                    <span>{phone.specifications.camera.features.join(', ')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Battery */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Battery className="h-5 w-5 text-primary" />
                  <span>Battery</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Capacity</span>
                    <span>{phone.specifications.battery.capacity}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Charging</span>
                    <span>{phone.specifications.battery.charging}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Wireless Charging</span>
                    <span>{phone.specifications.battery.wireless ? 'Yes' : 'No'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Connectivity */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <span>Connectivity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Network</span>
                    <span>{phone.specifications.connectivity.network}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Wi-Fi</span>
                    <span>{phone.specifications.connectivity.wifi}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Bluetooth</span>
                    <span>{phone.specifications.connectivity.bluetooth}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">NFC</span>
                    <span>{phone.specifications.connectivity.nfc ? 'Yes' : 'No'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Design */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <span>Design</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span>{phone.specifications.design.dimensions}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Weight</span>
                    <span>{phone.specifications.design.weight}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Colors</span>
                    <span>{phone.specifications.design.colors.join(', ')}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">Material</span>
                    <span>{phone.specifications.design.material}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* OS */}
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>Operating System</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="grid grid-cols-2">
                    <span className="text-muted-foreground">OS</span>
                    <span>{phone.specifications.os}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PhoneDetail;
