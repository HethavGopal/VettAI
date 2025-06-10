import Hero from "@/components/ui/landing/hero";
import Features from "@/components/ui/landing/features";
import Stats from "@/components/ui/landing/stats";
import HowItWorks from "@/components/ui/landing/how-it-works";
import LanguagesCompanies from "@/components/ui/landing/languages-companies";
import CompaniesHighlight from "@/components/ui/landing/companies-highlight";
import Testimonials from '@/components/ui/landing/testimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Testimonials />
      <Stats />
      <HowItWorks />
      <Features />
      <LanguagesCompanies />
      <CompaniesHighlight />
    </main>
  );
} 