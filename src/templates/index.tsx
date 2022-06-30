import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { FilterSearch } from "@yext/answers-react-components";
import {
  Data,
  Default,
  GetHeadConfig,
  GetPath,
  HeadConfig,
} from "@yext/yext-sites-scripts";
import * as React from "react";
import GridSection from "../components/GridSection";
import PageLayout from "../components/PageLayout";
import "../index.css";
import searchConfig from "../search.config";
import { defaultHeadConfig } from "../utilities";

export const getPath: GetPath<Data> = (data) => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<Data> = (data): HeadConfig => {
  return {
    ...defaultHeadConfig,
  };
};

const Index: Default<Data> = (data) => {
  return (
    <PageLayout title="Healthcare Demo Site">
      <AnswersHeadlessProvider
        {...searchConfig}
        verticalKey="healthcare_professionals"
      >
        <div className="bg-gray-200 rounded-lg py-4 px-8 lg:py-12 flex flex-col items-center">
          <h2 className="text-2xl font-medium">Find a Provider</h2>
          <div className="flex flex-col md:flex-row gap-4 my-4 w-full mx-8">
            <div className="w-full">
              <FilterSearch
                label="Search for specialty, procedure or provider name"
                placeholder="e.g. Cardiology or Jim Shaw"
                searchFields={[
                  {
                    entityType: "healthcareProfessional",
                    fieldApiName: "builtin.location",
                  },
                ]}
              />
            </div>
            <div className="w-full">
              <FilterSearch
                label="Location"
                placeholder="e.g. New York, NY or 10032"
                searchFields={[
                  {
                    entityType: "healthcareProfessional",
                    fieldApiName: "builtin.location",
                  },
                ]}
              />
            </div>
            {/* <SearchButton disabled={!canSearch} className="mt-auto w-36" /> */}
          </div>
        </div>
      </AnswersHeadlessProvider>
      <GridSection
        title="Feature Specialties"
        items={[
          {
            id: "OBGYN",
            name: "OBGYN",
            slug: "obyn",
          },
        ]}
      />
      <GridSection
        title="Feature Procedures"
        items={[
          {
            id: "OBGYN",
            name: "OBGYN",
            slug: "obyn",
          },
        ]}
      />
    </PageLayout>
  );
};

export default Index;
