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
import Contact from "./pages/Contact";
import MissionVision from "./pages/MissionVision";
import Werkwijze from "./pages/Werkwijze";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Press from "./pages/Press";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import AuditAcceptatiebeleid from "./pages/AuditAcceptatiebeleid";
import Cookiebeleid from "./pages/Cookiebeleid";
import Emailbeleid from "./pages/Emailbeleid";
import Kostenbeleid from "./pages/Kostenbeleid";
import Partnerbeleid from "./pages/Partnerbeleid";
import FAQPage from "./pages/FAQ";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";

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
          <Route path="/over-ons/missie-visie" element={<MissionVision />} />
          <Route path="/over-ons/team" element={<Team />} />
          <Route path="/werkwijze" element={<Werkwijze />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/pers" element={<Press />} />
          <Route path="/pers/:slug" element={<BlogDetail />} />
          <Route path="/voorwaarden" element={<AlgemeneVoorwaarden />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/audit-acceptatiebeleid" element={<AuditAcceptatiebeleid />} />
          <Route path="/cookies" element={<Cookiebeleid />} />
          <Route path="/e-mailbeleid" element={<Emailbeleid />} />
          <Route path="/kostenbeleid" element={<Kostenbeleid />} />
          <Route path="/partner-beleid" element={<Partnerbeleid />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
