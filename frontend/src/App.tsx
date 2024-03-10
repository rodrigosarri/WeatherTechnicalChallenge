import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import { Home, Searches } from "src/pages";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscas" element={<Searches />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
