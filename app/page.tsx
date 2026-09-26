import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import FindYourNextMove from "@/components/FindYourNextMove";
import SignsSection from "@/components/SignsSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import VoicesQuote from "@/components/VoicesQuote";
import BoardOfAdvisors from "@/components/BoardOfAdvisors";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <Hero />
      <FindYourNextMove />
      <SignsSection />
      <FeaturedCourses />
      <VoicesQuote />
      <BoardOfAdvisors />
      <FAQSection />
      <SiteFooter />
    </>
  );
}
