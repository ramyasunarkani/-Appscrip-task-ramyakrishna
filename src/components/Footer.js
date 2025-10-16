"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { FaAngleDown } from "react-icons/fa"; 

const Footer = () => {
  const [isMetaOpen, setIsMetaOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInnerWrapper}>
        <div className={styles.upbox}>
          <div className={styles.emailpart}>
            <p className={styles.font1}>BE THE FIRST TO KNOW</p>
            <p className={styles.mt1}>Sign up for updates from metta muse</p>
            <p className={styles.mt2}>Lorem Ipsum is simple dummy text of the printing and typesetting industry .this is simple dummy text</p>
            <div className={styles.inputbox}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.inputtag}
              />
              <button className={styles.inputbtn}>
                <span className={styles.inputspan}>SUBSCRIBE</span>
              </button>
            </div>
          </div>

          <div className={styles.infopart}>
            <p className={styles.font1}>CONTACT US</p>
            <p className={styles.contactInfo}>+44 221 133 5360</p>
            <p className={styles.contactInfo}>custurmercare@mettamuse.com</p>

            <p className={`${styles.currency} ${styles.mt1}`}>CURRENCY</p>
            <div className={styles.usabox}>
              <Image src="/images/usa.svg" alt="USA Flag" width={24} height={24} />
              <p className={styles.font1}>. USD</p>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and currency reference available on hover.
            </p>
          </div>
        </div>

        <div className={styles.horizontal}></div>

        <div className={styles.lowerbox}>
          <div className={styles.metta}>
            <div className={styles.mobileHeader} onClick={() => setIsMetaOpen(!isMetaOpen)}>
              <p className={styles.font1}>metta muse</p>
              <FaAngleDown className={isMetaOpen ? styles.rotateIcon : ""} />
            </div>
            <p className={`${styles.font1} ${styles.desktopOnly}`}>metta muse</p> 
            <div className={`${styles.linklist} ${isMetaOpen ? styles.open : ""}`}>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
          </div>

          <div className={styles.quick}>
            <div className={styles.mobileHeader} onClick={() => setIsQuickOpen(!isQuickOpen)}>
              <p className={styles.font1}>QUICK LINK</p>
              <FaAngleDown className={isQuickOpen ? styles.rotateIcon : ""} />
            </div>
             <p className={`${styles.font1} ${styles.desktopOnly}`}>QUICK LINK</p>
            <div className={`${styles.linklist} ${isQuickOpen ? styles.open : ""}`}>
              <p>Order & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className={styles.follow}>
  <div
    className={styles.mobileHeader}
    onClick={() => setIsFollowOpen(!isFollowOpen)}
  >
    <p className={styles.font1}>FOLLOW US</p>
    <FaAngleDown className={isFollowOpen ? styles.rotateIcon : ""} />
  </div>

  <p className={`${styles.font1} ${styles.desktopOnly}`}>FOLLOW US</p>

  <div className={`${styles.followContent} ${isFollowOpen ? styles.open : ""}`}>
    <div className={styles.instabox}>
      <Image src="/images/insta.svg" alt="Instagram" width={24} height={24} />
      <Image src="/images/linkden.svg" alt="LinkedIn" width={24} height={24} />
    </div>
  </div>

  <p className={styles.mt}>metta muse ACCEPTS</p>
  <div className={styles.paybox}>
    <Image src="/images/gpay.svg" alt="Google Pay" width={40} height={25} />
    <Image src="/images/voda.svg" alt="Visa" width={40} height={25} />
    <Image src="/images/paypal.svg" alt="PayPal" width={40} height={25} />
    <Image src="/images/amex.svg" alt="Amex" width={40} height={25} />
    <Image src="/images/applepay.svg" alt="Apple Pay" width={40} height={25} />
    <Image src="/images/opay.svg" alt="O Pay" width={40} height={25} />
  </div>
</div>

        </div>

        <p className={styles.copyright}>
         Copyright &copy; 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;