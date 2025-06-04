
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Smartphone, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

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
    <div className="min-h-screen bg-background flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 max-w-md">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Smartphone className="h-32 w-32 text-muted" />
              <AlertTriangle className="h-16 w-16 text-destructive absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. The link might be incorrect or the page may have been moved or deleted.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button onClick={() => window.history.back()}>
              Go Back
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
