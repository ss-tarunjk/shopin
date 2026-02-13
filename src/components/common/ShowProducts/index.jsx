import styles from "./ShowProducts.module.css";

import ProductCard from "../ProductCard";

export default function ShowProducts({ title, products }) {
  return (
    <section className={styles["container"]}>
      <div>
        <h2 className={styles["header-text"]}>{title}</h2>

        <div className={styles["products-container"]}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              star={product.star}
              price={product.price}
              name={product.name}
              images={product.images}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>

        <div className={styles["view-all-button-container"]}>
          <button type="button" className={styles["view-all-button"]}>
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
