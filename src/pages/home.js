import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import Container from "../components/shared/Container";
import FormInput from "../components/shared/Form/Input";

import CardList from "../components/shared/CardList";

import MediaApi from "../services/media";

import { queryPopular, queryTrending } from "../constant/query";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({
    trending: [],
    popular: [],
  });

  const handleSearch = (value) => {
    navigate(`/search?q=${value}`);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 500);
  }, []);

  useEffect(() => {
    const variables = {
      page: 1,
      perPage: 5,
    };

    const getMedia = async (key, query) => {
      try {
        setLoading(true);

        const result = await MediaApi.get({
          query,
          variables,
        });

        const res = result.data.data.Page.media.filter((a) => {
          return a.isAdult === false;
        });

        setList((prevState) => ({ ...prevState, [key]: res }));
      } catch {
        //
      } finally {
        setLoading(false);
      }
    };

    getMedia("trending", queryTrending);
    getMedia("popular", queryPopular);

    return () => debouncedSearch.cancel();
  }, []);

  return (
    <Container>
      <FormInput label="Search" handleChange={debouncedSearch} />

      <CardList title="Trending Now" list={list.trending} loading={loading} />
      <CardList
        title="All Time Popular"
        list={list.popular}
        loading={loading}
      />
    </Container>
  );
};

export default Home;
