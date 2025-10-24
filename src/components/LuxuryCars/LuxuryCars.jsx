import styles from "./LuxuryCars.module.css";
import { cardInfo } from "./CardInfo";

const LuxuryCars = () => {
  return (
    <div className={styles.container}>
      <div className={styles.luxuryCars}>
        <h2>Featurd Luxury Cars</h2>
        <div className={styles.buttonContainer}>
          <button>All</button>
          <button>
            <img src="tesla-logo.svg" alt="tesla logo" />
          </button>
          <button>
            <img src="audi-logo.svg" alt="audi logo" />
          </button>
          <button>
            <img src="porsche-logo.svg" alt="porsche logo" />
          </button>
        </div>
        <div className={styles.cardContainerContainer}>
          <div className={styles.cardContainer}>
            {cardInfo.map((info) => (
              <div className={styles.card}>
                <h3>{info.make}</h3>
                <p>{info.model}</p>
                <img src={info.img} alt="car" />
                <div className={styles.cardBackground} />
                <h3>{info.price}</h3>
                <button className={styles.cardBuyBtn}>
                  <img
                    className={styles.buttonImg}
                    src="./shopping-bag.svg"
                    alt="bag"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCars;
