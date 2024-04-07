import CTA from "@/components/Root/Home/Section/CTA";
import Feature from "@/components/Root/Home/Section/Feature";
import Hero from "@/components/Root/Home/Section/Hero";
import Product from "@/components/Root/Home/Section/Product";
import Service from "@/components/Root/Home/Section/Service";
import Testimonial from "@/components/Root/Home/Section/Testimonial";
import { getAllUsers } from "@/lib/network-data/user";
import { useEffect } from "react";

export default async function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Product />
      <Service />
      <Testimonial />
      <CTA />
    </>
  );
}
