import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import Container from "../components/shared/Container";
import FormInput from "../components/shared/Form/Input";

import CardList from "../components/shared/CardList";

import MediaApi from "../services/media";

import { TOP_100, queryPopular, queryTrending } from "../constant/query";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState({
    trending: false,
    popular: false,
    top_100: false,
  });
  const [list, setList] = useState({
    trending: [],
    popular: [],
    top_100: [],
  });
  console.log("list ", list);

  const handleSearch = (value) => {
    navigate(`/search?q=${value}`);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 500);
  }, []);

  useEffect(() => {
    const BODY_5_PAGE = {
      page: 1,
      perPage: 5,
    };

    const BODY_10_PAGE = {
      page: 1,
      perPage: 10,
    };

    const getMedia = async (key, query, variables) => {
      try {
        setLoading((prevState) => ({ ...prevState, [key]: true }));

        const result = await MediaApi.get({
          query,
          variables,
        });

        const res = result.data.data.Page.media.filter((a) => {
          return a.isAdult === false;
        });

        setLoading((prevState) => ({ ...prevState, [key]: true }));

        setList((prevState) => ({ ...prevState, [key]: res }));
      } catch {
        //
      } finally {
        setLoading((prevState) => ({ ...prevState, [key]: false }));
      }
    };

    getMedia("trending", queryTrending, BODY_5_PAGE);
    getMedia("popular", queryPopular, BODY_5_PAGE);
    getMedia("top_100", TOP_100, BODY_10_PAGE);

    return () => debouncedSearch.cancel();
  }, []);

  return (
    <Container>
      <FormInput label="Search" handleChange={debouncedSearch} />

      <CardList
        title="Trending Now"
        list={list.trending}
        loading={loading.trending}
      />
      <CardList
        title="All Time Popular"
        list={list.popular}
        loading={loading.popular}
      />
      <CardList
        column
        title="TOP 100 ANIME"
        list={list.top_100}
        loading={loading.top_100}
      />
    </Container>
  );
};

export default Home;
