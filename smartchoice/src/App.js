import "./App.css";
import Header from "./Components/Header";
import SectionHeader from "./Components/SectionHeader";
import Footer from "./Components/Footer.js";
import MarketPlace from "./Components/MarketPlace";
import Trending from "./Components/Trending";
import HeroSection from "./Components/HeroSection";
import HeaderAlt from "./Components/HeaderAlt";

function App() {
  return (
    <div className="app">
      <Header />
      <HeaderAlt />
      <HeroSection />
      <SectionHeader tittle="Marketplace" tittleBtn="Compare More" />
      <MarketPlace />
      <SectionHeader tittle="Trending-Products" tittleBtn="More Products" />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
