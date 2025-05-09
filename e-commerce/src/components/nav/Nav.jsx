
import iconMenu from "../../../../asset-template/images/icon-menu.svg"
import logo from "../../../../asset-template/images/logo.svg"
import iconCart from "../../../../asset-template/images/icon-cart.svg"
import imageAvatar from "../../../../asset-template/images/image-avatar.png"


export default function Nav() {
  return (

    <nav className="bg-white sticky
    w-full h-25
    ">
      <img src={iconMenu} alt="#" />
      <img src={logo} alt="" />

      <img src={iconCart} alt="" />
      <img src={imageAvatar} alt="" />


      

    </nav>

    
// 
  );
}