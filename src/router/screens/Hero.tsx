import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { API_URL, IMarvelContent, IMarvelHeros } from "../../commonConfig";
import styles from "./Hero.module.css";
import HeroProfile from "../components/HeroProfile";
import ComicsContent from "../components/ComicsContent";

const Hero = () => {
  const { heroId } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<IMarvelHeros>();
  const [comics, setComics] = useState<IMarvelContent[]>();
  const [events, setEvents] = useState<IMarvelContent[]>();
  const [series, setSeries] = useState<IMarvelContent[]>();
  const [stories, setStories] = useState<IMarvelContent[]>();

  const marvelHeroApi = async () => {
    const LIMIT_PARAMS = "?limit=5&orderBy=modified";
    const jsonCharacter = await (await fetch(`${API_URL}/${heroId}`)).json();
    setCharacter(jsonCharacter.data.results[0]);
    const [jsonComics, jsonEvents, jsonSeries, jsonStories] = await Promise.all([
      fetch(`${API_URL}/${heroId}/comics${LIMIT_PARAMS}`).then((response) => response.json()),
      fetch(`${API_URL}/${heroId}/events${LIMIT_PARAMS}`).then((response) => response.json()),
      fetch(`${API_URL}/${heroId}/series?limit=10&orderBy=modified`).then((response) => response.json()),
      fetch(`${API_URL}/${heroId}/stories${LIMIT_PARAMS}`).then((response) => response.json()),
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
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.Detail}>
        <HeroProfile
          id={character?.id}
          name={character?.name}
          thumbnail={character?.thumbnail}
          description={character?.description}
        />

        <div>
          {comics?.length === 0 && (
            <>
              <h2 className={styles.CategoryTitle}>Comics</h2>
              <ul>
                {comics?.map((item) => {
                  return (
                    <ComicsContent
                      key={item.id}
                      id={item.id}
                      thumbnail={item.thumbnail}
                      title={item.title}
                      variantDescription={item.variantDescription}
                      description={item.description}
                      creators={item.creators}
                      pageCount={item.pageCount}
                      prices={item.prices}
                    />
                  );
                })}
              </ul>
            </>
          )}
          {events?.length === 0 && (
            <div>
              <h2 className={styles.CategoryTitle}>Events</h2>
              <ul>
                {events?.map((item) => {
                  if (item.thumbnail?.path?.includes("image_not_available")) {
                    return null;
                  } else {
                    return (
                      <ComicsContent
                        key={item.id}
                        id={item.id}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        description={item.description}
                      />
                    );
                  }
                })}
              </ul>
            </div>
          )}
          {series?.length === 0 && (
            <div>
              <h2 className={styles.CategoryTitle}>Series</h2>
              <ul>
                {series?.map((item) => {
                  if (item.thumbnail?.path?.includes("image_not_available")) {
                    return null;
                  } else {
                    return (
                      <ComicsContent
                        key={item.id}
                        id={item.id}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        description={item.description}
                        creators={item.creators}
                        rating={item.rating}
                      />
                    );
                  }
                })}
              </ul>
            </div>
          )}
          {stories?.length === 0 && (
            <div>
              <h2 className={styles.CategoryTitle}>Stories</h2>
              <ul>
                {stories?.map((item) => (
                  <ComicsContent
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    creators={item.creators}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
