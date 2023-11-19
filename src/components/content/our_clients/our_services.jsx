import React from "react";
import styles from "./services.module.css";
import { GiCandyCanes } from "react-icons/gi";
import pizzasvg from "../../../assets/imgs/content/services/pizza.svg";
import pastasvg from "../../../assets/imgs/content/services/pastas.svg";
import drinkvg from "../../../assets/imgs/content/services/drink.svg";
import soupvg from "../../../assets/imgs/content/services/soup.svg";
import burguervg from "../../../assets/imgs/content/services/burguer.svg";
import services from "../../../assets/imgs/content/services/categories.png";
function OurServices() {
  const categories = `flex flex-col items-center justify-center cursor-pointer ${styles.categories}`;
  const icons_img = "w-20 h-20 object-cover mb-2";
  return (
    <section className={`w-full min-h-[40vh] my-10 p-3 ${styles}`}>
      <div className="w-full h-[12vh] flex items-center justify-center">
        <img
          src={services}
          className="h-[12vh] w-[250px]"
          alt="Categories banner"
        />
      </div>
      <section className="w-[80%] mx-auto min-h-[30vh] mt-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 ">
        <div className={`${categories}`}>
          <img className={`${icons_img}`} src={pizzasvg} alt="Logo de pizza" />
          <p className="text-[1.5rem] uppercase font-medium">Pizzas</p>
        </div>
        <div className={`${categories}`}>
          <img
            className={`${icons_img}`}
            src={pastasvg}
            alt="Cubiertos y plato"
          />
          <p className="text-[1.5rem] uppercase font-medium">Pastas</p>
        </div>
        <div className={`${categories}`}>
          <img className={`${icons_img}`} src={drinkvg} alt="Logo de bebidas" />
          <p className="text-[1.5rem] uppercase">Drinks</p>
        </div>
        <div className={`${categories}`}>
          <img className={`${icons_img}`} src={soupvg} alt="Logo de sopa" />
          <p className="text-[1.5rem] uppercase">Soup</p>
        </div>
        <div className={`${categories}`}>
          <span className="flex items-center justify-center w-24 h-24 text-[4rem] pt-2">
            <GiCandyCanes />
          </span>
          <p className="text-[1.5rem] uppercase">Candies</p>
        </div>
        <div className={`${categories}`}>
          <img
            className={`${icons_img}`}
            src={burguervg}
            alt="Logo de hamburguesa"
          />
          <p className="text-[1.5rem] uppercase ">Burguers</p>
        </div>
      </section>
    </section>
  );
}

export default OurServices;
