import React from "react";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <p className={styles.navLink}>
        <span className={styles.link}>Home</span> | <span className={styles.link}>Shop</span>
      </p>

      <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>

      <p className={styles.para}>
        Lorem ipsum dolor sit amet, consectetur. Amet est posuere rhoncus schelerisque.Dolor integer
         schelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
  );
};

export default HeroSection;
