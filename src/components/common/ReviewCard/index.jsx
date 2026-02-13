import moment from "moment";

import styles from "./ReviewCard.module.css";

import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as FullStarIcon } from "../../../assets/icons/fullstar.svg";
import { ReactComponent as HalfStarIcon } from "../../../assets/icons/halfstar.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";

import IconButton from "../IconButton";

export default function ReviewCard({
  star,
  name,
  description,
  date,
  isDetailed = false,
}) {
  return (
    <article
      style={{ width: isDetailed ? "100%" : "400px" }}
      className={styles["review-card"]}
    >
      <div className={styles["review-card-header"]}>
        <div>
          <div className={styles["review-card-stars"]}>
            {Array.from({ length: star }).map((_, index) => (
              <FullStarIcon key={index} />
            ))}
            {star % 1 !== 0 && <HalfStarIcon />}
          </div>
        </div>
        {isDetailed && (
          <div>
            <IconButton
              title="More Options"
              icon={<MenuIcon width={15.76} height={18.75} />}
            />
          </div>
        )}
      </div>

      <div className={styles["review-card-name-container"]}>
        <h4 className={styles["review-card-name"]}>{name}</h4>
        <CheckIcon />
      </div>
      <div style={{ marginTop: "12px" }}>
        <q className={styles["review-card-description"]}>{description}</q>
      </div>

      {isDetailed && (
        <p className={styles["review-card-date"]}>
          Posted on {moment(date).format("MMMM D, YYYY")}
        </p>
      )}
    </article>
  );
}
