import Feature from "@/components/Feature";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Hero/>
    <Feature/>
    <Packages/>
    <Testimonial/>
    <GetApp/>
    </div>
  );
}
