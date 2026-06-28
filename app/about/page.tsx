import AboutHero from "@/components/about/AboutHero";
import WhyUs from "@/components/about/WhyUs";
import ContactInfo from "@/components/about/ContactInfo";
import Technology from "@/components/about/Technology";
import Statistics from "@/components/about/Statistics";
import Team from "@/components/about/Team";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <AboutHero />
      <WhyUs />
      <ContactInfo />
      <Technology />
      <Statistics />
      <Team />
    </main>
  );
}