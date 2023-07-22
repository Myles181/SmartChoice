
import './App.css';
import Header from './Components/Header';
import SectionHeader from './Components/SectionHeader';
import Footer from './Components/Footer.js';
import MarketPlace from './Components/MarketPlace';
import Trending from './Components/Trending';
import HeroSection from './Components/HeroSection';
import HeaderAlt from './Components/HeaderAlt';
import { Routes, Route} from 'react-router-dom'
import ResultPage from './Components/ResultPage';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      {/* <HeaderAlt /> */}
      {/* <HeroSection /> */}
      {/* <SectionHeader tittle="Marketplace" tittleBtn="Compare More" /> */}
      {/* <MarketPlace /> */}
      {/* <SectionHeader tittle="Trending-Products" tittleBtn="More Products" /> */}
      {/* <Trending /> */}
      {/* <Footer /> */}
      <Routes>
        {/* <Route path='/:id' element={<><Footer /></>} /> */}
        <Route path='/result' element={<><Header /><HeaderAlt /><ResultPage /><Footer /></>}/>
        <Route path='/' element={<><HomePage /></>} />
      </Routes>
    </div>

  );
}

export default App;
