import {
  SearchBar,
  StandardFacets,
  VerticalResults,
} from "@yext/answers-react-components";
import cx from "classnames";
import * as React from "react";
import DoctorCard from "../cards/DoctorCard";

type Props = {
  //Insert Props Here
  className?: string;
};

const DoctorVerticalSearch = ({ className }: Props) => {
  return (
    <div className={cx(className)}>
      <div className="flex">
        <div className="border-r mr-4 pr-4">
          <SearchBar />
          <StandardFacets />
        </div>
        <div className="w-full">
          <VerticalResults CardComponent={DoctorCard} />
        </div>
      </div>
    </div>
  );
};

export default DoctorVerticalSearch;
