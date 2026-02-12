import styles from "./IconButton.module.css";

export default function IconButton({
  icon,
  title = "",
  type = "button",
  onClick = () => {},
}) {
  return (
    <button className={styles["icon-button"]} type={type} title={title}>
      {icon}
    </button>
  );
}
