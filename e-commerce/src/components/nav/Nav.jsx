
import iconMenu from "../../../../asset-template/images/icon-menu.svg"
import logo from "../../../../asset-template/images/logo.svg"
import iconCart from "../../../../asset-template/images/icon-cart.svg"
import imageAvatar from "../../../../asset-template/images/image-avatar.png"


export default function Nav() {
  return (

    <nav className="bg-white p-5 sticky top-0
    w-full h-[70px]
    flex items-center
    ">
      
      <img className="" src={iconMenu} alt="#" />
      <img className="absolute left-[52px]" src={logo} alt="" />

      <img className="absolute right-[68px]" src={iconCart} alt="" />
      <img className="w-7 h-7 absolute right-5" src={imageAvatar} alt="" />

    </nav>

    

  );
}