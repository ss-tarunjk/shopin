import { Link } from "react-router-dom";

import styles from "./BreadCrumbs.module.css";

import { ReactComponent as RightTagIcon } from "../../../assets/icons/right_tag.svg";

export default function BreadCrumbs({ routes = [] }) {
  return (
    <div className={styles["breadcrumbs"]}>
      {routes.map((item, i) => {
        return (
          <div key={i} className={styles["breadcrumbs-item-container"]}>
            <Link
              className={`${styles["breadcrumbs-item"]} ${i === routes.length - 1 ? styles["breadcrumbs-item-active"] : ""}`}
              to={item.path}
            >
              {item.name}
            </Link>
            {i !== routes.length - 1 && <RightTagIcon />}
          </div>
        );
      })}
    </div>
  );
}
