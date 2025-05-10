import { useState } from "react"

import iconMenu from "../../../../asset-template/images/icon-menu.svg"
import sneakersLogo from "../../../../asset-template/images/logo.svg"
import iconCart from "../../../../asset-template/images/icon-cart.svg"
import imageAvatar from "../../../../asset-template/images/image-avatar.png"

import "./Header.css"

const root = document.getElementById("root")

const iconCartPath = "M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"

const iconClosePath = "m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"




export default function Header() {
  
  let [isNavMobColOpen,setIsNavMobColOpen] = useState(false)

  let [handleBackInset,setHandleBackInset] = useState("hidden")
  
  let [navColPosition,setNavColPosition] = useState("left-[-250px]")


  function showNavMobileColumn() {
    root.classList.remove("overflow-auto");
    root.classList.add("overflow-hidden");
    

    setHandleBackInset("");
    setNavColPosition("left-[0px]");
  }

  function closeNavMobileColumn() {
    root.classList.remove("overflow-hidden");
    root.classList.add("overflow-auto");

    setHandleBackInset("hidden");
    setNavColPosition("left-[-250px]");
  }

  
  return (

  
    <header className="bg-white p-5 z-2
    sticky top-0
    w-full h-[75px]
    flex items-center
    ">

      <div id="background-inset" 
      className={`bg-black opacity-75 h-screen absolute inset-0 z-20 ${handleBackInset}`}
      onClick={closeNavMobileColumn}>
      </div>
      
      <nav id="nav-mobileColumn" 
      className={`nav-mobileColumn bg-white text-black overflow-auto absolute top-0 z-30
      transition-[left] duration-700 ${navColPosition}
      w-[250px]
      h-screen`}>
        
        <div id="nav-closeIcon-div" 
        className="p-5 flex items-center
        w-full h-[75px]">

          <div className="bg-slate-300 size-7 flex justify-center items-center rounded-full
          hover:cursor-pointer"
          onClick={closeNavMobileColumn}>

            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15">
              <path d={iconClosePath} fill="#69707D" fill-rule="evenodd"/>
            </svg>
          </div>
          
        </div>
        

        <div className="overflow-auto pb-5
        w-full
        h-[calc(100%-75px)]">
          <ul id="nav-links-div" 
          className="px-5 font-bold text-[#1d2025]">
            <li className="nav-items"><a href="#">Collections</a></li>
            <li className="nav-items"><a href="#">Men</a></li>
            <li className="nav-items"><a href="#">Women</a></li>
            <li className="nav-items"><a href="#">About</a></li>
            <li className="nav-items"><a href="#">Contact</a></li>
          </ul>
        </div>

        

      </nav>


      <img id="iconMenu" src={iconMenu} alt="#"
      onClick={showNavMobileColumn}/>


      <img src={sneakersLogo} alt="e-commerce-Logo" 
      className="absolute left-[56px] z-0" />


      <svg className="absolute right-[68px]" xmlns="http://www.w3.org/2000/svg" width="22" height="20">
        <path d={iconCartPath} fill="#69707D" fill-rule="nonzero"/>
      </svg>


      <img src={imageAvatar} alt="user-avatar" 
      className="w-7 h-7 absolute right-5" />

    </header>

    

  );
}






{/* <ul id="nav-links-div" 
        className="bg-emerald-300 px-5 font-bold text-[#1d2025] sticky top-10
        h-min-[435px] h-[100%]">
          <li className="nav-items"><a href="#">Collections</a></li>
          <li className="nav-items"><a href="#">Men</a></li>
          <li className="nav-items"><a href="#">Women</a></li>
          <li className="nav-items"><a href="#">About</a></li>
          <li className="nav-items"><a href="#">Contact</a></li>
        </ul> */}
