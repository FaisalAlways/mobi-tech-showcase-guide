
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PhoneDetail from "./pages/PhoneDetail";
import PhonesListing from "./pages/PhonesListing";
import BrandPage from "./pages/BrandPage";
import CategoryPage from "./pages/CategoryPage";
import BrandsPage from "./pages/BrandsPage";
import CategoriesPage from "./pages/CategoriesPage";
import ComparePage from "./pages/ComparePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/phones" element={<PhonesListing />} />
          <Route path="/phone/:id" element={<PhoneDetail />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brand/:brand" element={<BrandPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/compare" element={<ComparePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
