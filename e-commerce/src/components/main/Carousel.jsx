import { useState } from "react";

import "./Carousel.css"

import BackgroundInset from "../backInset/BackgroundInset";



import iconClose from "../../../../asset-template/images/icon-close.svg";

import img1 from "../../../../asset-template/images/image-product-1.jpg";
import img1Thumb from "../../../../asset-template/images/image-product-1-thumbnail.jpg";

import img2 from "../../../../asset-template/images/image-product-2.jpg";
import img2Thumb from "../../../../asset-template/images/image-product-2-thumbnail.jpg";

import img3 from "../../../../asset-template/images/image-product-3.jpg";
import img3Thumb from "../../../../asset-template/images/image-product-3-thumbnail.jpg";

import img4 from "../../../../asset-template/images/image-product-4.jpg";
import img4Thumb from "../../../../asset-template/images/image-product-4-thumbnail.jpg";


import iconPrev from "../../../../asset-template/images/icon-previous.svg"
import iconNext from "../../../../asset-template/images/icon-next.svg"

const iconClosePath =
  "m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z";


const images = [
  { src: img1, alt: "Product view 1" },
  { src: img2, alt: "Product view 2" },
  { src: img3, alt: "Product view 3" },
  { src: img4, alt: "Product view 4" },
];

const imagesThumb = [
  { src: img1Thumb, alt: "Product thumbnail view 1" },
  { src: img2Thumb, alt: "Product thumbnail view 2" },
  { src: img3Thumb, alt: "Product thumbnail view 3" },
  { src: img4Thumb, alt: "Product thumbnail view 4" },
]

const imagesMaxIdx = images.length - 1




// CORREGIR MALA PRÁCTICA
const root = document.getElementById("root");

function openProductModal() {
  root.classList.remove("overflow-auto");
  root.classList.add("overflow-hidden");
}



let pageWidth = 0

function getPageWidth() {
  return Number(window.getComputedStyle(root).getPropertyValue("width").replace("px",""));
}





function DirectionButtons({ 
  prevId,extraPrevClasses="",iconPrev,goPrev,
  nextId,extraNextClasses="",iconNext,goNext }) {


  return(
    <>
      {/* Prev Button */}
      <button id={prevId}
        onClick={goPrev}
        aria-label="Previous product image"
        className={`left-4 bg-white absolute ${extraPrevClasses}
        size-9 pl-[10px] flex items-center 
        rounded-full shadow transition hover:bg-gray-100`}
      >
        <img 
          src={iconPrev} alt="previous-icon" 
          className="w-[10px]"
        />
      </button>

      {/* Next Button */}
      <button id={nextId}
        onClick={goNext}
        aria-label="Next product image"
        className={`right-4 bg-white absolute ${extraNextClasses}
        size-9 pl-[13px] flex items-center
        rounded-full shadow transition hover:bg-gray-100`}
      >
        <img 
          src={iconNext} alt="next-icon" 
          className="w-[11px]"
        />
      </button>
    </>
  );
}


function Current({ id,pageWidth,itemX,func,funcParameter }){
  return(
    <button id={id}
      className={`h-auto w-full max-w-[720px] overflow-hidden`}
      onClick={() => {
        if(pageWidth < 769){ func(false); return; }
        func(!funcParameter)
      }}
    >
      <img
        src={itemX.src}
        alt={itemX.alt}
        className="h-full w-full object-cover"
      />

    </button>
  );
}


function Thumbnail({ id,extraClasses,isShowed,thumbsArray,varX,setVarX }){
    return(
      <div id={id}
        className={` ${extraClasses} 
        ${isShowed? "flex justify-between" : "hidden"}`}
      >
        {thumbsArray.map((img, idx) => (
          <button
            key={img.alt}
            onClick={() => setVarX(idx)}
            aria-label={`Go to image ${idx + 1}`}
            className={`bg-[#fff] h-[90%] rounded-2xl overflow-hidden
            ${idx === varX? "border-4 border-[#ff7d1a]" : ""}`}
          >
            <img src={img.src} alt={img.alt}
            className={`h-full ${idx === varX? "opacity-40" : ""}`}/>
          </button>

        ))}
      </div>
    );
}




export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const [isModalOpen,setIsModalOpen] = useState(false);

  const [showThumbs,setShowThumbs] = useState(getPageWidth() < 769 ? false : true)

  const goPrev = () => setCurrent((prev) => prev === 0 ? imagesMaxIdx : prev - 1 );
  const goNext = () => setCurrent((prev) => prev === imagesMaxIdx ? 0 : prev + 1);


  window.onresize = () =>{
    pageWidth = getPageWidth();


    if(pageWidth < 769) {
      setShowThumbs(false)
      setIsModalOpen(false)
      return
    }

    setShowThumbs(true)
  }


  return(
    <div id="carousel-section"
      className="relative bg-slate-200
      flex flex-col justify-center items-center
      w-full 
      h-[320px]"
      aria-label="Product image carousel"
    > 
 
        <DirectionButtons 
          prevId={"prev-imgProd-button"}
          iconPrev={iconPrev}
          goPrev={goPrev}

          nextId={"next-imgProd-button"}
          iconNext={iconNext}
          goNext={goNext}
        />

        <Current
          id={"current-product-img"}
          pageWidth={getPageWidth()}
          itemX={images[current]}
          func={setIsModalOpen}
          funcParameter={isModalOpen}
        />
         
        <Thumbnail
          id={"product-thumbnails"}
          isShowed={showThumbs}
          extraClasses={"w-full gap-[2vw]"}
          thumbsArray={imagesThumb} 
          varX={current} 
          setVarX={setCurrent}
        />

        { isModalOpen && (


            <BackgroundInset 
              id={"carousel-inset"} 
              extraClasses="min-h-[480px] z-50 items-center top-[-84px]"
              
              childComponent={
                
                <div id="carousel-preview"
                  className="px-10 flex flex-col justify-center items-center
                  min-w-[500px] w-1/2 max-w-[600px]"
                > 

                  <button
                  className="w-full max-w-[600px] flex justify-end mb-3"
                  onClick={() => setIsModalOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15">
                      <path d={iconClosePath} fill="#fff" fillRule="evenodd" />
                    </svg>
                  </button>

                  <DirectionButtons 
                    prevId={"modal-prev-imgProd-button"}
                    iconPrev={iconPrev}
                    goPrev={goPrev}
                    extraPrevClasses={`left-[calc(50vw-250px+20px)] top-[max(260px,calc(50vh-50px))]`}

                    nextId={"modal-next-imgProd-button"}
                    iconNext={iconNext}
                    goNext={goNext}
                    extraNextClasses="right-[calc(50vw-250px+20px)] top-[max(260px,calc(50vh-50px))]"
                  />

                  <Current
                    id={"modal-current-product-img"}
                    pageWidth={getPageWidth()}
                    itemX={images[current]}
                  />


                  <Thumbnail
                    id={"modal-product-thumbnails"}
                    isShowed={showThumbs}
                    extraClasses={"w-3/4 gap-[1.5vw] mt-5"}
                    thumbsArray={imagesThumb} 
                    varX={current} 
                    setVarX={setCurrent}
                  />


                </div>
              }
              
            />

              
          )

        }



    </div>
  );
  
}



