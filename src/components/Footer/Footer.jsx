import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src="logo.svg" alt="logo" />
          <p>
            We offer the best electric cars of <br /> the most recognized brands
            in <br /> the world.
          </p>
        </div>

        <div className={styles.footerList}>
          <span>Company</span>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Cars</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerList}>
          <span>Information</span>
          <ul>
            <li>
              <a href="#">Request a quote</a>
            </li>
            <li>
              <a href="#">Find a dealer</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerList} ${styles.footerSocials}`}>
          <span>Follow us</span>
          <ul>
            <li>
              <a href="#">
                <img src="facebook-logo.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="instagram-logo.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="twitter-logo.svg" alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <img src="copyright.svg" alt="copyright" />
        <p>Bedimcode. All rights reserved</p>
      </div>
      <div className={styles.footerShapes1} />
      <div className={styles.footerShapes2} />
    </div>
  );
};

export default Footer;
