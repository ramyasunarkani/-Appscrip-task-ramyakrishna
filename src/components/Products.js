"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../styles/Products.module.css";
import FilterSidebar from "./FilterSidebar";
import { selectProduct } from "@/Store/productsSlice";
import { FiHeart } from "react-icons/fi";

const Products = ({ showFilter, setShowFilter, item1 }) => {
  const [items, setItems] = useState([]);
  const [filterMultipel, setFilterMultipel] = useState([]);
  const [loading, setLoading] = useState(false);

  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const filterItems = useCallback(() => {
    if (filterMultipel.length > 0) {
      const filtered = products.filter((p) => {
        const productText = `${p.title} ${p.category}`.toLowerCase();
        return filterMultipel.some((filter) =>
          new RegExp(`\\b${filter.toLowerCase()}\\b`, "i").test(productText)
        );
      });
      setItems(filtered);
    } else if (!item1?.length) {
      setItems(products);
    }
  }, [products, filterMultipel, item1]);

  useEffect(() => {
    if (products?.length > 0) {
      setItems(products);
      setLoading(true);
    }
  }, [products]);

  useEffect(() => {
    if (item1?.length > 0) setItems(item1);
    else if (products?.length > 0 && filterMultipel.length === 0) setItems(products);
  }, [item1, products, filterMultipel]);

  useEffect(() => {
    filterItems();
    dispatch(selectProduct(items));
  }, [filterItems, dispatch, items]);

  const handleCheckboxChange = (cat) => {
    setFilterMultipel((prev) =>
      prev.includes(cat) ? prev.filter((v) => v !== cat) : [...prev, cat]
    );
  };

  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderList = () => {
    if (!items || items.length === 0) {
      return <div className={styles.noProducts}>No products found — we'll be adding more soon!</div>;
    }
    return items.map((product) => {
      const { id, image, title } = product;
      return (
        <div key={id} className={styles.card}>
          <div className={styles.imgin}>
            <Image src={image} alt={title} width={300} height={300} className={styles.img} />
          </div>
          <ul className={styles.textbox}>
            <li className={styles.texttitleRow}>
              <span className={styles.texttitle}>
                {title.length > 20 ? title.slice(0, 15) + "..." : title}
              </span>
              {isMobileView && (
                <span className={styles.heartIcon}>
                  <FiHeart />
                </span>
              )}
            </li>
            <li className={styles.textsubtitle}>
              Sign in or create account — See pricing {!isMobileView && <FiHeart style={{ verticalAlign: "middle" }} />}
            </li>
          </ul>
        </div>
      );
    });
  };

  const columnCount = showFilter ? 3 : 4;
  const mainGridStyle = {
    gridTemplateColumns: isMobileView ? "repeat(2, 1fr)" : `repeat(${columnCount}, 1fr)`,
  };

  return (
    <>
      {loading ? (
        <div className={styles.container}>
          {showFilter && (
            <div className={styles.sidebar}>
              <FilterSidebar
                filterProducts={filterItems}
                filtermultipel={filterMultipel}
                handleCheckboxChange={handleCheckboxChange}
                isMobile={isMobileView}
                setShowFilter={setShowFilter}
              />
            </div>
          )}
          <div className={styles.main} style={mainGridStyle}>
            {renderList()}
          </div>
        </div>
      ) : (
        <div className={styles.loadingmain}>
          <p className={styles.loading}>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Products;
