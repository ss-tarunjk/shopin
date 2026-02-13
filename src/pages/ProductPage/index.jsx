import styles from "./ProductPage.module.css";

import ShowProducts from "../../components/common/ShowProducts";
import PRODUCTS from "./data.json";

export default function ProductPage() {
  return (
    <div>
      <ShowProducts
        title={"You might also like"}
        products={PRODUCTS}
        showLoadMore={false}
      />
    </div>
  );
}
