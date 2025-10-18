"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/Store/productsSlice";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import Footer from "@/components/Footer";

export default function Content({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <>
      <Header />
      <HeroSection />
      <FilterSection />
      <Footer />
    </>
  );
}
