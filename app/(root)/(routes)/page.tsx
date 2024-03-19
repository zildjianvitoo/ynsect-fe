import Hero from "@/components/Home/Section/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <Navbar />
      <Hero />
    </div>
  );
}
