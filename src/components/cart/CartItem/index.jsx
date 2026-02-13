import IconButton from "../../common/IconButton";

import { ReactComponent as BinIcon } from "../../../assets/icons/bin.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";

import styles from "./CartItem.module.css";

export default function CartItem({ name, size, color, price, image }) {
  return (
    <article className={styles["cart-item"]}>
      <img className={styles["cart-image"]} src={image} alt={name} />

      <div className={styles["cart-data"]}>
        <div>
          <h4 className={styles["cart-name"]}>{name}</h4>
          <p className={styles["cart-label"]}>
            Size: <span>{size}</span>
          </p>
          <p className={styles["cart-label"]}>
            Color: <span>{color}</span>
          </p>
        </div>

        <h2 className={styles["cart-price"]}>${price}</h2>
      </div>

      <div className={styles["cart-action"]}>
        <IconButton
          title="Remove"
          icon={<BinIcon width={18} height={19.5} />}
          onClick={() => {}}
        />

        <div className={styles["cart-action-buttons"]}>
          <button className={styles["cart-action-button-left"]} type="button">
            <MinusIcon />
          </button>
          <span className={styles["cart-action-value"]}>1</span>
          <button className={styles["cart-action-button-right"]} type="button">
            <PlusIcon />
          </button>
        </div>
      </div>
    </article>
  );
}
