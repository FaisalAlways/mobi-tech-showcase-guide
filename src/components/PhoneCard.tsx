
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
    <Card className="group phone-card-hover overflow-hidden bg-card h-full">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={phone.image}
          alt={phone.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <Badge variant={phone.featured ? "default" : "secondary"} className="text-xs">
            {phone.category}
          </Badge>
        </div>
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <Button size="icon" variant="secondary" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-3 w-3" />
          </Button>
          {onCompare && (
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onCompare(phone)}
            >
              <BarChart3 className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
      
      <CardContent className="p-3">
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold text-sm leading-tight line-clamp-2">
              {phone.brand} {phone.name}
            </h3>
            <p className="text-lg font-bold text-primary">
              ${phone.price.toLocaleString()}
            </p>
          </div>
          
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Display:</span>
              <span className="truncate ml-1">{phone.specifications.display.size}</span>
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
              <Eye className="h-3 w-3 mr-1" />
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhoneCard;
