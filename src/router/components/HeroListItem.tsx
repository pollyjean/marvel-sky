import { Link } from "react-router-dom";
import { IMarvelHeros } from "../../commonConfig";
import styles from "./HeroListItem.module.css";

const HeroListItem = ({ id, name, thumbnail }: IMarvelHeros) => {
  const identity = name?.includes(" (") ? name.split(" (") : null;
  const heroName = identity === null ? name : identity[0];
  const realName = identity === null ? null : identity[1].slice(0, -1);
  console.log(heroName, realName);
  return (
    <>
      {thumbnail?.path?.includes("image_not_available") === true ? null : (
        <li>
          <Link to={`/character/${id}`} className={styles.Link}>
            <figure className={styles.ImageBox}>
              <img
                className={styles.Image}
                src={`${thumbnail?.path}.${thumbnail?.extension}`}
                alt={`${thumbnail?.path}, ${thumbnail?.extension}`}
              />
            </figure>
            <p className={styles.Identity}>
              <span>{heroName}</span>
              {realName === null ? null : <span className={styles.RealName}>{realName}</span>}
            </p>
          </Link>
        </li>
      )}
    </>
  );
};

export default HeroListItem;
