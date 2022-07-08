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
//@ts-ignore
import officeImage from "../images/homepage-background.jpg?w=1200&h=600";
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
    <PageLayout>
      <img src={officeImage} className="rounded-xl" />
      <div className="lg:-mt-36 lg:mx-24 bg-gray-100 shadow-lg rounded-lg bg-opacity-90">
        <DoctorFinderSearchBar />
      </div>
      {/* <GridSection title="Feature Specialties" items={c_featuredSpecialties} /> */}
      {/* <GridSection title="Feature Procedures" items={c_featuredProcedures} /> */}
    </PageLayout>
  );
};

export default Index;
