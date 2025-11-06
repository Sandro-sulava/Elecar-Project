import "../styles/global.css";
import styles from "./Logos.module.css";

const Logos = () => {
  return (
    <div className={styles["car-brand-logo-section"]}>
      <img src="/porscheLogo.svg" alt="porshce" />
      <img src="/audiLogo.svg" alt="audi" />
      <img src="/teslaLogo.svg" alt="tesla" />
      <img src="/bmwLogo.svg" alt="bmw" />
      <img src="/lamborginiLogo.svg" alt="lamborgini" />
      <img src="/mitsubishiLogo.svg" alt="mitsubishi" />
    </div>
  );
};

export default Logos;
