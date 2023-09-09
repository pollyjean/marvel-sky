import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { IMarvelComics, IMarvelEvents, IMarvelHeros, IMarvelSeries, IMarvelStories } from "../../commonConfig";

const Hero = () => {
  const { heroId } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<IMarvelHeros>();
  const [comics, setComics] = useState<IMarvelComics[]>();
  const [events, setEvents] = useState<IMarvelEvents[]>();
  const [series, setSeries] = useState<IMarvelSeries[]>();
  const [stories, setStories] = useState<IMarvelStories[]>();

  const marvelHeroApi = async () => {
    const API_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/";
    const LIMIT_PARAMS = "?limit=10&orderBy=modified&series=24229,1058,2023";

    const jsonCharacter = await (await fetch(`${API_URL}${heroId}`)).json();
    setCharacter(jsonCharacter.data.results[0]);
    const [jsonComics, jsonEvents, jsonSeries, jsonStories] = await Promise.all([
      fetch(`${API_URL}${heroId}/comics${LIMIT_PARAMS}`).then((response) => response.json()),
      fetch(`${API_URL}${heroId}/events${LIMIT_PARAMS}`).then((response) => response.json()),
      fetch(`${API_URL}${heroId}/series?limit=10&orderBy=modified`).then((response) => response.json()),
      fetch(`${API_URL}${heroId}/stories${LIMIT_PARAMS}`).then((response) => response.json()),
    ]);

    setComics(jsonComics.data.results ?? []);
    setEvents(jsonEvents.data.results ?? []);
    setSeries(jsonSeries.data.results ?? []);
    setStories(jsonStories.data.results ?? []);
    setLoading(false);
  };

  useEffect(() => {
    marvelHeroApi();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>hero</h1>
            <div>{character?.name}</div>

            {comics?.length === 0 ? null : (
              <div>
                <h2>Comics</h2>
                <ul>
                  {comics?.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {events?.length === 0 ? null : (
              <div>
                <h2>Events</h2>
                <ul>
                  {events?.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {series?.length === 0 ? null : (
              <div>
                <h2>Series</h2>
                <ul>
                  {series?.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {stories?.length === 0 ? null : (
              <div>
                <h2>Stories</h2>
                <ul>
                  {stories?.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Hero;
