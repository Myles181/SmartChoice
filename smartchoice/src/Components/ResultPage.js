import React from "react";
import { useState, useRef } from "react";
import SectionHeader from "./SectionHeader";
import Trending from "./Trending";
import HeaderAlt from "./HeaderAlt";
import Footer from "./Footer";
import Header from "./Header";
import ResultHeroSection from "./ResultHeroSection";

function ResultPage() {
  const heroRef = useRef(null);
  const mrktRef = useRef(null);
  const trendRef = useRef(null);
  const footRef = useRef(null);

  //handles the click to scroll effect
  const handleHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMarket = () => {
    mrktRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTrend = () => {
    trendRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHelp = () => {
    trendRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header
        gotoMarket={handleMarket}
        gotoHero={handleHero}
        gotoTrend={handleTrend}
        findHelp={handleHelp}
      />
      <HeaderAlt
        gotoMarket={handleMarket}
        gotoHero={handleHero}
        gotoTrend={handleTrend}
        findHelp={handleHelp}
      />
      <ResultHeroSection />
      <SectionHeader tittle="Trending-Products" tittleBtn="More Products" />
      <Trending ref={trendRef} />
      <Footer ref={footRef} />
    </div>
  );
}

export default ResultPage;
