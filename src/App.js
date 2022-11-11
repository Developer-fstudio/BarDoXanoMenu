import React from "react";
// eslint-disable-next-line
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurante from "./pages/Restaurante";
import Lounge from "./pages/Lounge";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route index element={<Home />} />
      <Route path="/Restaurante" element={<Restaurante />}/>
      <Route path="/Lounge" element={<Lounge />}>

        
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
