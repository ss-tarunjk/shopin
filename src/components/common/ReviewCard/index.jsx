import styles from "./ReviewCard.module.css";

export default function ReviewCard({ star, name, description, date }) {
  return (
    <article>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h4>{name}</h4>
        icon
      </div>
      <q>{description}</q>
    </article>
  );
}
