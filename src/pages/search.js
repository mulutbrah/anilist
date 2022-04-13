import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash";

import useQueryParams from "../hooks/useQueryParams";

import CardList from "../components/shared/CardList";
import Container from "../components/shared/Container";
import FormInput from "../components/shared/Form/Input";

import MediaApi from "../services/media";

import { querySearch } from "../constant/query";

const Search = () => {
  const search = useLocation().search;
  const q = new URLSearchParams(search).get("q");

  const [query, setQuery] = useQueryParams("q", q);

  const [list, setList] = useState([]);

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

    const getMedia = async (query) => {
      const result = await MediaApi.get({
        query,
        variables,
      });

      const res = result.data.data.Page.media;

      setList(res);
    };

    getMedia(querySearch);
  }, [query]);

  return (
    <Container className="py-5">
      <FormInput label="Search" value={query} handleChange={debouncedSearch} />
      {query !== "" && <p className="mt-5">Search: {query}"</p>}
      <CardList list={list} />
    </Container>
  );
};

export default Search;
