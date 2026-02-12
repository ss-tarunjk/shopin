import styles from "./CartPage.module.css";

import BreadCrumbs from "../../components/common/BreadCrumbs";
import CartItem from "../../components/cart/CartItem";

import SubscribeSection from "../../components/SubscribeSection";

const CART_ITEMS = [
  {
    name: "Test",
    size: "Large",
    color: "White",
    price: 145,
    image: "/images/products/product1.png",
  },
  {
    name: "Test",
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

      <div>
        <section className={styles["cart-section"]}>
          {CART_ITEMS.map((item, i) => {
            const id = `${item.name.toLowerCase()}-${item.size.toLowerCase()}-${item.color.toLowerCase()}`;
            return <CartItem key={id} />;
          })}
        </section>

        <section></section>
      </div>

      <SubscribeSection />
    </div>
  );
}
