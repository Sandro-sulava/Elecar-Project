import React from "react";
import styles from "./PopularCars.module.css";
import { popularCars } from "../Data/popularCars";
import shape from "../assets/shape.svg";
import Button from "../assets/Button.svg";
import Acceleration from "../assets/Acceleration.svg";
import charger from "../assets/charger.svg";
import topspeed from "../assets/topspeed.svg";

const PopularCars = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2>Choose Your Electric Car Of The Porsche Brand</h2>
      <div className={styles.popularCards}>
        {popularCars.map((car) => (
          <div key={car.id} className={styles.carCard}>
            <img src={shape} alt={shape} className={styles.carShape} />
            <div className={styles.carInfo}>
              <h3>{car.brand}</h3>
              <p>{car.model}</p>
            </div>
            <img src={car.image} alt={car.model} className={styles.carImage} />
            <div className={styles.carDetails}>
              <div className={styles.Detail}>
                <span>
                  <img
                    src={Acceleration}
                    alt={Acceleration}
                    className={styles.Acceleration}
                  />
                  {car.time}
                </span>
                <span className={styles.carspeed}>
                  <img
                    src={topspeed}
                    alt={topspeed}
                    className={styles.topspeed}
                  />
                  {car.speed}
                </span>
              </div>
              <div className={styles.detail}>
                <h4>
                  <img src={charger} alt={charger} className={styles.charger} />
                  {car.type}
                </h4>
              </div>
              <div className={styles.detail}>
                <h4 className={styles.carPrice}>{car.price}</h4>
              </div>
            </div>
            <div>
              <img src={Button} alt={Button} className={styles.Button} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
