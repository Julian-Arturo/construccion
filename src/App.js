import React from "react";
import About from "./components/About";
import BtnWhatsapp from "./components/BtnWhatsapp";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Proyect from "./components/Proyect";
import Servicios from "./components/Service";
import Team from "./components/Team";

function App() {
  return (
    <div >
      <Navbar />
      <BtnWhatsapp />
      <Header />
      <About />
      <Servicios />
      <Clients />
      <Proyect />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
