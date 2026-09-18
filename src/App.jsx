import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import CondRen1 from "./Components/CondRen1";
import CondRend2 from "./Components/CondRend2.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import ProdCard from "./Components/ProdCard.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
    
      {/* <CondRen1 /> */}
      <CondRend2 />
      <Footer/>
    </>
  );
}

export default App;
