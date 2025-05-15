import { useState } from "react";

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





export default function Main() {
  
  
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((prev) => prev === 0 ? imagesMaxIdx : prev - 1 );
  const goNext = () => setCurrent((prev) => prev === imagesMaxIdx ? 0 : prev + 1);

  

  return (
    <main
      id="main"
      className="bg-violet-400 flex flex-col items-center 
      w-full"
    >
      <div id="carousel-section"
      className="relative bg-amber-400
      flex items-center justify-center
      w-full max-w-[460px]
      h-[360px]"
      aria-label="Product image carousel">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="object-cover w-full h-full"
        />
        
        {/* Prev Button */}
        <button
          onClick={goPrev}
          aria-label="Previous product image"
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white
          size-9 pl-[10px] flex items-center 
          rounded-full shadow transition hover:bg-gray-100`}
        >
          <img 
            src={iconPrev} alt="previous-icon" 
            className="w-[10px]"
          />
        </button>


        {/* Next Button */}
        <button
          onClick={goNext}
          aria-label="Next product image"
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white 
          size-9 pl-[13px] flex items-center
          rounded-full shadow transition hover:bg-gray-100`}
        >
          <img 
            src={iconNext} alt="next-icon" 
            className="w-[11px]"
          />
        </button>
      </div>



      <div className="bg-amber-400 hidden">
        {imagesThumb.map((img, idx) => (
          <button
            key={img.alt}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
          >
            <img src={img.src} alt={img.alt} />
          </button>

        ))}
      </div>
    </main>
  );
}






