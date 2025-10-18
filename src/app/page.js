import Content from "@/components/Content";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return <Content products={products} />;
}
