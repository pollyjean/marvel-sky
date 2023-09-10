import HeroListItem from "../components/HeroListItem";
import styles from "./Marvels.module.css";
import { useLocation } from "react-router-dom";
import { IMarvelHeros } from "../../commonConfig";

const Search = () => {
  const location = useLocation();
  const search = location.state[0];

  return (
    <ul className={styles.List}>
      {search.map((item: IMarvelHeros) => (
        <HeroListItem
          key={item.id}
          id={item.id}
          name={item.name}
          thumbnail={{
            path: item?.thumbnail?.path,
            extension: item?.thumbnail?.extension,
          }}
        />
      ))}
    </ul>
  );
};

export default Search;
