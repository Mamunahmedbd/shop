import React from "react";
import Layout from "./Shared/layout";
import Hero from "./Hero-Section/hero";
import MainSection from "./main-section/main-section";
import ProductCollection from "./FeaturedCollection/ProductCollection";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <MainSection />
      <ProductCollection />
    </Layout>
  );
};

export default HomePage;
