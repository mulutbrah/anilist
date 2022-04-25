import { useEffect, useState } from "react";
import { useParams } from "react-router";

import CardLong from "../components/shared/Card/Long";

import MediaApi from "../services/media";

import { GET_GENRE } from "../constant/query";

const Genre = () => {
  let { name } = useParams();

  const [list, setGenre] = useState([]);
  console.log("list ", list);
  const [body, setBody] = useState({
    total: 0,
    perPage: 10,
    page: 1,
  });

  const getMediaGenre = async (query) => {
    const { data } = await MediaApi.get({
      query,
      genre: name,
      page: body.page,
      perPage: body.perPage,
    });

    const res = data.data.Page.media;

    setGenre(res);
  };

  const handlePagination = (type) => {
    if (type === "next") {
      setBody({ ...body, page: body.page + 1 });
      return;
    }

    setBody({ ...body, page: body.page - 1 });

    getMediaGenre();
  };

  useEffect(() => {
    name.trim() !== "" && getMediaGenre(GET_GENRE);
  }, [name]);

  return (
    <div>
      {list.map((item) => (
        <CardLong data={item} />
      ))}

      <button onClick={() => handlePagination("prev")}>Prev</button>
      <button onClick={() => handlePagination("next")}>Next</button>
    </div>
  );
};

export default Genre;