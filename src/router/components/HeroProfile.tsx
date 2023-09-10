import { IMarvelHeros } from "../../commonConfig";
import HeroListItem from "./HeroListItem";
import styles from "./HeroProfile.module.css";

const HeroProfile = ({ id, name, thumbnail, description }: IMarvelHeros) => {
  return (
    <div>
      <section className={styles.HeroProfile}>
        <h2 className={styles.HeroTitle}>Hero Profile</h2>
        <ul className={styles.HeroDetail}>
          <HeroListItem
            key={id}
            id={id}
            name={name}
            thumbnail={{
              path: thumbnail?.path,
              extension: thumbnail?.extension,
            }}
          />
          {description && (
            <li>
              <p className={styles.HeroDescription}>{description}</p>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default HeroProfile;
