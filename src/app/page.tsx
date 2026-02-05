import React from "react";
import "./globals.css";
import Image from "next/image";
const page = () => {
  return (
    <div className="hero flex justify-between">
      <div className="grid ml-[6.5rem]">
        <p className="text-[3rem] leading-[1.2] color-[#bcbcbc]">
          Next generation
          <br />
          digital banking
        </p>
        <p>Take your financial life online. Your Digitalbank<br/>account will be a one-stop-shop for spending, saving,<br/> budgeting, investing, and much more.</p>
      </div>

      <div className="relative left-[32%] w-auto h-[100%]">
        <Image
          className="mr-[4rem] -mt-[15px] h-[46rem] w-[69rem]"
          src="/bg-intro-desktop.svg"
          alt="bg-intro"
          width={820}
          height={190}
        />
        <Image
          className="-mt-[50rem] ml-[19rem] h-[55rem] w-[37rem]"
          src="/image-mockups.png"
          alt="image-mockup"
          width={190}
          height={200}
        />
      </div>
    </div>
  );
};

export default page;
