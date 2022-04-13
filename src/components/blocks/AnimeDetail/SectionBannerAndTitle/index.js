import PropTypes from "prop-types";
import Container from "../../../shared/Container";

import HTMLRender from "../../../shared/HTMLRender";

import "./style.scss";

const SectionBannerAndTitle = ({
  bannerImage = "",
  coverImage = "",
  title = "",
  description = "",
}) => {
  const menu = [
    {
      title: "Overview",
    },
    {
      title: "Characters",
    },
    {
      title: "Staff",
    },
    {
      title: "Stats",
    },
    {
      title: "Social",
    },
    {
      title: "Forum",
    },
  ];

  return (
    <div className="section-banner-and-title">
      <div className="section-banner-and-title__banner">
        <img src={bannerImage} alt="banner" />
      </div>

      <Container>
        <div className="flex section-banner-and-title__detail py-5">
          <div className="cover-image">
            <img src={coverImage} alt="cover" />
          </div>

          <div className="copywriting ml-4">
            <h1 className="text-xl font-semibold pb-4">{title}</h1>

            <HTMLRender content={description} />
          </div>
        </div>

        <div className="flex items-items justify-evenly pb-4">
          <ul className="pa-0 flex">
            {menu.map((item) => (
              <li className="mx-4 cursor-pointer">{item.title}</li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

SectionBannerAndTitle.propTypes = {
  image: PropTypes.string,
};

export default SectionBannerAndTitle;
