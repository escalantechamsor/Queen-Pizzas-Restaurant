import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/navbar/logo.png";
const NavBar = () => {
  const navstyle =
    "w-full h-[18vh] sticky top-0 left-0 bg-slate-50 bg-opacity-80 md:px-12 px-4 text-slate-800 flex items-center justify-between z-50";
  const list_items = "mr-5 hover:text-slate-800 transition-all cursor-pointer";
  return (
    <nav className={`${navstyle}`}>
      <div className="w-[300px] h-[20vh] flex items-center justify-center ">
        <img
          className="w-full h-[100%] object-contain"
          src={logo}
          alt="Logo del negocio"
        />
      </div>
      <ul className="hidden items-center text-[1.5rem] text-slate-500 font-medium lg:flex">
        <a href="/#header">
          <li className={`${list_items}`}>Home</li>
        </a>
        <a href="/#products">
          <li className={`${list_items}`}>Products</li>
        </a>
        <a href="/#about">
          <li className={`${list_items}`}>About</li>
        </a>
        <a href="/#footer">
          <li className={`${list_items}`}>Contact Us</li>
        </a>
      </ul>
      <button className="flex lg:hidden w-12 h-12 items-center justify-center text-[1.8rem]">
        <AiOutlineMenu />
      </button>
    </nav>
  );
};

export default NavBar;
