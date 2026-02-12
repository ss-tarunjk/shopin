import styles from "./Hero.module.css";

const BRAND_IMAGES = ["brand1.png", "brand2.png", "brand3.png", "brand4.png"];

export default function Hero() {
  return (
    <section>
      <div>
        <div>
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button>Shop Now</button>

          <div>
            <div>
              <h3>200+</h3>
              <p>International Brands</p>
            </div>

            <div>
              <h3>2000+</h3>
              <p>High-Quality Products</p>
            </div>

            <div>
              <h3>30000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/images/hero/hero.jpg"
            alt="Hero Image"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className={styles["bg-black"]}>
        {BRAND_IMAGES.map((item, i) => (
          <img
            key={i}
            src={`/images/hero/${item}`}
            alt="Hero Image"
            width={100}
          />
        ))}
      </div>
    </section>
  );
}
