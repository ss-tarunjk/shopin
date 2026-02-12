import styles from "./Footer.module.css";

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
            åß
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
        </div>

        {/* Main Footer section */}
        <div></div>
      </div>
    </footer>
  );
}
