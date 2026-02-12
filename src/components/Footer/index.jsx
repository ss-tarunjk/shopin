import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import FOOTER_MAIN_ITEMS from "./data.json";

import appConfig from "../config/app.config";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      {/* Subscribe section */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "90%" }}>
          <div className={styles["footer-subscribe"]}>
            <h2 className={styles["footer-subscribe-text"]}>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>

            <div className={styles["footer-subscribe-action"]}>
              <input
                type="text"
                name="promo_code"
                id="promo_code"
                placeholder="Enter your email address"
                className={styles["footer-subscribe-action-text-field"]}
              />

              <button
                className={styles["footer-subscribe-action-button"]}
                type="button"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>

          {/* Main Footer section */}
          <div className={`${styles["footer-main"]} flex justify-between`}>
            <div className={styles["footer-main-item"]}>
              <div>
                <h2>{appConfig.appName}</h2>
                <p>
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              </div>
              <div></div>
            </div>

            {FOOTER_MAIN_ITEMS.map((item, i) => (
              <div className={styles["footer-main-item"]} key={i}>
                <h4 className={styles["footer-main-item-title"]}>
                  {item.title}
                </h4>

                {item.links.map((link, i) => (
                  <Link
                    to={link.href}
                    key={i}
                    className={styles["footer-main-item-link"]}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
