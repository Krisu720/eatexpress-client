import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Main from "./scenes/Main";
import Restaurant from "./scenes/Restaurant";
import Authentication from "./scenes/Authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./scenes/global/Nav";
import Footer from "./scenes/global/Footer";
function App() {
  return (
    <div className="bg-gray-100  poppins">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/:id"} element={<Restaurant />} />
          <Route path={"/login"} element={<Authentication />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
