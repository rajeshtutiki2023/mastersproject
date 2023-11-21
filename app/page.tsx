import Hero from "@/components/Hero";
import Destination from "@/components/Feature";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Video from "@/components/Video";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return(
    <>
    <Hero />
    <Destination />
    <About />
    <Packages />
    <Video />
    <Testimonial />
    </>
  )
}