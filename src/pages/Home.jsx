import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Services from "../components/landing/Services";
import WhyItMatters from "../components/landing/WhyItMatters";
import Process from "../components/landing/Process";
import Portfolio from "../components/landing/Portfolio";
import CoreValues from "../components/landing/CoreValues";
import CallToAction from "../components/landing/CallToAction";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyItMatters />
      <Process />
      <Portfolio />
      <CoreValues />
      <CallToAction />
      <Footer />
    </div>
  );
}