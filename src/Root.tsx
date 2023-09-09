import { Outlet, useLocation } from "react-router-dom";
import Header from "./router/components/Header";
import { useEffect, useState } from "react";
import styles from "./Root.module.css";
import Footer from "./router/components/Footer";

const Root = () => {
  const [randomBackground, setRandomBackground] = useState("");
  const location = useLocation();
  const randomizeBackground = () => {
    const number = Math.floor(Math.random() * 11);
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return `url(/backgrounds/${images[number]}.jpg)`;
  };
  useEffect(() => {
    const background = randomizeBackground();
    setRandomBackground(background);
  }, [location]);

  return (
    <>
      <Header />
      <div
        className={styles.Main}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.35)),
            ${randomBackground}`,
        }}
      >
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
