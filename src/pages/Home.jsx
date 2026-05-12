import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Mission from "../components/landing/Mission";
import CoreValues from "../components/landing/CoreValues";
import Ecosystem from "../components/landing/Ecosystem";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import Security from "../components/landing/Security";
import Roadmap from "../components/landing/Roadmap";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-foreground">
      <Navbar />
      <Hero />
      <Ecosystem />
      <About />
      <Mission />
      <CoreValues />
      <HowItWorks />
      <Features />
      <Security />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}