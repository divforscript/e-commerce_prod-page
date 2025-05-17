import { useState } from "react";

import BackgroundInset from "../backInset/BackgroundInset";

import "../shoppingCart/ShoppingCart.css"




function ItemsOnCart() {
  return(
    <div
      className="bg-amber-400 overflow-auto
      max-h-[calc(70vh-200px)]
      "
    >
      esto es un item

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolorum amet veniam. Molestiae voluptatum ipsam maxime tempore perspiciatis eligendi deserunt omnis animi, eveniet aperiam autem, beatae eius rem? Minima, velit.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed facere dolore qui inventore eius corrupti molestiae perspiciatis alias, illum ipsam numquam possimus distinctio fugit iste hic! Amet, est vero!


      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aspernatur enim dolore ducimus quas earum nobis, quo placeat maxime labore perspiciatis? Natus enim adipisci consequatur ipsa, sapiente nesciunt consectetur in!

      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia expedita, magni blanditiis natus soluta in, repellendus minus quis id modi earum illo dolore possimus aliquid quo dolores architecto dicta saepe!

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at hic nesciunt, ipsum enim soluta vero eos optio facilis amet numquam incidunt maiores quo exercitationem, praesentium ea non. Delectus, in FIN FIN.


    </div>
  );
}





export default function ShoppingCart({ isOpen }) {
  
  const [isWithItems,setIsWithItems] = useState(true)
  
  if (!isOpen) return null; // Do not render if the cart is closed

  return (

    <div id="cart-box"
      className="bg-red-400 fixed top-20 left-0 overflow-hidden
      rounded-xl z-20 ml-[3vw]
      w-[94%]
      min-h-[260px] h-auto"
    >
      
      <h2 id="cart-title"
        className="text-[black] text-lg font-bold bg-emerald-400
        border-b-2 border-b-[#e4e5e9] p-6
        w-full h-16"
      >
        Cart
      </h2>
      
      <div id="cart-items-box"
        className="relative p-6 bg-sky-300 flex flex-col justify-between gap-4
        w-full
        min-h-[196px]"
      >

        { isWithItems 
          ? < ItemsOnCart/> 
          : <p className="text-gray-600 font-bold text-lg
            w-full h-32 flex justify-center items-center"
            >
              Your cart is empty.
            </p>
        }

        { isWithItems && (
            <button
              className="bg-[#ff7d1a] rounded-lg font-bold
              w-full h-12"
            >
              Checkout
            </button>
          )
        }
          
      </div>
      
    
    </div>

  );
}




