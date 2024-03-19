import ProductList from "@/components/Product/ProductList";
import React from "react";

type Props = {};

export default function Product({}: Props) {
  return (
    <section className="container mt-36 py-6">
      <ProductList />
    </section>
  );
}
