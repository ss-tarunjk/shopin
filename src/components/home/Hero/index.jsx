import styles from "./Hero.module.css";

import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";

const HERO_STATS = [
  {
    id: 1,
    value: "200+",
    description: "International Brands",
  },
  {
    id: 2,
    value: "2000+",
    description: "High-Quality Products",
  },
  {
    id: 3,
    value: "30000+",
    description: "Happy Customers",
  },
];

const BRAND_IMAGES = [
  "brand1.png",
  "brand2.png",
  "brand3.png",
  "brand4.png",
  "brand5.png",
];

export default function Hero() {
  return (
    <section>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-text-container"]}>
          <h1 className={styles["hero-text"]}>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className={styles["hero-description"]}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button type="button" className={styles["hero-button"]}>
            Shop Now
          </button>

          <div className={styles["hero-stats"]}>
            {HERO_STATS.map((item, index) => (
              <>
                <div className={styles["hero-stats-item"]}>
                  <h3 className={styles["hero-stats-item-value"]}>
                    {item.value}
                  </h3>
                  <p className={styles["hero-stats-item-description"]}>
                    {item.description}
                  </p>
                </div>

                {index < HERO_STATS.length - 1 && (
                  <span className={styles["hero-stats-separator"]}></span>
                )}
              </>
            ))}
          </div>
        </div>

        <div className={styles["hero-image-container"]}>
          <div className={styles["hero-image-container-image"]}>
            <img
              src="/images/hero/hero.jpg"
              alt="Hero Image"
              className={styles["hero-image"]}
            />
            <StarIcon className={styles["hero-star-icon1"]} width={56} />

            <StarIcon className={styles["hero-star-icon2"]} width={104} />
          </div>
        </div>
      </div>

      <div className={styles["hero-brands"]}>
        {BRAND_IMAGES.map((item, i) => (
          <img key={i} src={`/images/hero/${item}`} alt="Hero Image" />
        ))}
      </div>
    </section>
  );
}
