import styles from "./ProductPage.module.css";

import ShowProducts from "../../components/common/ShowProducts";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import ReviewCard from "../../components/common/ReviewCard";

import PRODUCTS from "./data.json";

import { ReactComponent as DownTagIcon } from "../../assets/icons/downtag.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";

const REVIEWS = [
  {
    id: 1,
    star: 5,
    name: "John Doe.",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "2026-01-01",
  },
  {
    id: 2,
    star: 4,
    name: "John Doe.",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "2026-01-01",
  },
  {
    id: 3,
    star: 3,
    name: "John Doe.",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "2026-01-01",
  },
];

export default function ProductPage() {
  return (
    <div>
      <BreadCrumbs
        routes={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/products" },
          { name: "Product", path: `/products/${PRODUCTS[0].id}` },
        ]}
      />

      <div className={styles["product-header-container"]}>
        {/* Product Images Section */}
        <div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          <h2>Product Name</h2>
          <div></div>
          <div></div>

          <p></p>

          <hr />

          <div></div>

          <hr />

          <div></div>

          <hr />

          <div></div>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Reviews Section */}
      <div className={styles["product-reviews-container"]}>
        {/* Filter Section */}
        <div className={styles["product-reviews-filter-container"]}>
          <div className={styles["product-reviews-title-container"]}>
            <h4 className={styles["product-reviews-title"]}>All Reviews</h4>
            <span className={styles["product-reviews-count"]}>(100)</span>
          </div>

          <div className={styles["product-reviews-filter-buttons-container"]}>
            <button
              type="button"
              className={styles["product-reviews-filter-button-menu"]}
            >
              <FilterIcon width={20} height={20} />
            </button>

            <button
              type="button"
              className={styles["product-reviews-filter-button-latest"]}
            >
              Latest <DownTagIcon width={12} />
            </button>

            <button
              type="button"
              className={styles["product-reviews-filter-button-write-review"]}
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className={styles["product-reviews-list-container"]}>
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} {...review} isDetailed={true} />
          ))}
        </div>

        <div className={styles["product-reviews-button-container"]}>
          <button type="button" className={styles["product-reviews-button"]}>
            Load More Reviews
          </button>
        </div>
      </div>

      <ShowProducts
        title={"You might also like"}
        products={PRODUCTS}
        showLoadMore={false}
      />
    </div>
  );
}
