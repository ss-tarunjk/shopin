import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

import appConfig from "../config/app.config";

import SearchBar from "./SearchBar";
import IconButton from "../common/IconButton/IconButton";

import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <h2 className={styles.text}>{appConfig.appName}</h2>

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

        <SearchBar />

        <div className={styles.actions}>
          <IconButton
            title="Cart"
            icon={<CartIcon width={24} height={24} />}
            onClick={() => {}}
          />

          <IconButton
            title="Profile"
            icon={<ProfileIcon width={24} height={24} />}
            onClick={() => {}}
          />
        </div>
      </div>
    </nav>
  );
}
