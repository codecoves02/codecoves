import Image from "next/image";
import Navbar from "./components/navbar";
import Services from "./components/services";
import HowItWorks from "./components/how-it-work";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Services/>
      <HowItWorks/>
    </div>
  );
}
