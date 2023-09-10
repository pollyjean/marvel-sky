import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL, IMarvelHeros } from "../../commonConfig";

interface ISearchResult {
  setSearchResult: React.Dispatch<React.SetStateAction<IMarvelHeros[] | undefined>>;
}

// eslint-disable-next-line react/prop-types
const Header: React.FC<ISearchResult> = ({ setSearchResult }) => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const marvelSearchApi = async () => {
    const json = await (await fetch(`${API_URL}?limit=10&orderBy=modified&nameStartsWith=${name}`)).json();
    setTimeout(() => {
      if (json.data.count > 0) {
        setSearchResult(json.data.results);
        setName("");
      }
    }, 1000);
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  useEffect(() => {
    name.length > 2 && marvelSearchApi();
  }, [name]);

  return (
    <header className={styles.Wrap}>
      <Link to={pathname === "/" ? "/#main" : "/"} className={styles.Link}>
        <h1 className={styles.Logo}>
          <img src={"/marvel_logo.jpg"} className={styles.LogoImage} alt="Marvel Logo" />{" "}
          <span className={styles.LogoText}>
            Heros Now<span className={styles.Exclamation}>!</span>
          </span>
        </h1>
      </Link>
      <input
        type="text"
        value={name}
        onChange={onChange}
        className={styles.Input}
        placeholder="Find Your Hidden Hero"
      />
    </header>
  );
};

export default Header;
