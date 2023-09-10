import { Outlet, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import styles from "../../Root.module.css";
import Footer from "../components/Footer";
import { IMarvelHeros } from "../../commonConfig";

const NotFound = () => {
  const [randomBackground, setRandomBackground] = useState("");
  const [searchResult, setSearchResult] = useState<IMarvelHeros[] | undefined>();
  const location = useLocation();
  const navigate = useNavigate();
  const randomizeBackground = () => {
    const number = Math.floor(Math.random() * 11);
    const images = Array(11)
      .fill(0)
      .map((item, index) => index + 1);
    return `url(/backgrounds/${images[number]}.jpg)`;
  };
  useEffect(() => {
    setRandomBackground(randomizeBackground());
  }, [location]);
  useEffect(() => {
    if (searchResult !== undefined && searchResult.length > 0) {
      navigate("/search", { state: [searchResult] });
    }
  }, [searchResult]);
  return (
    <>
      <Header setSearchResult={setSearchResult} />
      <div
        className={styles.Main}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255, 0.7),rgba(255,255,255, 0.5)),
            ${randomBackground}`,
        }}
      >
        <ScrollRestoration />
        <Outlet />
        <Footer text={"404 Not Found"} />
      </div>
    </>
  );
};

export default NotFound;
