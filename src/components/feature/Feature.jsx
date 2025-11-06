import "../Styles/global.css";
import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <div className={styles["features"]}>
      <div>
        <div>
          <img src="/Map.svg" alt="map" className={styles["location-map"]} />
        </div>
        <div className={styles["car-image"]}>
          <img src="/featured-car.svg" alt="car" />
        </div>
        <div>
          <div>
            <p>800v</p>
            <span>Turbo Chargin</span>
          </div>
          <div>
            <p>350</p>
            <span>Km Range</span>
          </div>
          <div>
            <p>480</p>
            <span>Km Travel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
