// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Brands from "./components/Brands/Brands";
import CarouselComponent from "./components/Carousel/Carousel";
import Sales from "./components/Sales/Sales";
import Product from "./components/Product/Product";
import New_Product from "./components/New_Product/New_Product";
import Footer from "./components/Footer/Footer";
import Footer_iki from "./components/Footer_iki/Footer_iki";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Brands />
      <CarouselComponent />
      <Sales />
      <Product/>
      <New_Product/>
      <Footer/>
      <Footer_iki/>
    </div>
  );
}

export default App;
