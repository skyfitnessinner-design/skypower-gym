import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AOS_CONFIG } from "./constants";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Zones from "./components/sections/Zones";
import Gallery from "./components/sections/Gallery";
import Pricing from "./components/sections/Pricing";

export default function App() {
  useEffect(() => {
    AOS.init(AOS_CONFIG);
  }, []);

  return (
    <div className="antialiased selection:bg-blue-600 selection:text-white">
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-br from-blue-100/50 to-transparent dark:from-blue-900/15 dark:to-transparent -z-10"></div>
        <Header />
        <main>
          <Hero />
          <About />
          <Zones />
          <Gallery />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}
