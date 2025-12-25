import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <main className="w-full">
        <Hero />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
    </div>
  );
}
