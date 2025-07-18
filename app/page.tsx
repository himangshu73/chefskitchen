import Chefs from "@/components/Chefs";
import Features from "@/components/Features";
import Features1 from "@/components/Features1";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Features1 />
      <Chefs />
      <Gallery />
    </div>
  );
}
