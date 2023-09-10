import { IMarvelContent } from "../../commonConfig";
import styles from "./ComicsContent.module.css";

const ComicsContent = ({
  id,
  thumbnail,
  title,
  variantDescription,
  description,
  creators,
  pageCount,
  prices,
  rating,
}: IMarvelContent) => {
  return (
    <li key={id} className={styles.ContentContainer}>
      {thumbnail ? (
        <figure
          className={styles.ImageBox}
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255, 0.9),rgba(255,255,255, 0.9)), url(${thumbnail?.path}.${thumbnail?.extension})`,
          }}
        >
          <img src={`${thumbnail?.path}.${thumbnail?.extension}`} alt={`${title} Cover`} className={styles.Image} />
        </figure>
      ) : (
        <figure className={styles.Empty}>
          <img src="/marvel_logo.jpg" alt="Marvel logo" className={styles.Image} />
        </figure>
      )}

      <div className={styles.TextContainer}>
        <h3 className={styles.ContentTitle}>{title}</h3>
        {variantDescription && <p className={styles.ContentDescription}>{variantDescription}</p>}
        {description && <p className={styles.ContentDescription}>{description}</p>}
        <p className={styles.ContentInformation}>
          {(creators?.items?.length as number) > 0 && <b style={{ fontWeight: "bold" }}>Creator: </b>}
          {
            creators?.items?.map((item, index) => {
              if (index === 0) {
                return `${item.name}`;
              } else {
                return `, ${item.name}`;
              }
            }) as []
          }
          <br />
          {pageCount ? (
            <span className={styles.ContentInformationSub}>
              {pageCount}pages,
              {prices?.map((item, index) => {
                if (index === 0) {
                  return ` ${item.type}: $${item.price}`;
                } else {
                  return `, ${item.type}: $${item.price}`;
                }
              })}
            </span>
          ) : null}
          {rating ? <span className={styles.ContentInformationSub}>{rating}</span> : null}
        </p>
      </div>
    </li>
  );
};

export default ComicsContent;
