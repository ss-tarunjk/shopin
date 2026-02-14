import { useEffect, useRef, useState } from "react";

import styles from "./NumberAnimation.module.css";

export default function NumberAnimation({ target = 100, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef(null);

  useEffect(() => {
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp.current) {
        startTimestamp.current = timestamp;
      }

      const progress = timestamp - startTimestamp.current;
      const progressPercent = Math.min(progress / duration, 1);

      const currentValue = Math.floor(progressPercent * target);
      setCount(currentValue);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span className={styles["number-animation"]}>{count}</span>;
}
