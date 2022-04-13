import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash";

import useQueryParams from "../hooks/useQueryParams";

import CardList from "../components/shared/CardList";
import Container from "../components/shared/Container";
import FormInput from "../components/shared/Form/Input";

import MediaApi from "../services/media";

import { queryPopular, queryTrending, querySearch } from "../constant/query";

const Search = () => {
  const [loading, setLoading] = useState(false);

  const search = useLocation().search;
  const q = new URLSearchParams(search).get("q");

  const [query, setQuery] = useQueryParams("q", q);

  const [list, setList] = useState({
    trending: [],
    popular: [],
    search: [],
  });

  const handleSearch = (value) => {
    const searchValue = value.trim();

    setQuery(searchValue);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 500);
  }, []);

  useEffect(() => {
    const variables = {
      search: query || "",
      page: 1,
      perPage: 20,
    };

    const getMedia = async (key, query) => {
      try {
        setLoading(true);

        const result = await MediaApi.get({
          query,
          variables,
        });

        const res = result.data.data.Page.media;

        setList((prevState) => ({ ...prevState, [key]: res }));
      } catch {
        //
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      getMedia("search", querySearch);
    } else {
      getMedia("trending", queryTrending);
      getMedia("popular", queryPopular);
    }

    return () => setList({ trending: [], popular: [], search: [] });
  }, [query]);

  return (
    <Container className="py-5">
      <FormInput label="Search" value={query} handleChange={debouncedSearch} />
      {query && <p className="mt-5">Search: {query}</p>}

      {query ? (
        <CardList list={list.search} loading={loading} />
      ) : (
        <>
          <CardList
            title="Trending Now"
            list={list.trending}
            loading={loading}
          />
          <CardList
            title="All Time Popular"
            list={list.popular}
            loading={loading}
          />
        </>
      )}
    </Container>
  );
};

export default Search;
