import "../styles/global.css";
import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <div className={styles["offer-container"]}>
      <img
        src="/backgroundphoto.png"
        alt="bg image"
        className={styles["bg-photo"]}
      />
      <img src="/Offerbg2.svg" alt="bg" className={styles["mobile-bg"]} />

      <div className={styles["offer-section"]}>
        <div className={styles["info-container"]}>
          <div>
            <h2 className={styles["h2-title"]}>
              Do You Want To Receive Special Offers?
            </h2>
            <p className={styles["p-info"]}>
              Be the first to receive all the information about our products and
              new cars by email by subscribing to our mailing list.
            </p>
            <button className={styles["sub-button"]}>Subscribe Now</button>
          </div>
        </div>
        <div className={styles["car-image"]}>
          <img src="/porsche.svg" alt="porsche" />
        </div>
      </div>
    </div>
  );
};

export default Offer;

// className={styles[""]}
