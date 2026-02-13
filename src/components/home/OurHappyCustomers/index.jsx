import ReviewCard from "../../common/ReviewCard";

import { ReactComponent as LeftArrowIcon } from "../../../assets/icons/leftarrow.svg";
import { ReactComponent as RightArrowIcon } from "../../../assets/icons/rightarrow.svg";

import IconButton from "../../common/IconButton";

import styles from "./OurHappyCustomers.module.css";

const REVIEWS = [
  {
    id: 1,
    star: 5,
    name: "John Doe",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "2026-01-01",
  },
  {
    id: 2,
    star: 4,
    name: "John Doe",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "2026-01-01",
  },
  {
    id: 3,
    star: 3,
    name: "John Doe",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "2026-01-01",
  },
];

export default function OurHappyCustomers() {
  return (
    <section>
      <div className={styles["header-container"]}>
        <h2 className={styles["header-text"]}>OUR HAPPY CUSTOMERS</h2>
        <div className={styles["header-actions"]}>
          <IconButton
            title="Previous"
            icon={<LeftArrowIcon width={15.76} height={18.75} />}
          />
          <IconButton
            title="Next"
            icon={<RightArrowIcon width={15.76} height={18.75} />}
          />
        </div>
      </div>

      <div className={styles["reviews-container"]}>
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
}
