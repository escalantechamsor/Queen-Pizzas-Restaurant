import React from "react";
import pizza3 from "../../../assets/imgs/content/banner1/pizza3.png";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiBurger } from "react-icons/ci";
import { MdDiversity2 } from "react-icons/md";
import { CiPalette } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { CiDollar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
function Banner1() {
  const spam_s =
    "mx-1 flex items-center justify-center text-yellow-500 text-[0.99rem]";
  const service_style =
    "w-16 h-16 flex items-center justify-center md:text-[3rem] text-[2.3rem] hover:text-yellow-500 transition-all cursor-pointer";
  return (
    <section className="w-full flex flex-col md:flex-row mt-7 min-h-[100vh]">
      <div className="w-full min-h-[40vh] md:h-[90vh] md:w-[50%] flex items-center justify-center ">
        <Slide damping={1.5}>
          <img
            src={pizza3}
            className="lg:h-[90vh] w-full object-cover"
            alt="Pizza de queso"
          />
        </Slide>
      </div>
      <section className="w-full min-h-[50vh] md:h-[90vh] md:w-[50%] flex items-center justify-center flex-col ">
        <div className="w-full mt-5 flex items-center md:justify-start px-3">
          <h2 className="uppercase lg:text-[2.4rem] text-[1.9rem] lg:mt-0 font-bold md:text-left text-center text-slate-700 mr-3">
            Best services and prices
          </h2>
        </div>
        <div className="w-full h-[7vh] my-2 flex items-center lg:px-2 px-4">
          <span className={`${spam_s}`}>
            <FaStar />
          </span>
          <span className={`${spam_s}`}>
            <FaStar />
          </span>
          <span className={`${spam_s}`}>
            <FaStar />
          </span>
          <span className={`${spam_s}`}>
            <FaStar />
          </span>
          <span className={`${spam_s}`}>
            <FaStarHalfAlt />
          </span>
        </div>
        <p className="lg:text-lg lg:px-2 px-3 my-2 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          aliquid quaerat numquam inventore quia blanditiis impedit recusandae,
          amet repellat perspiciatis dolores repudiandae magni deserunt possimus
          beatae commodi aliquam mollitia explicabo corrupti iure accusamus vero
          sequi officiis pariatur. Architecto quidem molestiae quod praesentium
          labore eveniet blanditiis.
        </p>
        <article className="w-full min-h-[20vh] mt-4 flex lg:flex-row flex-wrap items-center justify-around text-slate-600 transition-all">
          <div className="flex flex-col items-center justify-center uppercase hover:text-green-500 transition-all  cursor-pointer">
            <span className={`${service_style}`}>
              <CiDeliveryTruck />
            </span>
            <p className=" lg:text-base text-sm">Fast delivery</p>
          </div>
          <div className="flex flex-col items-center justify-center uppercase hover:text-green-500 transition-all cursor-pointer">
            <span className={`${service_style}`}>
              <CiBurger />
            </span>
            <p className=" lg:text-base text-sm">Quality</p>
          </div>
          <div className="md:flex hidden flex-col items-center justify-center uppercase hover:text-green-500 transition-all  cursor-pointer">
            <span className={`${service_style}`}>
              <CiPalette />
            </span>
            <p className=" lg:text-base text-sm">Diverse</p>
          </div>
          <div className="flex flex-col items-center justify-center uppercase hover:text-green-500 transition-all  cursor-pointer">
            <span className={`${service_style}`}>
              <CiDollar />
            </span>
            <p className=" lg:text-base text-sm">Good prices</p>
          </div>
        </article>
      </section>
    </section>
  );
}

export default Banner1;
