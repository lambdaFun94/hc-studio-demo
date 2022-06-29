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
      <div className="bg-gray-200 rounded-lg py-4 px-8 lg:py-12 flex flex-col items-center">
        <h2 className="text-2xl font-medium">Find a Provider</h2>
        <div className="flex gap-4 my-4">
          <input
            placeholder="Search for specialty"
            className="border px-2 py-1 rounded-md"
          />
          <input
            placeholder="Search for location"
            className="border px-2 py-1 rounded-md"
          />
          <button>Search</button>
        </div>
      </div>
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
