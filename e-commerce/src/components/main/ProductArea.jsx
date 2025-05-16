
import "./ProductArea.css"


const productDetails = {
  manufacturer: "SNEAKER COMPANY",
  name: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  originalPrice: 250,
  discount: 50,
}

function getFinalPrice(original,disc){
  return 0.01 * original * disc;
}

export default function ProductArea() {
  
  return(
    <section id="main-product-area"
      className="px-6 py-7 font-bold flex flex-col gap-4
      w-full
      min-h-[350px]"
    >

      <h2 id="company-name"
      className="text-[#68707d] tracking-[2px]">
        {productDetails.manufacturer}
      </h2>

      <h1 id="product-name"
      className="text-[#1d2025] leading-9">
        {productDetails.name}
      </h1>

      <p id="product-description"
      className="font-normal text-[#68707d]">
        {productDetails.description}
      </p>

      <div id="product-pricing"
      className="flex
      w-full">

        <div id="price-and-discount"
        className="flex gap-[5vw] items-center
        w-[70%]">
          <span className="text-[28px]">
            {"$".concat(getFinalPrice(productDetails.originalPrice,productDetails.discount).toFixed(2))}
          </span>
            
          <span className="bg-black text-white text-[20px] rounded-lg
          flex items-center justify-center 
          w-[72px] h-[36px]">
            {productDetails.discount + "%"}
          </span>
        </div>

        <div id="original-price"
        className={`text-[18px] text-[#68707d] 
        flex justify-end items-center ${productDetails.discount>0? "line-through decoration-[2px]" : ""} 
        w-1/2`}>
          {"$".concat(productDetails.originalPrice.toFixed(2))}
        </div>

      </div>

      
        
    </section>
  );
}