import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <ul className={styles.List}>
      {Array(15)
        .fill(<li></li>)
        .map((item, index) => {
          return <li key={index} className={styles.ListItem}></li>;
        })}
    </ul>
  );
};

export default Loading;
