import "./header.scss";
import NavLink from "../links/NavLink.jsx"
import {nav_icon, notif_icon} from "../../icons/svgs"
import { useState } from "react";

let headerRedirect = ["Dashboard","Students","Grades","Subject"]
const userImg = "https://freesvg.org/img/abstract-user-flat-1.png"
const logo = "https://prismamexico.files.wordpress.com/2016/01/logouttbig.png"
// https://calificaciones.uttijuana.edu.mx/portal-alumnos/_nuxt/img/logo_cherry.970f90f.png

const Header = () => {
    const [active, setActive] = useState("Overview")
  return (
    <div className="items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3">
      {/*Logo</*/}
      <div className="border-b border-gray-900 w-[25%] 
      flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start">
        
      <img
      className="md:w-15 md:h-12 w-15 h-10"
      src={logo}
      alt="logo"></img>



      </div>
        
        {/* navlink */}
        
      <div className="border-b pb-5 border-gray-900 w-[140%] items-center 
      justify-center flex space-x-2">

      {headerRedirect.map((link)=> (
        <div onClick={()=>setActive(link)} 
        className="relative items-center justify-center flex">
          <NavLink title={link} key={link}/>

          <div className={` ${active === link 
          ? "items-center justify-center flex absolute -bottom-3" 
          : "hidden" } `} >
            {nav_icon}
          </div>

        </div>
      ))}

      </div>

        {/* Loginpart */}
      <div className="border-b border-gray-900 pb-6 pt-4 hidden md:flex 
      items-center justify-center px-3 space-x-6 w-[60%]">
        <div>{notif_icon}</div>

        <img
      src={userImg}
      alt="userImage"
      className="w-8 h-8 rounded-full object-center object-cover">
      </img>

      </div>

    </div>
  );
};
export default Header;
