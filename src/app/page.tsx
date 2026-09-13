"use client";

import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import DiscoverNew from "@/components/DiscoverNew";
import Collections from "@/components/Collections";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import StoreInfo from "@/components/StoreInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <DiscoverNew />
      <Collections />
      <WhyChooseUs />
      <Testimonials />
      <StoreInfo />
    </>
  );
}
