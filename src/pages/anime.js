import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MediaApi from "../services/media";

import { queryDetail } from "../constant/query";
import SectionBannerAndTitle from "../components/blocks/AnimeDetail/SectionBannerAndTitle";

const Anime = () => {
  let { id } = useParams();

  const [anime, setAnime] = useState({
    id: "",
    title: {
      english: "",
    },
    description: "",
    coverImage: {
      large: "",
    },
  });

  useEffect(() => {
    const variables = {
      id,
    };

    const getMedia = async (query) => {
      const { data } = await MediaApi.get({
        query,
        variables,
      });

      const res = data.data.Media;

      setAnime(res);
    };

    getMedia(queryDetail);
  }, []);

  return (
    <div>
      <SectionBannerAndTitle
        bannerImage={anime.bannerImage}
        coverImage={anime.coverImage.large}
        title={anime.title.english}
        description={anime.description}
      />
    </div>
  );
};

export default Anime;
