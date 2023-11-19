import React from "react";
import about from "../../../assets/imgs/content/about_us/about.png";
import red from "../../../assets/imgs/content/about_us/burguer_transparent.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

function AboutUs() {
  return (
    <section id="about" className="w-full min-h-[90vh] lg:my-4 lg:px-20 ">
      <div className="w-full h-[12vh] flex items-center justify-center lg:mb-2 mt-3">
        <img src={about} className="h-[12vh] w-[250px]" alt="" srcset="" />
      </div>

      <section className="w-full min-h-[70vh] flex md:flex-row flex-col ">
        <section className="w-full min-h-[40vh] md:h-[70vh] md:w-[50%] flex flex-col ">
          <div className="w-full lg:mt-5 mt-4 flex items-center justify-start px-3">
            <h2 className="uppercase lg:text-[2.4rem] text-[1.9rem] lg:mt-0 font-bold md:text-left text-center text-slate-700 mr-3">
              We are proud for sharing
            </h2>
          </div>
          <div className="w-full h-[7vh] my-2 flex items-center lg:px-2 px-4">
            <span className="mx-1 flex items-center justify-center text-yellow-500 text-[0.99rem]">
              <FaStar />
            </span>
            <span className="mr-1 flex items-center justify-center text-yellow-500 text-[0.99rem]">
              <FaStar />
            </span>
            <span className="mr-1 flex items-center justify-center text-yellow-500 text-[0.99rem]">
              <FaStar />
            </span>
            <span className="mr-1flex items-center justify-center text-yellow-500 text-[0.99rem]">
              <FaStar />
            </span>
            <span className="mx-1 flex items-center justify-center text-yellow-500 text-[0.99rem]">
              <FaStarHalfAlt />
            </span>
          </div>
          <p className="lg:text-lg lg:px-2 px-3 my-2 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aliquid quaerat numquam inventore quia blanditiis impedit
            recusandae, amet repellat perspiciatis dolores repudiandae magni
            deserunt possimus beatae commodi aliquam.
          </p>
        </section>
       <div className="md:w-[50%] w-full min-h-[70vh] flex items-center justify-center ">
      <Slide direction="right">
        <img
          src={red}
          className="w-full object-cover min-h-[70vh]"
          alt="Hamburguesa con ingredientes"
          loading="lazy"
        />
      </Slide>
       
       </div>
      </section>
    </section>
  );
}

export default AboutUs;
