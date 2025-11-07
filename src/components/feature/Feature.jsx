import "../Styles/global.css";
import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <div className={styles["features"]}>
      <div>
        <img src="/Map.svg" alt="map" className={styles["location-map"]} />

        <div className={styles["car-info-section"]}>
          <div className={styles["car-image"]}>
            <img
              src="/featured-car.svg"
              alt="car"
              className={styles["porsche-car-img"]}
            />
            <div>
              <div className={styles["car-info-popup car-info-popup1"]}>
                <h3 className={styles["car-info-h3"]}>800v</h3>
                <p className={styles["car-info-p"]}>Turbo Chargin</p>
              </div>
              <div className={styles["car-info-popup car-info-popup2"]}>
                <h3 className={styles["car-info-h3"]}>350</h3>
                <p className={styles["car-info-p"]}>Km Range</p>
              </div>
              <div className={styles["car-info-popup car-info-popup3"]}>
                <h3 className={styles["car-info-h3"]}>480</h3>
                <p className={styles["car-info-p"]}>Km Travel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

// className={styles[""]}
