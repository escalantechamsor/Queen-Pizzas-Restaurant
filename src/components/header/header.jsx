import React from "react";
import pizzahero from "../../assets/imgs/header/heropizza.png";
import banner from "../../assets/imgs/header/gracefull.png";
const HeaderSection = () => {
  const button_style =
    "w-[225px] h-[60px] bg-yellow-500 uppercase text-[1.3rem] font-medium rounded-sm shadow-xl m-2 transition-all hover:bg-green-500 hover:shadow-2xl text-slate-200";
  return (
    <section
      className={`w-full lg:h-[100vh] min-h-[80vh] bg-gray-50 flex items-center lg:flex-row flex-col relative `}
    >
      <secttion className="lg:w-[50%] w-full min-h-[50vh] lg:h-[100vh] flex items-center flex-col p-3 pt-5">
        <img src={banner} alt="Gracefull Dinner" />
        <h3 className="lg:w-[90%] w-full mx-auto p-3 text-lg text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa
          modi assumenda? Sapiente, omnis harum.
        </h3>

        <div className="w-[90%] min-h-[14vh] flex items-center lg:justify-start md:justify-center md:flex-row flex-col">
          <button className={`${button_style}`}>Order now</button>
          <button className={`${button_style}`}>Check plates</button>
        </div>
      </secttion>
      <img
        className="lg:w-[50%] lg:flex hidden w-full lg:h-[100vh] object-cover lg:scale-100 md:scale-75"
        src={pizzahero}
        alt="Imagen de una pizza con tomates y champiñones"
      />
    </section>
  );
};

export default HeaderSection;
