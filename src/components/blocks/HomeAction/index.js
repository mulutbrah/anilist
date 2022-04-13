import { useState } from "react";
import FormInput from "../../shared/Form/Input";
import MediaApi from "../../../services/media";

import { querySearch } from "../../../constant/query";

const HomeAction = () => {
  const handleSearch = async (e) => {
    const variables = {
      search: e.target.value,
      page: 1,
      perPage: 10,
    };

    try {
      setTimeout(async () => {
        const { data } = await MediaApi.get({
          query: querySearch,
          variables,
        });

        const res = data.data.Page.media;

        console.log("r ", res);

        window.history.pushState({}, "", `/search?q=${e.target.value}`);
      }, 300);
    } catch {
      //
    }
  };

  return (
    <div>
      <FormInput label="Search" handleChange={handleSearch} />
    </div>
  );
};

export default HomeAction;
