import { useEffect, useState } from "react";
import Loading from "./Loading";
import HeroListItem from "../components/HeroListItem";
import { IMarvelHeros } from "../../interfaces";
import { marvelHerosApi } from "../../api.ts"

const Marvels = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<IMarvelHeros[]>([]);

  useEffect(() => {
    const json = marvelHerosApi();
    setList(json.data.results);
    setLoading(false);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>Characters</h1>
            <ul>
              {list.map((item) => (
                <HeroListItem key={item.id} id={item.id} name={item.name} />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Marvels;
