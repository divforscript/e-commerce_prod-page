

export default function BackgroundInset({ 
  id="page-inset",
  // isOpen=false,
  top="top-0",
  left="left-0",
  zIndex="z-50",
  align="items-center",
  closeNavMob=()=>{},
  childComponent={} }) {


  return(
    <div
      id={id}
      className={`bg-[hsl(0,0%,0%,0.75)] 
      w-[100vw] h-[100vh] absolute inset-0
      flex flex-col justify-center ${align}
      ${top} ${left} ${zIndex}`}
      // ${isOpen? "inline" : "hidden"}
      
      
      onClick={closeNavMob}
    >
      {childComponent}
    </div>
  );
}