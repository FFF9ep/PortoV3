'use client'
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
