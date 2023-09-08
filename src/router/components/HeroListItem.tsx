import { Link } from "react-router-dom";
import { IMarvelHeros } from "../../interfaces";

const HeroListItem = ({ id, name }: IMarvelHeros) => {
  return (
    <li>
      <Link to={`/character/${id}`}>{name}</Link>
    </li>
  );
};

export default HeroListItem;
