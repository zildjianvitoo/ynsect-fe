import Hero from "@/components/Product/Section/Hero";
import ProductFeature from "@/components/Product/Section/ProductFeature";
import ProductListCarousel from "@/components/Product/Section/ProductListCarousel";
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
