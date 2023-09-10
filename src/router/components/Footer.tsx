import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
interface Props {
  text: string | undefined;
}

const Footer = ({ text }: Props) => {
  const isNotFound = text?.includes("Not Found");
  return (
    <footer className={styles.Wrap}>
      {isNotFound ? (
        <div className={styles.ErrorBox}>
          <h2 className={styles.ErrorText}>{text}</h2>
          <img src={"/404.png"} alt="Thanos To Dust" className={styles.ErrorImage} />
        </div>
      ) : (
        <Link to="https://www.marvel.com/comics" className={styles.Text}>
          {text}
        </Link>
      )}
    </footer>
  );
};

export default Footer;
