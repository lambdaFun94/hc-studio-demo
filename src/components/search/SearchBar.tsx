import { useAnswersActions } from "@yext/answers-headless-react";
import {
  SearchBar as SB,
  SearchBarProps,
} from "@yext/answers-react-components";
import * as React from "react";
import { removeQueryParam, setQueryParam } from "../../utilities";

const SearchBar = (props: SearchBarProps) => {
  const searchActions = useAnswersActions();

  return (
    <SB
      {...props}
      onSearch={({ query }) => {
        if (query) {
          setQueryParam("query", query ?? "");
        } else {
          removeQueryParam("query");
        }

        if (query) {
          searchActions.setQuery(query);
          searchActions.executeUniversalQuery();
        }
      }}
    />
  );
};

export default SearchBar;
