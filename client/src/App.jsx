import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import ContactForm from "./pages/Contact";
import Projects from "./pages/Projects";


function App() {
  return (
    <div  className="min-h-screen bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-800 text-white">

      {/* Navbar */}
      <Navbar />

     

      <About/>

  

      <Projects/>

      <ContactForm/>

      <Footer />

    </div>
  );
}

export default App;

