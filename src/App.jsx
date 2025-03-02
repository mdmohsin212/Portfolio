import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from './pages/Home';

function App() {
  return( 
  <div>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </div>
  );
}

export default App;
