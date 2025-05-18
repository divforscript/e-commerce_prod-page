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


function Current({ pageWidth,itemX,func,funcAtrib }){
  return(
    <button id="current-product-img"
      className="h-full w-full max-w-[420px]"
      onClick={() => {
        if(pageWidth < 769){ func(false); return; }
        func(!funcAtrib)
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
        className={`bg-[#fff] ${extraClasses} 
        ${isShowed? "flex justify-between" : "hidden"}`}
      >
        {thumbsArray.map((img, idx) => (
          <button
            key={img.alt}
            onClick={() => setVarX(idx)}
            aria-label={`Go to image ${idx + 1}`}
            className={`thumb-button border-4
            ${idx === varX? "border-[#ff7d1a]" : "border-[#fff]"}`}
          >
            <img src={img.src} alt={img.alt}
            className={`${idx === varX? "opacity-40" : ""}`}/>
          </button>

        ))}
      </div>
    );
}




export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const [isModalOpen,setIsModalOpen] = useState(true);

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
          pageWidth={getPageWidth()}
          itemX={images[current]}
          func={setIsModalOpen}
          funcAtrib={isModalOpen}
        />
         
        <Thumbnail
          id={"product-thumbnails"}
          isShowed={showThumbs}
          extraClasses={"w-full gap-[1vw]"}
          thumbsArray={imagesThumb} 
          varX={current} 
          setVarX={setCurrent}
        />

        { isModalOpen && (


            <BackgroundInset 
              id={"carousel-inset"} 
              zIndex={"z-50"} 
              top={"top-[-84px]"}
              isOpen={isModalOpen}

              childComponent={
                
                <div id="carousel-preview"
                  className="bg-amber-400
                  w-1/2 px-10
                  flex flex-col justify-center items-center"
                > 

                  <button
                  className="bg-red-400 w-full flex justify-end mb-3"
                  onClick={() => setIsModalOpen(false)}
                  >
                    <img src={iconClose} alt="" 
                      className="size-6 p-1 bg-slate-300 rounded-xl"
                    />
                  </button>

                  <DirectionButtons 
                    prevId={"modal-prev-imgProd-button"}
                    iconPrev={iconPrev}
                    goPrev={goPrev}
                    extraPrevClasses="left-[calc(25vw+20px)]"

                    nextId={"modal-next-imgProd-button"}
                    iconNext={iconNext}
                    goNext={goNext}
                    extraNextClasses="right-[calc(25vw+20px)]"
                  />

                  <Current
                    pageWidth={getPageWidth()}
                    itemX={images[current]}
                    func={setIsModalOpen}
                    funcAtrib={isModalOpen}
                  />


                  <Thumbnail
                    id={"modal-product-thumbnails"}
                    isShowed={showThumbs}
                    extraClasses={"w-3/4 gap-[0.7vw] mt-5"}
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




{/* { isModalOpen && (


            <BackgroundInset 
              id={"carousel-inset"} 
              zIndex={"z-50"} 
              top={"top-[-84px]"}
              isOpen={isModalOpen}

              childComponent={
                <section
                  className="bg-amber-400"
                > 

                  <button
                  className=""
                  onClick={() => setIsModalOpen(false)}
                  >
                    <img src={iconClose} alt="" 
                      className="size-7"
                    />
                  </button>


                  <Thumbnail
                    id={"modal-product-thumbnails"}
                    isShowed={showThumbs}
                    thumbsArray={imagesThumb} 
                    varX={current} 
                    setVarX={setCurrent}
                  />


                </section>
              }
              
            />

              

          )
        
        } */}