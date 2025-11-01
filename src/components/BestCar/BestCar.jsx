import { useEffect, useState } from "react";
import styles from "./BestCar.module.css";

const BestCar = () => {
  const [pulse, setPulse] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [battery, setBattery] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let tempTimer = 0;
    let mileageTimer = 0;
    let batteryTimer = 0;

    if (isStarted) {
      if (temperature < 24) {
        tempTimer = setInterval(() => {
          setTemperature((prev) => {
            if (prev >= 24) {
              clearInterval(tempTimer);
              return 24;
            }
            return prev + 1;
          });
        }, 50);
      }
      if (mileage < 873) {
        mileageTimer = setInterval(() => {
          setMileage((prev) => {
            if (prev >= 873) {
              clearInterval(mileageTimer);
              return 873;
            }
            return prev + 1;
          });
        }, 5);
      }

      if (battery < 94) {
        batteryTimer = setInterval(() => {
          setBattery((prev) => {
            if (prev >= 94) {
              clearInterval(batteryTimer);
              return 94;
            }
            return prev + 1;
          });
        }, 40);
      }
    }
    return () => {
      clearInterval(tempTimer);
      clearInterval(mileageTimer);
      clearInterval(batteryTimer);
    };
  }, [isStarted]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <h2>Choose The Best Car</h2>
        <h3>Porsche Mission E</h3>
        <div className={styles.model}>
          <img src="/electric.svg" alt="lightning" />
          <p>Electric car</p>
        </div>
        <img
          className={styles.mainImg}
          src="/electric-porshce.svg"
          alt="porshce"
        />
        <div className={styles.carDetails}>
          <div className={styles.blur1} />
          <div className={styles.blur2} />
          <div className={styles.carInfo}>
            <img src="/temperature.svg" alt="temperature" />
            <span>{temperature}°</span>
            <p>TEMPRATURE</p>
          </div>
          <div className={styles.carInfo}>
            <img src="/kilometres.svg" alt="kilometres" />
            <span>{mileage}</span>
            <p>MILEAGE</p>
          </div>
          <div className={styles.carInfo}>
            <img src="/electric-icon.svg" alt="lightning" />
            <span>{battery}%</span>
            <p>BATTERY</p>
          </div>
        </div>
        <div
          className={`${styles.startOuterRing} ${!pulse ? styles.active : ""}`}
        >
          <div
            className={`${styles.startInnerRing} ${
              !pulse ? styles.active : ""
            }`}
          >
            <span
              onClick={() => {
                setPulse(false);
                setIsStarted(true);
              }}
              className={
                pulse ? styles.startAnimation : styles.startNoAnimation
              }
            >
              START
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BestCar;
