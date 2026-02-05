import React from "react";
import "./globals.css";
import Image from "next/image";
const page = () => {
  return (
    <div className="hero flex justify-between">
      <div className="grid gap-3 ml-[6.5rem]">
        <p className="text-[3rem] leading-[1.2] text-[#2D314D] w-[24rem]">
          Next generation
          <br />
          digital banking
        </p>
        <p className="text-[1rem] opacity-[1.90] leading-[1.5] text-[#bcbcbc] w-[24rem]">Take your financial life online. Your Digitalbank<br/>account will be a one-stop-shop for spending, saving,<br/> budgeting, investing, and much more.</p>

        <button className= "requestInvite bg-gradient-to-r from-[#2fd071] to-[#2cbcc7] text-white font-medium p-2 w-[9rem] h-[3rem] rounded-full mt-[1.5rem]">Request Invite</button>

      </div>

      <div className="relative left-[32%] w-auto h-[100%]">
        <Image
          className="relative -left-[12rem] -mt-[15px] h-[46rem] w-[69rem]"
          src="/bg-intro-desktop.svg"
          alt="bg-intro"
          width={820}
          height={190}
        />
        <Image
          className=" -mt-[20rem] ml-[19rem] h-[55rem] w-[37rem]"
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
