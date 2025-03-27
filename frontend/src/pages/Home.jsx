import React from "react";
import Hero from "../components/Home/Hero";
import ExploreArtCollection from "../components/Home/ExploreArtCollection";
import ProductSection from "../components/Home/ProductSection";
import CustomizerSection from "../components/Home/CustomizerSection";
import ContactUsSection from "../components/Home/ContactUsSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ExploreArtCollection />
      <ProductSection />
      <CustomizerSection />
      <ContactUsSection />
      <hr className="w-full bg-bg3 h-[2px] mx-auto border-0" />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
