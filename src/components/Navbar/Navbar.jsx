import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

import appConfig from "../config/app.config";

import IconButton from "../common/IconButton";

import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.inner}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <h2 className={styles.text}>{appConfig.appName}</h2>
          </Link>

          {/* Menus */}
          <div className={styles.menus}>
            <Link className={styles.item} to={"/"}>
              Shop
            </Link>
            <Link className={styles.item} to={"/"}>
              On Sale
            </Link>
            <Link className={styles.item} to={"/"}>
              New Arrivals
            </Link>
            <Link className={styles.item} to={"/"}>
              Brands
            </Link>
          </div>

          <div className={styles["input-wrapper"]}>
            <SearchIcon />

            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for products..."
              className={styles["search-text-field"]}
            />
          </div>

          <div className={styles.actions}>
            <IconButton
              title="Cart"
              icon={<CartIcon width={24} height={24} />}
              onClick={() => navigate("/products/cart")}
            />

            <IconButton
              title="Profile"
              icon={<ProfileIcon width={24} height={24} />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <hr className={"hr-line"} />
    </nav>
  );
}
