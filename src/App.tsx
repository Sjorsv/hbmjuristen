import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PracticeAreas from "./pages/PracticeAreas";
import PracticeAreaDetail from "./pages/PracticeAreaDetail";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rechtsgebieden" element={<PracticeAreas />} />
          <Route path="/rechtsgebieden/:slug" element={<PracticeAreaDetail />} />
          <Route path="/over-ons" element={<AboutUs />} />
          <Route path="/over-ons/team" element={<Team />} />
          <Route path="/actualiteit" element={<Blog />} />
          <Route path="/actualiteit/:slug" element={<BlogDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
