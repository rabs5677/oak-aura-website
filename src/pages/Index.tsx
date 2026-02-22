import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Index = () => {
  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const el = document.getElementById(location.state.scrollTo);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
}, [location]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;