import { Link, useLocation } from "react-router-dom";
import { IMarvelHeros } from "../../commonConfig";
import styles from "./HeroListItem.module.css";

const HeroListItem = ({ id, name, thumbnail }: IMarvelHeros) => {
  const { pathname } = useLocation();
  const identity = name?.includes(" (") ? name.split(" (") : null;
  const heroName = identity === null ? name : identity[0];
  const realName = identity === null ? null : identity[1].slice(0, -1);
  return (
    <>
      {thumbnail?.path?.includes("image_not_available") === true ? null : (
        <li>
          <Link
            to={
              pathname === `/character/${id}`
                ? `https://www.marvel.com/search?limit=5&content_type=characters&query=${heroName}`
                : `/character/${id}`
            }
            className={styles.Link}
          >
            <figure className={styles.ImageBox}>
              <img
                className={styles.Image}
                src={`${thumbnail?.path}.${thumbnail?.extension}`}
                alt={""}
                loading="lazy"
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
