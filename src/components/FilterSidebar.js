"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "../styles/FilterSidebar.module.css";

const FilterSidebar = ({ filterProducts, filtermultipel, handleCheckboxChange, isMobile }) => {
  const [ideal, setIdeal] = useState(false);
  const [occasion, setOccasion] = useState(false);
  const [work, setWork] = useState(false);
  const [fabrik, setFabrik] = useState(false);
  const [segment, setSegment] = useState(false);
  const [suitable, setSuitable] = useState(false);
  const [raw, setRaw] = useState(false);
  const [pattern, setPattern] = useState(false);

  const toggleSection = (setter, value) => () => setter(!value);

  const handleUnselectAll = (categories) => {
    categories.forEach((cat) => {
      if (filtermultipel.includes(cat)) {
        handleCheckboxChange(cat);
      }
    });
  };

  const renderFilterSection = (title, categories, isOpen, toggleFunc, key) => (
    <div key={key} className={styles.filterSection}>
      <div className={styles.headingRow} onClick={toggleFunc}>
        <p className={styles.headingideal}>{title}</p>
        <FaAngleDown
          className={`${styles.arrowIcon} ${isOpen ? styles.rotateArrow : ""}`}
        />
      </div>
      <div className={styles.allOption}>
        <span className={styles.allText}>All</span>
      </div>

      {isOpen && (
        <div className={styles.ideal}>
          <div className={styles.unselectAll} onClick={() => handleUnselectAll(categories)}>
            Unselect All
          </div>

          {categories.map((cat) => (
            <div key={`${title}-${cat}`} className={styles.categoryItem}>
              <input
                type="checkbox"
                id={`${title}-${cat}`}
                checked={filtermultipel.includes(cat)}
                onChange={() => handleCheckboxChange(cat)}
              />
              <label htmlFor={`${title}-${cat}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const categoryOptions = {
    "IDEAL FOR": {
      state: ideal,
      setState: setIdeal,
      categories: ["men", "women", "baby & kids"],
    },
    OCCASION: {
      state: occasion,
      setState: setOccasion,
      categories: ["party", "wedding", "casual"],
    },
    WORK: { state: work, setState: setWork, categories: ["formal", "casual", "sport"] },
    FABRIC: { state: fabrik, setState: setFabrik, categories: ["cotton", "silk", "denim"] },
    SEGMENT: { state: segment, setState: setSegment, categories: ["premium", "mid-range", "economy"] },
    "SUITABLE FOR": { state: suitable, setState: setSuitable, categories: ["summer", "winter", "monsoon"] },
    "RAW MATERIALS": { state: raw, setState: setRaw, categories: ["leather", "plastic", "metal"] },
    PATTERN: { state: pattern, setState: setPattern, categories: ["solid", "striped", "checked"] },
  };

  return (
    <div className={styles.side}>
      <div className={styles.costomize}>
        <input value="test" type="checkbox" onChange={() => handleCheckboxChange("laptops")} />
        <label htmlFor="">CUSTOMIZE</label>
      </div>

      <div className={styles.divider}></div>

      {Object.keys(categoryOptions).map((title) => {
        const { state, setState, categories } = categoryOptions[title];
        return renderFilterSection(title, categories, state, toggleSection(setState, state), title);
      })}

     
    </div>
  );
};

export default FilterSidebar;
