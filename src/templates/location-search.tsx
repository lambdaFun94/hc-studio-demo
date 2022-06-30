import { VerticalResults } from "@yext/answers-react-components";
import { Data, GetHeadConfig } from "@yext/yext-sites-scripts";
import * as React from "react";
import PageLayout from "../components/PageLayout";
import GenericCard from "../components/search/cards/GenericCard";
import SearchExperience from "../components/search/SearchExperience";
import { defaultHeadConfig } from "../utilities";

type Props = {
  //Insert Props Here
  className?: string;
};

export const getPath = () => {
  return `locations`;
};

export const getHeadConfig: GetHeadConfig<Data> = () => {
  return {
    ...defaultHeadConfig,
    title: "Find a Location",
  };
};

const LocationSearch = ({ className }: Props) => {
  return (
    <SearchExperience verticalKey="healthcare_facilities">
      <PageLayout fullWidth noPadding title="Location Search" hideTitle>
        <div className="relative w-full h-screen">
          <div className="absolute bg-green-300 inset-0"></div>
          <div className="absolute w-full max-w-md p-8 inset-0 ">
            <div className="bg-white h-full  rounded-md shadow-lg border">
              <div className="p-4">
                <h3 className="text-lg font-medium">Find a Location</h3>
              </div>
              <div>
                <VerticalResults CardComponent={GenericCard} />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </SearchExperience>
  );
};

export default LocationSearch;
