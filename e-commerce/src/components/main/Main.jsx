import { useState } from "react";


import "./Main.css"

import Carousel from "./Carousel";
import ProductArea from "./ProductArea";
import AddToCart from "./AddToCart";



export default function Main() {
  

  return (
    <main
      id="main-wrapper"
      className="flex flex-col items-center
      w-full"
    > 
      <Carousel />

      <ProductArea />

      <AddToCart />

    </main>
  );
}






