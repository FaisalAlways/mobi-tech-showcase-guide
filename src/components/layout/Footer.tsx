
import { Link } from 'react-router-dom';
import { Smartphone, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <Smartphone className="h-8 w-8 text-primary" />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                MobiSpec
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for comprehensive mobile phone specifications, 
              reviews, and comparisons. Stay updated with the latest smartphone technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/phones" className="text-muted-foreground hover:text-primary transition-colors">
                  All Phones
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-muted-foreground hover:text-primary transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-muted-foreground hover:text-primary transition-colors">
                  Compare Phones
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/flagship" className="text-muted-foreground hover:text-primary transition-colors">
                  Flagship Phones
                </Link>
              </li>
              <li>
                <Link to="/category/gaming" className="text-muted-foreground hover:text-primary transition-colors">
                  Gaming Phones
                </Link>
              </li>
              <li>
                <Link to="/category/budget" className="text-muted-foreground hover:text-primary transition-colors">
                  Budget Phones
                </Link>
              </li>
              <li>
                <Link to="/category/camera" className="text-muted-foreground hover:text-primary transition-colors">
                  Camera Phones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@mobispec.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 MobiSpec. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
