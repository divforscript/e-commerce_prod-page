import { useState } from "react";

import BackgroundInset from "../backInset/BackgroundInset";

import "../shoppingCart/ShoppingCart.css"

import iconDelete from "../../../../asset-template/images/icon-delete.svg"


import prueba1 from "../../../../asset-template/images/image-product-1.jpg"

const availableProds = [
  {
    id: 1,
    url: "../../../../asset-template/images/image-product-1.jpg",
    manufacturer: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers - Type 1",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    originalPrice: 250,
    discount: 50,

  },

  {
    id: 2,
    url: "../../../../asset-template/images/image-product-2.jpg",
    manufacturer: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers - Type 1",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    originalPrice: 120,
    discount: 20,

  },

  {
    id: 3,
    url: "../../../../asset-template/images/image-product-3.jpg",
    manufacturer: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers - Type3",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    originalPrice: 450,
    discount: 10,

  },

  {
    id: 4,
    url: "../../../../asset-template/images/image-product-4.jpg",
    manufacturer: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers - Type 4",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    originalPrice: 160,
    discount: 45,

  }
]

const addedItems = [
  {...availableProds[0],cantidad: 3},
  {...availableProds[1],cantidad: 5},
  {...availableProds[2],cantidad: 5},
  {...availableProds[3],cantidad: 5},
]


function ItemsOnCart({ itemsArray }) {
  return(
    <div
      className="bg-amber-400 overflow-y-auto pr-1
      w-full
      min-h-[100px] max-h-[calc(70vh-210px)]
      "
    > 
      {
        itemsArray.map((item,idx) => {
          return(
            <div
              id={idx}
              key={item.id}
              className="flex justify-between items-center mb-4
              w-full"
            >
              <img src={prueba1} alt=""
                className="size-14 rounded-lg" 
              />

              <div
                className="bg-indigo-400 px-3 text-[#68707d] text-[12px]
                w-[70%]"
              >
                <span>{item.name}</span>

                <div
                  className="flex gap-2"
                >
                  <span>
                    {"$".concat((item.originalPrice * (100 - item.discount) * 0.01).toFixed(2))} x {item.cantidad}
                  </span>
                  
                  <span
                    className="font-bold text-[#000] ml-1"
                  >
                    {"$".concat((item.originalPrice * (100 - item.discount) * 0.01 * item.cantidad).toFixed(2))}
                  </span>
                </div>
                
              </div>

              <button
                className="bg-sky-800"
              >
                <img src={iconDelete} alt=""
                  className="h-5 w-4" 
                />
              </button>
            </div>
          );
        })
      }
      

    </div>
  );
}



export default function ShoppingCart({ isOpen }) {
  
  const [isWithItems,setIsWithItems] = useState(true)
  
  if (!isOpen) return null; // Do not render if the cart is closed

  return (

    <div id="cart-box"
      className="absolute top-[76px]
      rounded-xl z-20 overflow-hidden
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
          ? < ItemsOnCart itemsArray={addedItems} /> 
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




