import HeroListItem from "../components/HeroListItem";
import styles from "./Marvels.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { IMarvelHeros } from "../../commonConfig";
import { useEffect } from "react";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  try {
    const search = location.state[0];
    console.log("search: ", search);
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
  } catch {
    useEffect(() => {
      navigate("/");
    });
  }
};

export default Search;
