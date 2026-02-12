import styles from "./SocialMediaIcon.module.css";

export default function SocialMediaIcon({
  icon,
  title = "",
  type = "button",
  onClick = () => {},
  isBlack = false,
}) {
  return (
    <button
      className={`${styles["icon-button"]} ${isBlack ? styles["icon-button-black"] : ""}`}
      type={type}
      title={title}
    >
      {icon}
    </button>
  );
}
