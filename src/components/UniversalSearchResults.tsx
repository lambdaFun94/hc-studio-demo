import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { SearchBar, UniversalResults } from "@yext/answers-react-components";
import cx from "classnames";
import * as React from "react";
import DoctorCard from "./cards/DoctorCard";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalSearchResults = ({ className }: Props) => {
  return (
    <div className={cx(className)}>
      <AnswersHeadlessProvider
        experienceKey="universal-search"
        apiKey="1ae7d5115422e90cbc0ecc195b2f99f1"
        locale="en"
      >
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