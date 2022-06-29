import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { SearchBar, UniversalResults } from "@yext/answers-react-components";
import cx from "classnames";
import * as React from "react";
import searchConfig from "../search.config";
import DoctorCard from "./cards/DoctorCard";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalSearchResults = ({ className }: Props) => {
  return (
    <div className={cx(className)}>
      <AnswersHeadlessProvider {...searchConfig}>
        <SearchBar />
        <UniversalResults
          verticalConfigMap={{
            healthcare_professionals: {
              label: "Doctors",
              CardComponent: DoctorCard,
            },
          }}
        />
      </AnswersHeadlessProvider>
    </div>
  );
};

export default UniversalSearchResults;
