import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import PracticeAreasSection from '@/components/home/PracticeAreasSection';
import AboutSection from '@/components/home/AboutSection';
import InsightsSection from '@/components/home/InsightsSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import CareerSection from '@/components/home/CareerSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PracticeAreasSection />
      <AboutSection />
      <InsightsSection />
      <ReviewsSection />
      <CareerSection />
    </Layout>
  );
};

export default Index;
