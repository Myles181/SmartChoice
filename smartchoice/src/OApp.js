import "./App.css";
import Header from "./Components/Header";
import SectionHeader from "./Components/SectionHeader";
import Footer from "./Components/Footer.js";
import MarketPlace from "./Components/MarketPlace";
import Trending from "./Components/Trending";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <SectionHeader />
      <MarketPlace />
      <SectionHeader />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
