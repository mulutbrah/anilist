import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { capitalize } from "lodash";

import { minutesToHms } from "../../../../utils/index";

import "./style.scss";

const CardLong = ({ data }) => {
  return (
    <div className="card-long">
      <Link to={`/anime/${data.id}`}>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="card-long__left flex items-center">
            <img
              className="w-full object-cover"
              src={data.coverImage.medium}
              alt="cover"
            />

            <div className="ml-3">
              <p className="text-gray-600 font-medium">
                {data.title.english === null
                  ? data.title.romaji
                  : data.title.english}
              </p>

              <div className="genres mt-2">
                {data.genres.map((genre) => (
                  <div className="genre">{genre}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-long__right flex">
            <div className="left">
              <p className="text-gray-600 font-medium">{data.averageScore}%</p>
              <p>{data.popularity} users</p>
            </div>

            <div className="mid ml-4">
              <p className="text-gray-600 font-medium capitalize">
                {capitalize(data.format)}
              </p>
              <p>
                {data.format === "MOVIE"
                  ? minutesToHms(data.duration)
                  : data.episodes + " episodes"}
              </p>
            </div>

            <div className="right ml-4 capitalize">
              <p className="text-gray-600 font-medium">
                {capitalize(data.season)} {capitalize(data.seasonYear)}
              </p>
              <p>{capitalize(data.status)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

CardLong.propTypes = {
  data: PropTypes.object,
};

export default CardLong;
