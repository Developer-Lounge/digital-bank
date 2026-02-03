import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="bg-[#2D314E] h-full p-8">
      <div className="flex flex-col gap-3">
        <div className={styles.navImg}>
          <Image src="/logo-light.svg" alt="Logo" width={190} height={50} />
        </div>
        <div className="flex size-5 flex-cols-1 gap-2 cursor-pointer">
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
      <div className={styles.footerText}>
        {/* <p>© 2024 Digital Bank. All rights reserved.</p> */}
      </div>
    </div>
  );
};

export default Footer;
