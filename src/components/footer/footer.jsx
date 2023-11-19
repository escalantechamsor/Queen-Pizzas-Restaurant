import React from "react";
import contact from "../../assets/imgs/footer/contact.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import salad from "../../assets/imgs/footer/salad.png";
import camarones from "../../assets/imgs/footer/camarones.png";
import { Slide } from "react-awesome-reveal";

function FooterSection() {
  const iconstyle =
    "w-[20%] h-16 hover:text-yellow-500 transition-all flex items-center justify-center mr-2 text-[1.8rem] text-slate-400";
 const list_styles ='w-full h-[60px] flex items-center justify-between px-2'
    return (
    <footer
    id="footer"
    className="w-full h-[100vh relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center p-2"
  >
     
      <Slide className="lg:flex hidden items-center justify-center "> 
     <img
      className=" object-cover"
      src={camarones}
      alt="Sopa de camarones"
    />
    </Slide>
   
    <article className="h-[70vh] ">
      <div className="w-full h-[13vh] pt-1 flex items-center justify-center">
        <img src={contact} className="h-[100%]  object-cover" alt="" />
      </div>
      <ul className="w-full min-h-[70%] mt-2 flex-col flex items-center justify-center">
        <li className={`${list_styles}`}>
          <span className={`${iconstyle}`}>
            <FaLocationDot />
          </span>
          <p className=" w-[80%] flex-wrap text-lg text-slate-500">
            Street 234 # 456 Reflang Prested. California Avenue.
          </p>
        </li>
        <li className={`${list_styles}`}>
          <span className={`${iconstyle}`}>
            <FaPhoneAlt />
          </span>
          <p className=" w-[80%] flex-wrap text-[1.2rem] text-slate-500">
            (+1) 123-456-789
          </p>
        </li>
        <li className={`${list_styles}`}>
          <span className={`${iconstyle}`}>
            <MdEmail />
          </span>
          <p className=" w-[80%] flex-wrap text-lg text-slate-500">
            examplemail@mail.com
          </p>
        </li>
        <li className={`${list_styles}`}>
          <span className={`${iconstyle}`}>
            <FaClock />
          </span>
          <div className="w-[80%]">
            <p className=" flex-wrap text-lg text-slate-500">
              Monday-Friday: 10:00 am - 7:00 pm.
            </p>
            <p className="flex-wrap text-lg text-slate-500">
              Saturday: 9:00 am - 5:00 pm.
            </p>
          </div>
        </li>
      </ul>
    </article>
    <Slide direction="right" className=" flex items-center justify-center">
     <img src={salad} alt="Spaguettis con camorones" />
    </Slide>
   
  </footer>

  );
}

export default FooterSection;
