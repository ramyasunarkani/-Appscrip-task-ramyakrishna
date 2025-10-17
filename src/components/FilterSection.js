"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/FilterSection.module.css";
import Products from "./Products";
import { FaAngleDown } from "react-icons/fa";

const FilterSection = () => {
  const products = useSelector((state) => state.products.allProducts);

  const [showFilter, setShowFilter] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("recommended");
  const [isClient, setIsClient] = useState(false);
  const [filterMultipel, setFilterMultipel] = useState([]);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (products.length > 0) {
      const recommended = products.filter((item) => (item.rating?.rate || 0) >= 4);
      setFilteredItems(recommended);
    }
  }, [products]);

  const handleCheckboxChange = (cat) => {
    setFilterMultipel((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const totalItems = filteredItems.length;

  const handleSort = (type) => {
    let sorted = [];
    switch (type) {
      case "recommended":
        sorted = products.filter((item) => (item.rating?.rate || 0) >= 4);
        break;
      case "newest":
        sorted = [...products].sort((a, b) => b.id - a.id);
        break;
      case "popular":
        sorted = [...products].sort((a, b) => b.rating?.count - a.rating?.count);
        break;
      case "highToLow":
        sorted = [...products].sort((a, b) => b.price - a.price);
        break;
      case "lowToHigh":
        sorted = [...products].sort((a, b) => a.price - b.price);
        break;
      default:
        sorted = [...products];
    }
    setFilteredItems(sorted);
    setSelectedOption(type);
  };

  const renderCheck = (option) =>
    selectedOption === option ? (
      <span style={{ color: "black", fontWeight: "bold", marginRight: 5 }}>✔</span>
    ) : (
      <span style={{ width: 15, display: "inline-block" }}></span>
    );

  return (
    <>
      <div className={styles.filterbar}>
        <div className={styles.box}>
          <div className={styles.leftFilterGroup}>
            {isClient && window.innerWidth > 768 ? (
              <>
                <p className={styles.filterno}>{totalItems} ITEMS</p>
                <p className={styles.filter} onClick={() => setShowFilter((prev) => !prev)}>
                  {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
                </p>
              </>
            ) : (
              <p className={styles.filter} onClick={() => setShowFilter((prev) => !prev)}>
                FILTER
              </p>
            )}
          </div>

          <div className={styles.deffilterContainer}>
            <p className={styles.deffilter} onClick={() => setShowToggle((prev) => !prev)}>
              RECOMMENDED <FaAngleDown style={{ marginLeft: "5px" }} />
            </p>
            {showToggle && (
              <div className={styles.toggle}>
                <p onClick={() => handleSort("recommended")}>{renderCheck("recommended")} RECOMMENDED</p>
                <p onClick={() => handleSort("newest")}>{renderCheck("newest")} NEWEST FIRST</p>
                <p onClick={() => handleSort("popular")}>{renderCheck("popular")} POPULAR</p>
                <p onClick={() => handleSort("highToLow")}>{renderCheck("highToLow")} PRICE: HIGH TO LOW</p>
                <p onClick={() => handleSort("lowToHigh")}>{renderCheck("lowToHigh")} PRICE: LOW TO HIGH</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.productsArea}>
        <Products
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          item1={filteredItems}
        />
      </div>
    </>
  );
};

export default FilterSection;
