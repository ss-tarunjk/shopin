import styles from "./NewArrivals.module.css";

import ProductCard from "../../common/ProductCard";

export default function NewArrivals() {
  return (
    <section>
      <div>
        <h2>NEW ARRIVALS</h2>

        <div>
          <ProductCard
            star={1}
            price={100}
            name={"Test"}
            discount={10}
            images={["/images/products/product1.png"]}
          />
          <ProductCard
            star={1}
            price={100}
            name={"Test"}
            discount={10}
            images={["/images/products/product1.png"]}
          />
          <ProductCard
            star={1}
            price={100}
            name={"Test"}
            discount={10}
            images={["/images/products/product1.png"]}
          />
          <ProductCard
            star={1}
            price={100}
            name={"Test"}
            discount={10}
            images={["/images/products/product1.png"]}
          />
        </div>

        <div>
          <button>View All</button>
        </div>
      </div>
    </section>
  );
}
