import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { IMarvelHero } from "../../interfaces";

const Hero = () => {
  const { heroId } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<IMarvelHero>();

  const marvelHeroApi = async () => {
    const json = await (
      await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${heroId}`)
    ).json();
    setDetail(json.data.results[0]);
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
            <div>{detail?.name}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Hero;
