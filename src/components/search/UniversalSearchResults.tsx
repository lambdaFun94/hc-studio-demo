import { UniversalResults } from "@yext/answers-react-components";
import * as React from "react";
import DoctorCard from "./cards/DoctorCard";
import SearchBar from "./SearchBar";
import SearchExperience from "./SearchExperience";

type Props = {
  //Insert Props Here
  className?: string;
};

const UniversalSearchResults = ({ className }: Props) => {
  return (
    <SearchExperience>
      <SearchBar />
      <UniversalResults
        verticalConfigMap={{
          healthcare_professionals: {
            label: "Doctors",
            CardComponent: DoctorCard,
          },
        }}
      />
    </SearchExperience>
  );
};

export default UniversalSearchResults;
