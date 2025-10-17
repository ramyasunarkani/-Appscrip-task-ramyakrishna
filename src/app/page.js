'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/Store/productsSlice";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import Footer from "@/components/Footer";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => dispatch(setProducts(json)))
      .catch(err => console.error(err));
  }, [dispatch]);
  const products = useSelector(state => state.products.allProducts);

  return (
    <>
      <Header />
      <HeroSection />
      <FilterSection />
      <Footer />
    </>
  );
}
