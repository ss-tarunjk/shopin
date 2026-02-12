import styles from "./CartPage.module.css";

import BreadCrumbs from "../../components/common/BreadCrumbs";
import CartItem from "../../components/cart/CartItem";

import SubscribeSection from "../../components/SubscribeSection";

const CART_ITEMS = [
  {
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "/images/products/product1.png",
  },
  {
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "/images/products/product1.png",
  },
  {
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "/images/products/product1.png",
  },
];

export default function CartPage() {
  return (
    <div>
      <BreadCrumbs />

      <h2 className="header-text">Your Cart</h2>

      <div className={styles["cart-group"]}>
        <section className={styles["cart-items-section"]}>
          {CART_ITEMS.map((item, i) => {
            const id = `${item.name.toLowerCase()}-${item.size.toLowerCase()}-${item.color.toLowerCase()}`;
            return (
              <>
                <CartItem key={id} />
                {i !== CART_ITEMS.length - 1 && (
                  <hr className={styles["line"]} />
                )}
              </>
            );
          })}
        </section>

        <section className={styles["cart-summary-section"]}>s</section>
      </div>

      <SubscribeSection />
    </div>
  );
}
