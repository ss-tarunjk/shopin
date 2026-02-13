import styles from "./CartPage.module.css";

import BreadCrumbs from "../../components/common/BreadCrumbs";
import CartItem from "../../components/cart/CartItem";

import { ReactComponent as RightArrowIcon } from "../../assets/icons/right_arrow.svg";

import { ReactComponent as TagIcon } from "../../assets/icons/tag.svg";

import CART_ITEMS from "./data.json";

export default function CartPage() {
  return (
    <div>
      <BreadCrumbs
        routes={[
          { name: "Home", path: "/" },
          { name: "Cart", path: "/products/cart" },
        ]}
      />

      <h2 className={`${styles["cart-header-text"]} header-text`}>Your Cart</h2>

      <div className={styles["cart-group"]}>
        <section className={styles["cart-items-section"]}>
          {CART_ITEMS.map((item, i) => {
            const id = `${item.name.toLowerCase()}-${item.size.toLowerCase()}-${item.color.toLowerCase()}`;
            return (
              <>
                <CartItem key={id} {...item} />
                {i !== CART_ITEMS.length - 1 && (
                  <hr className={styles["line"]} />
                )}
              </>
            );
          })}
        </section>

        <section className={styles["cart-summary-section"]}>
          <h3 className={styles["cart-summary-text"]}>Order Summary</h3>

          <div className={styles["cart-summary-labels"]}>
            <div className={styles["cart-summary-row"]}>
              <h4 className={styles["cart-summary-row-label"]}>Subtotal</h4>
              <span className={styles["cart-summary-row-value"]}>$565</span>
            </div>

            <div className={styles["cart-summary-row"]}>
              <h4 className={styles["cart-summary-row-label"]}>
                Discount (-20%)
              </h4>
              <span className={styles["cart-summary-row-value-discount"]}>
                -$113
              </span>
            </div>

            <div className={styles["cart-summary-row"]}>
              <h4 className={styles["cart-summary-row-label"]}>Delivery Fee</h4>
              <span className={styles["cart-summary-row-value"]}>$15</span>
            </div>

            <hr className={styles["line"]} />

            <div className={styles["cart-summary-row"]}>
              <h4 className={styles["cart-summary-total-label"]}>Total</h4>
              <span className={styles["cart-summary-total-value"]}>$467</span>
            </div>
          </div>

          <div className={styles["cart-promo"]}>
            <div className={styles["input-wrapper"]}>
              <TagIcon />

              <input
                type="text"
                name="promo_code"
                id="promo_code"
                placeholder="Add promo code"
                className={styles["cart-promo-text-field"]}
              />
            </div>

            <button className={styles["cart-promo-button"]} type="button">
              Apply
            </button>
          </div>

          <div>
            <button className={styles["cart-checkout-button"]} type="button">
              <span className={styles["cart-checkout-text"]}>
                Go to Checkout
              </span>{" "}
              <RightArrowIcon />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
