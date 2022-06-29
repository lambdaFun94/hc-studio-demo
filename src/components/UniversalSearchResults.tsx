import { useAnswersActions } from "@yext/answers-headless-react";
import { SearchBar, UniversalResults } from "@yext/answers-react-components";
import cx from "classnames";
import * as React from "react";
import { useEffect, useState } from "react";
import DoctorCard from "./cards/DoctorCard";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalSearchResults = ({ className }: Props) => {
  const searchActions = useAnswersActions();
  const [{ query }, setSearchParams] = useState<any>({});
  // useEffect(() => {
  //   if (query && query !== recentSearch) {
  //     searchActions.setQuery(query);
  //     searchActions.executeUniversalQuery();
  //   }
  // }, [query]);

  // useEffect(() => {
  //   if (query !== recentSearch) {
  //     setQuery(recentSearch);
  //   }
  // }, [recentSearch]);

  useEffect(() => {
    if (window) {
      const params = new URLSearchParams(window.location.search);
      setSearchParams(Object.fromEntries(params));
    }
  }, []);

  useEffect(() => {
    console.log("Query Changed");
    if (query) {
      searchActions.setQuery(query);
      searchActions.executeUniversalQuery();
    }
  }, [query]);

  return (
    <div className={cx(className)}>
      <SearchBar
        onSearch={({ query }) => {
          var queryParams = new URLSearchParams(window.location.search);
          // Set new or modify existing parameter value.
          queryParams.set("query", query ?? "");
          // OR do a push to history
          history.pushState(null, "", "?" + queryParams.toString());
          if (query) {
            searchActions.setQuery(query);
            searchActions.executeUniversalQuery();
          }
        }}
      />
      <UniversalResults
        verticalConfigMap={{
          healthcare_professionals: {
            label: "Doctors",
            CardComponent: DoctorCard,
          },
        }}
      />
    </div>
  );
};

export default UniversalSearchResults;
