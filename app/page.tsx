import Chefs from "@/components/Chefs";
import Features from "@/components/Features";
import Features1 from "@/components/Features1";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Features1 />
      <Chefs />
      <Gallery />
      <Newsletter />
    </div>
  );
}
