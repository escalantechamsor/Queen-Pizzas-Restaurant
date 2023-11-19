import React from "react";
import styles from "./banner2.module.css";
import plate from "../../../assets/imgs/content/banner2/platepizza.png";
import meal from "../../../assets/imgs/content/banner2/meal.png";
import dinner from "../../../assets/imgs/content/banner2/pasta.webp";
import burguer from "../../../assets/imgs/content/banner2/dark_burguer.png";
function Banner2() {
  return (
    <section className="w-full min-h-[120vh] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    <article className=" md:h-[60vh] p-7">
      <div className="text-[1.2rem] uppercase flex items-center">
        Get <p className="ml-2 text-yellow-500 text-[2rem]">20% off</p>
      </div>
      <h3 className="lg:text-[2.2rem] text-[1.8rem] my-2 uppercase font-bold text-slate-700">
        Variety clasic
      </h3>
      <h3 className="lg:text-[3.2rem] text-[2.5rem] uppercase font-bold text-slate-700">
        Burguers
      </h3>
      <p className="text-lg w-full my-2 text-slate-500 lg:p-2 p-[5px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci
        voluptatibus doloremque! Tempore, blanditiis iste.
      </p>
    </article>
    <img
      className="md:h-[60vh] object-cover m-auto lg:flex hidden"
      src={plate}
      alt="Pizza con diversos ingredientes"
    />
    <img
      className="h-[50vh] scale-150 object-cover m-auto lg:hidden flex"
      src={burguer}
      alt="Hamburguesa con lechuga y pepinillos"
    />
    <article className=" md:h-[60vh] p-7">
      <div className="text-[1.1rem] uppercase flex items-center">
        from <p className="ml-2 text-yellow-500 text-[2rem]">$10</p>
      </div>
      <h3 className="lg:text-[1.3rem] text-[1.3rem] my-2 uppercase font-bold text-slate-700">
        Meat and sea food
      </h3>
      <h3 className="lg:text-[2.8rem] text-[2rem] uppercase font-bold text-slate-700">
        SEASON SOUP
      </h3>
      <p className="text-[1.1rem] w-full my-2 text-slate-500 p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci
        voluptatibus doloremque! Tempore, blanditiis iste.
      </p>
    </article>
    <article className=" lg:h-[60vh] h-[50vh] overflow-hidden flex items-center justify-center">
      <img
        className="h-[50vh] scale-150 object-cover m-auto lg:flex hidden"
        src={burguer}
        alt="Hamburguesa"
      />
      <img
        className="h-[60vh] scale-150 pb-3 object-cover flex lg:hidden"
        src={meal}
        alt="Ensalada con churascos"
      />
    </article>
    <article className=" md:h-[60vh] p-7 ">
      <div className="text-[1.2rem] uppercase flex items-center pl-4">
        from <p className="ml-2 text-yellow-500 text-[2rem]">$3</p>
      </div>
      <h3 className="lg:text-[2.2rem] text-[1.8rem] my-2 uppercase font-bold text-slate-700 pl-4">
        Italian food
      </h3>
      <h3 className="lg:text-[3.2rem] text-[2.5rem] uppercase font-bold text-slate-700 pl-4">
        Pastas
      </h3>
      <p className="text-[1.1rem] w-full my-2 text-slate-500 px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci
        voluptatibus doloremque! Tempore.
      </p>
    </article>
    <img
      className="md:h-[60vh] object-cover m-auto"
      src={dinner}
      alt="Plato con spaguettis"
    />
  </section>
  );
}

export default Banner2;

