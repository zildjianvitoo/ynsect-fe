import Hero from "@/components/Root/Product/Section/Hero";
import ProductFeature from "@/components/Root/Product/Section/ProductFeature";
import ProductListCarousel from "@/components/Root/Product/Section/ProductListCarousel";
import React from "react";

type Props = {};

export default function ProductDetail({}: Props) {
  return (
    <div className="container mt-36">
      <Hero />
      <ProductFeature />
      <ProductListCarousel />
    </div>
  );
}
