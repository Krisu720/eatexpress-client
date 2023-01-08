import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Main from "./scenes/Main";
import Restaurant from "./scenes/Restaurant";
import Authentication from "./scenes/Authentication";
import { BrowserRouter,  Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./scenes/global/Nav";
import Footer from "./scenes/global/Footer";
import Helpers from "./scenes/global/Helpers";
import Settings from "./scenes/Settings";
import { useAuthStore } from "./hooks/useAuth";


function App() {

  const {user} = useAuthStore()


  return (
    <div className="bg-gray-100  poppins">
        {/* <Helpers /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/:id"} element={<Restaurant />} />
          <Route path={"/login"} element={user ? <Navigate to='/'/> :<Authentication />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
