import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#2D314E] h-full flex justify-between p-8 mt-255">
      {/* Logo and socials */}
      <div className="flex flex-col gap-19 ml-20">
        <div className={styles.navImg}>
          <Image src="/logo-light.svg" alt="Logo" width={190} height={50} />
        </div>
        <div className="flex size-5 flex-cols-1 gap-6 -mt-2 cursor-pointer">
          <Image
            src="/icon-facebook.svg"
            alt="Social Media Icons"
            width={200}
            height={50}
            className={styles.socialIcons}
          />
          <Image
            src="/icon-youtube.svg"
            alt="Social Media Icons"
            width={200}
            height={50}
            className={styles.socialIcons}
          />
          <Image
            src="/icon-twitter.svg"
            alt="Social Media Icons"
            width={200}
            height={50}
            className={styles.socialIcons}
          />
          <Image
            src="/icon-pinterest.svg"
            alt="Social Media Icons"
            width={200}
            height={50}
            className={styles.socialIcons}
          />
          <Image
            src="/icon-instagram.svg"
            alt="Social Media Icons"
            width={200}
            height={50}
            className={styles.socialIcons}
          />
        </div>
      </div>

      <div className="flex text-white  relative -left-40 gap-20">
        <div className="grid gap-3">
          <Link className="w-full ease-in-out hover:text-[#2fd071] h-6" href="#">
            About Us
          </Link>
          <Link className="w-14 hover:text-[#2fd071] h-6" href="#">
            Contact
          </Link>
          <Link className="w-8 hover:text-[#2fd071] h-6" href="#">
            Blog
          </Link>
        </div>

        <div className="grid gap-3 hover:text-[#2fd071]-600/100">
          <Link className="w-13 hover:text-[#2fd071] h-6" href="#">
            Careers
          </Link>
          <Link className="w-14 hover:text-[#2fd071] h-6" href="#">
            Support
          </Link>
          <Link className="w-27 hover:text-[#2fd071] h-6" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="grid gap-4 left-10">
        {/* Request invite button */}
        <div className={styles.requestInvite}>
          <button className={styles.btn}>Request Invite</button>
        </div>

        <p className="text-white relative -left-18 -mt-2 text-sm">
          ©DigitalBank. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
