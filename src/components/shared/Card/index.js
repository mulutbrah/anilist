import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";

const Card = ({ data }) => {
  return (
    <Link to={`/anime/${data.id}`}>
      <div className="card">
        <img
          className="w-full object-cover"
          src={data.coverImage.large}
          alt="cover"
        />
        <p className="text-gray-600 mt-1 text-center font-medium">
          {data.title.english === null ? data.title.romaji : data.title.english}
        </p>
      </div>
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
