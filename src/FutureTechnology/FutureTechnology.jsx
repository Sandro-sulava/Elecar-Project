import styles from "./FutureTechnology.module.css";
import "../components/styles/global.css";

const FutureTechnology = () => {
  return (
    <div className={styles["car-information-container"]}>
      <div className={styles["car-interior-container"]}>
        <img
          src="/interior.png"
          alt="car-interior"
          className={styles["car-interior"]}
        />
        <div className={styles["car-info-popup"]}>
          <p>2,500+</p>
          <span>Superchargers placed along popular routes</span>
        </div>
      </div>

      <div className={styles["future-tech-container"]}>
        <h2>Machines With Future Technology</h2>
        <p>
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with new
          and innovative platforms that last a long time.
        </p>
        <button className={styles["know-more-button"]}>Know more</button>
      </div>
    </div>
  );
};

export default FutureTechnology;
