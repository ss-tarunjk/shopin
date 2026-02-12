import styles from "./ShowProducts.module.css";

import ProductCard from "../ProductCard";

export default function ShowProducts({ title }) {
  return (
    <section>
      <div>
        <h2>{title}</h2>

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
