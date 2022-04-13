import PropTypes from "prop-types";

import Card from "./Card";
import SkeletonCard from "./Skeleton/Card";

const CardList = ({ title = "", list = [], loading = false }) => {
  return (
    <div className="mt-5">
      {title !== "" && (
        <h1 className="text-xl font-semibold filter drop-shadow-sm mb-5">
          <span className="text-xl font-semibold filter drop-shadow-sm tracking-wide">
            {title}
          </span>
        </h1>
      )}

      {loading ? (
        <div className="grid grid-cols-5 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {list.map((t, i) => (
            <Card data={t} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

CardList.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default CardList;
