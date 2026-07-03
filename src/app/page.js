import Banner from "@/components/home-components/Banner";
import LatestProduct from "@/components/home-components/LatestProduct";
import About from "@/components/About";
import Contact from "@/components/Contact";
export const metadata = {
  title: "BuildHome - Construction Company",
  description:
    "We build modern homes, villas, apartments, and commercial buildings.",
};
export default function Home() {
   return (
    <div>
      <Banner />
      <LatestProduct/>
      <About/>
      <Contact/>

    
    </div>
  );
}