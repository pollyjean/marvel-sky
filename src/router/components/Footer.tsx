import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Wrap}>
      <Link to="https://www.marvel.com/comics" className={styles.Text}>
        Marvel Comics {new Date().getFullYear()}
      </Link>
    </footer>
  );
};

export default Footer;
