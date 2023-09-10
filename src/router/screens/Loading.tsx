import { useLocation } from "react-router-dom";
import styles from "./Loading.module.css";

const Loading = () => {
  const { pathname } = useLocation();
  const isDetail = pathname.includes("character");
  return (
    <>
      {isDetail ? (
        <div className={styles.Detail}>
          <div>
            <section className={styles.HeroProfile}></section>
          </div>
          <div>
            <div>
              <h2 className={styles.CategoryTitle}></h2>
              <ul>
                {Array(4)
                  .fill(<li></li>)
                  .map((item, index) => {
                    return <li key={index} className={styles.ContentContainer}></li>;
                  })}
              </ul>
            </div>
            <div>
              <h2 className={styles.CategoryTitle}></h2>
              <ul>
                {Array(4)
                  .fill(<li></li>)
                  .map((item, index) => {
                    return <li key={index} className={styles.ContentContainer}></li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <ul className={styles.List}>
          {Array(15)
            .fill(<li></li>)
            .map((item, index) => {
              return <li key={index} className={styles.ListItem}></li>;
            })}
        </ul>
      )}
    </>
  );
};

export default Loading;
