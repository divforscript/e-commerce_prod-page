

export default function BackgroundInset({ 
  id="page-inset",
  // isOpen=false, comentado con anterioridad
  // top="top-0",
  // left="left-0",
  // zIndex="z-50",
  // align="items-center",
  extraClasses="items-center top-0 left-0 z-50",
  closeNavMob=()=>{},
  childComponent={} }) {


  return(
    <div
      id={id}
      className={`bg-[hsl(0,0%,0%,0.90)]
      w-[100vw] min-h-[620px] h-[100vh] absolute inset-0 overflow-auto
      flex flex-col justify-center
      ${extraClasses}`}
      
      onClick={closeNavMob}
    >
      {childComponent}
    </div>
  );
}