"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { CiGrid42 } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => setIsActive(!isActive);
  const removeActive = () => setIsActive(false);

  const PromoMessage = () => (
    <p className={styles.promoText}>
      <span>
        <CiGrid42 size={14} color="#EB4C6B" style={{ marginTop: "2px" }} />
      </span>
      Lorem ipsum dolor
    </p>
  );

  return (
    <header className={styles.header}>
      {/* Top banner */}
      <div className={styles.topBanner}>
        <PromoMessage />
        <div className={styles.desktopPromo}>
          <PromoMessage />
          <PromoMessage />
        </div>
      </div>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logobox}>
          <div className={styles.brand}>
            <div className={styles.menuIcon} onClick={toggleActiveClass}>
              {isActive ? (
                <RxCross2 size={26} color="black" />
              ) : (
                <FiMenu size={26} color="black" />
              )}
            </div>

            <Image
              src="/images/rightlogo.svg"
              alt="Brand Logo Icon"
              width={40}
              height={40}
              priority
            />
          </div>

          <Link href="/" className={styles.logo}>
            LOGO
          </Link>

          <div className={styles.topIcons}>
            <Image src="/images/search.svg" alt="Search" width={24} height={24} />
            <Image src="/images/love.svg" alt="Wishlist" width={24} height={24} />
            <Image src="/images/bag.svg" alt="Cart" width={24} height={24} />
            <Image src="/images/user.svg" alt="User" width={24} height={24} />
            <div className={styles.langBox}>
              <p className={styles.langText}>ENG</p>
              <Image src="/images/downlogo.svg" alt="Dropdown" width={16} height={16} />
            </div>
          </div>
        </div>

        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <Link href="#shop" className={styles.navLink}>SHOP</Link>
          </li>
          <li onClick={removeActive}>
            <Link href="#skills" className={styles.navLink}>SKILLS</Link>
          </li>
          <li onClick={removeActive}>
            <Link href="#stories" className={styles.navLink}>STORIES</Link>
          </li>
          <li onClick={removeActive}>
            <Link href="#about" className={styles.navLink}>ABOUT</Link>
          </li>
          <li onClick={removeActive}>
            <Link href="#contact" className={styles.navLink}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
