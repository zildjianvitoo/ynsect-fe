import Hero from "@/components/Root/Product/Section/Hero";
import ProductFeature from "@/components/Root/Product/Section/ProductFeature";
import ProductListCarousel from "@/components/Root/Product/Section/ProductListCarousel";
import { getAllProducts, getProductById } from "@/lib/network-data/product";
import React from "react";

type Params = {
  params: {
    productId: string;
  };
};

export default async function ProductDetail({ params }: Params) {
  const { data: product } = await getProductById({
    productId: params.productId,
  });

  if (product)
    return (
      <div className="container mt-36">
        <Hero image={product.image} />
        <ProductFeature product={product} />
        <ProductListCarousel image={product.image} />
      </div>
    );
}
