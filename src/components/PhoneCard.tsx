
import { Link } from 'react-router-dom';
import { Heart, Eye, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone } from '@/data/phones';

interface PhoneCardProps {
  phone: Phone;
  onCompare?: (phone: Phone) => void;
  isComparing?: boolean;
}

const PhoneCard = ({ phone, onCompare, isComparing }: PhoneCardProps) => {
  return (
    <Card className="group phone-card-hover overflow-hidden bg-card">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={phone.image}
          alt={phone.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={phone.featured ? "default" : "secondary"}>
            {phone.category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-4 w-4" />
          </Button>
          {onCompare && (
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onCompare(phone)}
            >
              <BarChart3 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight">
              {phone.brand} {phone.name}
            </h3>
            <p className="text-2xl font-bold text-primary">
              ${phone.price.toLocaleString()}
            </p>
          </div>
          
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Display:</span>
              <span>{phone.specifications.display.size}</span>
            </div>
            <div className="flex justify-between">
              <span>RAM:</span>
              <span>{phone.specifications.memory.ram}</span>
            </div>
            <div className="flex justify-between">
              <span>Storage:</span>
              <span>{phone.specifications.memory.storage}</span>
            </div>
            <div className="flex justify-between">
              <span>Battery:</span>
              <span>{phone.specifications.battery.capacity}</span>
            </div>
          </div>
          
          <Link to={`/phone/${phone.id}`} className="block">
            <Button className="w-full" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhoneCard;
