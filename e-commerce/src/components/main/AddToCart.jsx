
import "./AddToCart.css"


const cartIconPath = "M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"

import minusIcon from "../../../../asset-template/images/icon-minus.svg"
import plusIcon from "../../../../asset-template/images/icon-plus.svg"

export default function AddToCart() {
  return(
    <div id="box-add-to-cart"
      className="bg-white px-6 font-bold flex flex-col gap-4
      w-full
      min-h-[160px]"
    >
      
      <div id="items-quantity-input"
      className="h-[60px] relative flex items-center">
        <img src={minusIcon} alt="" 
        className="absolute left-6 w-4"/>

        <img src={plusIcon} alt="" 
        className="absolute right-6 w-4"/>

        <input type="text"
        disabled
        value={0}
        placeholder="0"
        className="bg-[#edeef3] rounded-xl
        text-[22px] text-[#000] text-center 
        outline-none w-full h-full
        "/>

      </div>
      

      <button
      className="bg-[#ff7d1a] rounded-xl 
      flex items-center justify-center gap-4
      h-[60px]
      w-full">

        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20">
          <path d={cartIconPath} fill="#000" fill-rule="nonzero"/>
        </svg>

        <span
        className="text-[18px]">
          Add to cart
        </span>
      </button>
    </div>
  );
}