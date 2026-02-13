import Hero from "../../components/home/Hero";
import ShowProducts from "../../components/common/ShowProducts";

import PRODUCTS from "./data.json";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ShowProducts title={"NEW ARRIVALS"} products={PRODUCTS} />
      <hr className={"hr-line"} />
      <ShowProducts title={"top selling"} products={PRODUCTS} />
    </div>
  );
}
