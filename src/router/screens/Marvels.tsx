import { useEffect, useState } from "react";
import Loading from "./Loading";
import HeroListItem from "../components/HeroListItem";
import { IMarvelHeros } from "../../commonConfig";
import styles from "./Marvels.module.css";

const Marvels = () => {
  const API_URL = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/`;
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<IMarvelHeros[]>([]);
  const marvelHerosApi = async () => {
    const json = await (await fetch(`${API_URL}characters?limit=50&orderBy=modified&series=24229,1058,2023`)).json();
    setList(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    marvelHerosApi();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul className={styles.List}>
            {list.map((item) => (
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
        </>
      )}
    </>
  );
};

export default Marvels;
