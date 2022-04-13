import PropTypes from "prop-types";

import Card from "./Card";

const CardList = ({ title = "", list = [] }) => {
  return (
    <div className="mt-10">
      {title !== "" && (
        <h1 className="text-xl font-semibold filter drop-shadow-sm">
          <span className="text-xl font-semibold filter drop-shadow-sm tracking-wide">
            {title}
          </span>
        </h1>
      )}

      <div className="flex flex-wrap justify-items-start justify-between align-middle space-y-1">
        {list.map((t, i) => (
          <Card data={t} key={i} />
        ))}
      </div>
    </div>
  );
};

CardList.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
};

export default CardList;
