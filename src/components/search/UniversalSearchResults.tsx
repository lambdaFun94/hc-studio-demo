import { useAnswersActions } from "@yext/answers-headless-react";
import { SearchBar, UniversalResults } from "@yext/answers-react-components";
import cx from "classnames";
import * as React from "react";
import { useLoadStateFromURL } from "../../hooks";
import DoctorCard from "./cards/DoctorCard";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalSearchResults = ({ className }: Props) => {
  const searchActions = useAnswersActions();

  // Load Search Params
  const { setQueryParam } = useLoadStateFromURL();

  return (
    <div className={cx(className)}>
      <SearchBar
        onSearch={({ query }) => {
          setQueryParam("query", query ?? "");
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
