import React from "react";
import "./globals.css";
import Image from "next/image";
const page = () => {
  return (
    <div className="hero flex gap-33 justify-between">
      {/* Left side of the hero section */}
    
        <div className="grid gap-3 ml-25">
          <p className="text-[3rem] leading-[1.2] text-[#2D314D] w-[24rem]">
            Next generation
            <br />
            digital banking
          </p>
          <p className="text-[1rem] opacity-[1.90] leading-normal text-[#bcbcbc] w-[25.6rem]">
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
            className="relative -left-79.5 -mt-3.75 h-174 w-299"
            src="/bg-intro-desktop.svg"
            alt="bg-intro"
            width={820}
            height={190}
          />
          <Image
            className="relative -top-311 -left-116 z-10 mt-120 ml-76 h-220 w-2xl"
            src="/image-mockups.png"
            alt="image-mockup"
            width={190}
            height={200}
          />
      </div>
      {/* second section */}

      <div className="absolute bg-[#e8e8e8] top-[125%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full h-169">
        <div className=" grid p-24 gap-8 mt-6">
          <p className="text-[2.5rem] text-[#2D314D] tracking-[-0.01em]">
            Why choose Digitalbank?
          </p>
          <p className="text-[1rem] text-[#949494] tracking-[-0.01em]">
            We leverage Open banking to turn your bank account into your
            financial hub.
            <br />
            Control your finances like never before.
          </p>
        </div>

        {/* SUB-SECTIONS */}

        <div className="flex gap-12 ml-24">
          <div className="grid gap-2">
            <Image
              className="h-16 w-16"
              src="/icon-online.svg"
              alt="icon-online"
              width={64}
              height={64}
            />
            <p className="text-[1.25rem] text-[#2D314D] mt-4 mb-2 tracking-[-0.03em]">
              Online Banking
            </p>
            <p className="text-[0.9rem] text-[#949494]">
              Our modern web and mobile
              <br /> applications allow you to keep <br />
              track of your finances wherever
              <br /> you are in the world.
            </p>
          </div>

          <div className="text-[1rem] grid gap-2 text-[#949494]">
            <Image
              className="h-16 w-16"
              src="/icon-budgeting.svg"
              alt="icon-budgeting"
              width={64}
              height={64}
            />
            <p className="text-[1.25rem] text-[#2D314D] mt-4 mb-2">
              Simple Budgeting
            </p>
            <p className="text-[0.9rem] text-[#949494]">
              See exactly where your money
              <br /> goes each month. Receive
              <br /> notifications when you're close to
              <br /> hitting your limits.
            </p>
          </div>

          <div className="text-[1rem] grid gap-2 text-[#949494]">
            <Image
              className="h-16 w-16"
              src="/icon-onboarding.svg"
              alt="icon-onboarding"
              width={64}
              height={64}
            />
            <p className="text-[1.25rem] text-[#2D314D] mt-4 mb-2">
              Fast Onboarding
            </p>
            <p className="text-[0.9rem] text-[#949494]">
              We don't do branches. Open your <br />
              account in minutes online and start
              <br /> taking control of your finances <br />
              right away.
            </p>
          </div>

          <div className="text-[0.9rem] grid gap-2 text-[#949494]">
            <Image
              className="h-16 w-16"
              src="/icon-api.svg"
              alt="icon-api"
              width={64}
              height={64}
            />
            <p className="text-[1.25rem] text-[#2D314D] mt-4 mb-2">Open API</p>
            <p className="text-[0.9rem] text-[#949494]">
              Manage your savings, investments,
              <br /> pension, and much more from one <br />
              account. Tracking your money has <br />
              never been easier.
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}

      <div className="absolute bg-[#dcdcdc] top-[200%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full h-122">
        <div className=" grid p-24 gap-8 mt-6">
          <p className="text-[2.5rem] text-[#2D314D] tracking-[-0.01em]">
            Latest Articles
          </p>

          <div className="flex gap-12 ml-1">
          <div className=" w-55 h-10 bg-amber-50 "></div>
          <div className=" w-55 h-10 bg-amber-50 "></div>
          <div className=" w-55 h-10 bg-amber-50 "></div>
          <div className=" w-55 h-10 bg-amber-50 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
