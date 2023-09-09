import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.Wrap}>
      <Link to={pathname === "/" ? "/#main" : "/"} className={styles.Link}>
        <h1 className={styles.Logo}>
          <img src={"/marvel_logo.jpg"} className={styles.LogoImage} alt="Marvel Logo" />{" "}
          <span className={styles.LogoText}>
            Heros Now<span className={styles.Exclamation}>!</span>
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
