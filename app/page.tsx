import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";
import Hero from "@/components/ui/landing/hero";
import Features from "@/components/ui/landing/features";
import Stats from "@/components/ui/landing/stats";
import HowItWorks from "@/components/ui/landing/how-it-works";
import LanguagesCompanies from "@/components/ui/landing/languages-companies";
import CompaniesHighlight from "@/components/ui/landing/companies-highlight";
import Testimonials from '@/components/ui/landing/testimonials';
import LogoStrip from '@/components/ui/landing/logo-strip';
import SuperhumanHero from '@/components/ui/landing/superhuman-hero';
import PracticeTechnologies from '@/components/ui/landing/practice-technologies';

export default async function Home() {
  // Redirect authenticated users to dashboard
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) {
    redirect('/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Hero />
      <LogoStrip />
      <SuperhumanHero />
      <PracticeTechnologies />
      <Testimonials />
      <HowItWorks />
    </main>
  );
} 