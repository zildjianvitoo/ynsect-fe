import ProductList from "@/components/Product/ProductList";
import React from "react";

type Props = {};

export default function Product({}: Props) {
  return (
    <section className="mt-36 px-6 py-6 sm:px-10 lg:px-16">
      <ProductList />
    </section>
  );
}
