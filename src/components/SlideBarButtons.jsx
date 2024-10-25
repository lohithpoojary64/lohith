import React from "react";
import Image from "next/image";
import home from "../../public/SliderSection/home.png";
import about from "../../public/SliderSection/about.png";
import project from "../../public/SliderSection/visualization.png";
import contact from "../../public/SliderSection/email.png";

const SlideBarButtons = () => {
  return (
    <div className="mt-8 h-[200px] w-full px-6 flex flex-col justify-between items-start">
      <button className="h-[20%] w-full flex justify-start items-center gap-3">
        <Image src={home} alt="Images" height={20} width={20}></Image>
        Home
      </button>
      <button className="h-[20%] w-full flex justify-start items-center gap-3">
        <Image src={about} alt="Images" height={20} width={20}></Image>About
      </button>
      <button className="h-[20%] w-full flex justify-start items-center gap-3">
        <Image src={project} alt="Images" height={20} width={20}></Image>
        Projects
      </button>
      <button className="h-[20%] w-full flex justify-start items-center gap-3">
        <Image src={contact} alt="Images" height={20} width={20}></Image>Contact
      </button>
    </div>
  );
};

export default SlideBarButtons;
