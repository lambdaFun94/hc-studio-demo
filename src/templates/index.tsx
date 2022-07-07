import {
  Data,
  Default,
  GetHeadConfig,
  GetPath,
  HeadConfig,
} from "@yext/yext-sites-scripts";
import * as React from "react";
import PageLayout from "../components/PageLayout";
import DoctorFinderSearchBar from "../components/search/DoctorFinderSearchBar";
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
  console.log(data);
  // const {
  //   __site: { c_featuredSpecialties, c_featuredProcedures },
  // } = data.document as any as { __site: Site };
  return (
    <PageLayout title="Healthcare Demo Site">
      <DoctorFinderSearchBar />
      {/* <GridSection title="Feature Specialties" items={c_featuredSpecialties} /> */}
      {/* <GridSection title="Feature Procedures" items={c_featuredProcedures} /> */}
    </PageLayout>
  );
};

export default Index;
