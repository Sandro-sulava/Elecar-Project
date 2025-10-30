import styles from "./LuxuryCars.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
export const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const LuxuryCars = () => {
  const [brand, setBrand] = useState(null);

  const handleResponse = async (res) => {
    if (!res.ok) {
      const text = await res.text().catch(() => "Unknown error");
      throw new Error(text);
    }
    return res.json();
  };

  const getLuxuryCars = async (brand) => {
    if (brand) {
      const res = await fetch(`${API_BASE}/luxuryCar?brand=${brand}`);
      return handleResponse(res);
    } else {
      const res = await fetch(`${API_BASE}/luxuryCar`);
      return handleResponse(res);
    }
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["luxuryCars", brand],
    queryFn: () => getLuxuryCars(brand),
  });

  return (
    <div className={styles.container}>
      <div className={styles.luxuryCars}>
        <h2>Featurd Luxury Cars</h2>
        <div className={styles.buttonContainer}>
          <button
            style={{
              backgroundColor: !brand && "#4177dc",
            }}
            onClick={() => {
              setBrand(null);
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              {
                brand === "Tesla" ? setBrand(null) : setBrand("Tesla");
              }
            }}
            style={{
              backgroundColor: brand === "Tesla" && "#4177dc",
            }}
          >
            <img src="tesla-logo.svg" alt="tesla logo" />
          </button>
          <button
            style={{
              backgroundColor: brand === "Audi" && "#4177dc",
            }}
            onClick={() => {
              {
                brand === "Audi" ? setBrand(null) : setBrand("Audi");
              }
            }}
          >
            <img src="audi-logo.svg" alt="audi logo" />
          </button>
          <button
            style={{
              backgroundColor: brand === "Porsche" && "#4177dc",
            }}
            onClick={() => {
              {
                brand === "Porsche" ? setBrand(null) : setBrand("Porsche");
              }
            }}
          >
            <img src="porsche-logo.svg" alt="porsche logo" />
          </button>
        </div>
        <div className={styles.cardContainerContainer}>
          <div className={styles.cardContainer}>
            {isPending && <div className={styles.loader} />}
            {error?.message && (
              <p className={styles.error}>Failed to Load Car</p>
            )}
            {data?.map((info) => (
              <div className={styles.card}>
                <h3>{info.brand}</h3>
                <p>{info.model}</p>
                <img src={info.img} alt="car" />
                <div className={styles.cardBackground} />
                <h3>${info.price}</h3>
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
