import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";

import { ReactComponent as FullStarIcon } from "../../../assets/icons/fullstar.svg";
import { ReactComponent as HalfStarIcon } from "../../../assets/icons/halfstar.svg";

export default function ProductCard({
  id,
  images = [],
  name,
  star,
  price,
  discountPercentage = null,
}) {
  return (
    <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
      <article className={styles["product"]}>
        <div>
          <img className={styles["product-image"]} src={images[0]} alt={name} />
        </div>

        <h5 className={styles["product-name"]}>{name}</h5>
        <div className={styles["product-rating"]}>
          <div className={styles["product-rating-stars"]}>
            {Array.from({ length: star }).map((_, index) => (
              <FullStarIcon key={index} />
            ))}
            {star % 1 !== 0 && <HalfStarIcon />}
          </div>

          <p className={styles["product-rating-value"]}>
            {star}/<span style={{ color: "rgba(0, 0, 0, 0.6)" }}>5</span>
          </p>
        </div>

        <div className={styles["product-price-discount-container"]}>
          <h4 className={styles["product-price"]}>
            {" "}
            ${price - (price * discountPercentage) / 100}
          </h4>

          {discountPercentage && (
            <span className={styles["product-price-discount"]}>${price}</span>
          )}

          {discountPercentage && (
            <span className={styles["product-price-discount-percentage"]}>
              {discountPercentage}%
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
