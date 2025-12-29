import Image from "next/image";
import Navbar from "./components/navbar";
import ServicesPage from "./components/services";
import HowItWorks from "./components/how-it-work";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <ServicesPage/>
      <HowItWorks/>
    </div>
  );
}
