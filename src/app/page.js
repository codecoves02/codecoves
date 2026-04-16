import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Technologies from "./components/technologies";
import HowItWorks from "./components/how-it-work";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Technologies/>
      <HowItWorks/>
      <Contact/>
      <Footer/>
    </div>
  );
}
