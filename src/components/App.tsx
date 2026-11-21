// ============================================
// Import React Hooks
// ============================================
import { useEffect, useState } from "react";

// ============================================
// Import Components UI
// ============================================
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Benefits from "./benefits";
import OurClasses from "./ourClasses";
import ContactUs from "./contactUs";
import Footer from "./footer";

// ============================================
// Import Types
// ============================================
import { SelectedPage } from "@/types";
import HandleMethodVoid from "@/types/handleMethodVoid";



export default function App() {

  // ============================================
  // State Management
  // ============================================
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  // ============================================
  // Scroll Event
  // ============================================
  useEffect((): HandleMethodVoid => {

    // Handle scroll event
    const handleScroll: HandleMethodVoid = (): void => {

      // Check if the page is at the top
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      // Check if the page is scrolled down
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };


    // +++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++


    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);


    // +++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++


    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="app bg-gray-20">

      {/* Navbar */}
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />



      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}



      {/* Sections */}
      <Home setSelectedPage={setSelectedPage} />

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <Benefits setSelectedPage={setSelectedPage} />

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <OurClasses setSelectedPage={setSelectedPage} />

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <ContactUs setSelectedPage={setSelectedPage} />



      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}



      {/* Footer */}
      <Footer />

    </div>
  );
}