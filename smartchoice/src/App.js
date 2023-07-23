import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer.js";
import HeaderAlt from "./Components/HeaderAlt";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./Components/ResultPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/result"
          element={
            <>
              {/* <Header />
              <HeaderAlt /> */}
              <ResultPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
