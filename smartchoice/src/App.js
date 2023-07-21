import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Home />
              </React.Suspense>
            }
          />

          <Route
            eaxct
            path="/result"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Result />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Home />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
