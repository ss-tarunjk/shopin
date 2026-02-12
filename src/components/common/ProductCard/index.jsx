import styles from "./ProductCard.module.css";

export default function ProductCard({
  images = [],
  name,
  star,
  price,
  discount,
}) {
  return (
    <article>
      <div>
        <img src={images[0]} alt={name} width={100} height={100} />
      </div>

      <h5>{name}</h5>
      <div>
        <div></div>
        <p>{star} / 5</p>
      </div>

      <h4>${price}</h4>
    </article>
  );
}
