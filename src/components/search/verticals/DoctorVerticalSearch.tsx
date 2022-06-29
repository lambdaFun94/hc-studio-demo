import {
  AppliedFilters,
  CardComponent,
  ResultsCount,
  StandardFacets,
  VerticalResults,
} from "@yext/answers-react-components";
import * as React from "react";
import DoctorCard from "../cards/DoctorCard";
import SearchBar from "../SearchBar";
import SearchExperience from "../SearchExperience";

type Props = {
  //Insert Props Here
  className?: string;
};

const DoctorVerticalSearch = ({ className }: Props) => {
  return (
    <SearchExperience verticalKey="healthcare_professionals">
      <div className="flex">
        <div className="border-r mr-4 pr-4 w-full max-w-md">
          <SearchBar />
          <StandardFacets
            searchable={true}
            defaultExpanded={false}
            customCssClasses={{
              container: "w-full",
            }}
          />
        </div>
        <div className="w-full">
          <div className="flex gap-4">
            <ResultsCount />
            <AppliedFilters />
          </div>
          <VerticalResults CardComponent={DoctorCard as CardComponent} />
        </div>
      </div>
    </SearchExperience>
  );
};

export default DoctorVerticalSearch;
