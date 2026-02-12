import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import FOOTER_MAIN_ITEMS from "./data.json";

import appConfig from "../config/app.config";

import SocialMediaIcon from "./SocialMediaIcon";

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/insta.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";

import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";

const FOOTER_BOTTOM_ICONS = [
  { icon: <TwitterIcon />, href: "#" },
  { icon: <FacebookIcon />, href: "#", isBlack: true },
  { icon: <InstagramIcon />, href: "#" },
  { icon: <GithubIcon />, href: "#" },
];

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
              <div className={styles["input-wrapper"]}>
                <MailIcon />

                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className={styles["footer-subscribe-action-text-field"]}
                />
              </div>

              <button
                className={styles["footer-subscribe-action-button"]}
                type="button"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
          {/* Main Footer section */}
          <div className={`${styles["footer-main"]}`}>
            <div className={`flex justify-between`}>
              <div className={styles["footer-header-container"]}>
                <div className={styles["footer-header"]}>
                  <h2 className={styles["footer-header-text"]}>
                    {appConfig.appName}
                  </h2>
                  <p className={styles["footer-header-text-description"]}>
                    We have clothes that suits your style and which you’re proud
                    to wear. From women to men.
                  </p>
                </div>

                <div className={styles["footer-header-social-media-icons"]}>
                  {FOOTER_BOTTOM_ICONS.map((icon, i) => (
                    <SocialMediaIcon
                      key={i}
                      icon={icon.icon}
                      onClick={() => {}}
                      title={icon.title}
                      isBlack={icon.isBlack ?? false}
                    />
                  ))}
                </div>
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

            <hr className={styles["line"]} />

            <div className={styles["footer-bottom"]}>
              <p className={styles["footer-bottom-text"]}>
                Shopin.co © 2000-2023, All Rights Reserved
              </p>

              <div className={styles["footer-bottom-icons"]}>
                <div className={styles["footer-bottom-icon"]}>
                  <img src="/images/footer/visa.png" alt="Visa" />
                </div>

                <div className={styles["footer-bottom-icon"]}>
                  <img src="/images/footer/master.png" alt="Mastercard" />
                </div>

                <div className={styles["footer-bottom-icon"]}>
                  <img src="/images/footer/paypal.png" alt="Paypal" />
                </div>

                <div className={styles["footer-bottom-icon"]}>
                  <img src="/images/footer/applepay.png" alt="Apple Pay" />
                </div>

                <div className={styles["footer-bottom-icon"]}>
                  <img src="/images/footer/gpay.png" alt="Google Pay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
