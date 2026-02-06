import React from "react";
import "./globals.css";
import Image from "next/image";
const page = () => {
  return (
    <div className="hero flex justify-between">
      {/* Left side of the hero section */}
      <div className="grid gap-3 ml-26">
        <p className="text-[3rem] leading-[1.2] text-[#2D314D] w-[24rem]">
          Next generation
          <br />
          digital banking
        </p>
        <p className="text-[1rem] opacity-[1.90] leading-normal text-[#bcbcbc] w-[24rem]">
          Take your financial life online. Your Digitalbank
          <br />
          account will be a one-stop-shop for spending, saving,
          <br /> budgeting, investing, and much more.
        </p>

        <button className="requestInvite bg-linear-to-r from-[#2fd071] to-[#2cbcc7] text-white font-medium p-2 w-36 h-12 rounded-full mt-6">
          Request Invite
        </button>
      </div>

      {/* Right side of the hero section */}
      <div className="relative left-[32%] w-auto h-full">
        <Image
          className="relative -left-48 -mt-3.75 h-184 w-276"
          src="/bg-intro-desktop.svg"
          alt="bg-intro"
          width={820}
          height={190}
        />
        <Image
          className="relative -top-328 -left-76 z-10 mt-120 ml-76 h-220 w-2xl"
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
