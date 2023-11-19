import React from "react";
import AboutUs from "./about/about";
import Products from "./products/products";
import Banner1 from "./banner1/banner1";
import Banner2 from "./banner2/banner2";
import OurServices from "./our_clients/our_services";

function ContentSection() {
  return (
    <section className="w-full min-h-[500vh]">
      <Banner1 />
      <Banner2 />
      <OurServices />
      <Products />
      <AboutUs />
    </section>
  );
}

export default ContentSection;
