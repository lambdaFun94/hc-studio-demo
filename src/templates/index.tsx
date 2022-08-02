import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import {
  FaCalendar,
  FaHandHoldingMedical,
  FaHeartbeat,
  FaMoneyBill,
} from "react-icons/fa";
import Footer from "../components/Footer";
import GridSection from "../components/GridSection";
import Header from "../components/Header";
import DoctorFinderSearchBar from "../components/search/DoctorFinderSearchBar";
//@ts-ignore
import officeImage from "../images/homepage-background.jpg?w=1200&h=600";
import "../index.css";
import { defaultHeadConfig } from "../utilities";

export const config: TemplateConfig = {
  stream: {
    $id: "homepage-stream",
    filter: {
      entityTypes: ["ce_homePage"],
    },
    fields: [
      "name",
      "c_headline",
      "c_featuredProcedures.id",
      "c_featuredProcedures.name",
      "c_featuredProcedures.slug",
      "c_featuredSpecialties.id",
      "c_featuredSpecialties.slug",
      "c_featuredSpecialties.name",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = (data) => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    ...defaultHeadConfig,
  };
};

const keyActions: {
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    label: "Get Care Now",
    icon: <FaHeartbeat />,
  },
  {
    label: "Schedule an Appointment",
    icon: <FaCalendar />,
  },
  {
    label: "Pay a Bill",
    icon: <FaMoneyBill />,
  },
  {
    label: "Make a Referral",
    icon: <FaHandHoldingMedical />,
  },
];

const Index: Template<TemplateRenderProps> = ({ document }) => {
  const { c_featuredProcedures, c_featuredSpecialties, c_headline } = document;
  // const {
  //   __site: { c_featuredSpecialties, c_featuredProcedures },
  // } = data.document as any as { __site: Site };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow mx-auto w-full max-w-screen-lg px-2 py-4">
        <div className="flex flex-col gap-8 mb-8">
          <img src={officeImage} className="rounded-xl" />
          <div className="lg:-mt-36 lg:mx-24 bg-gray-100 shadow-lg rounded-lg bg-opacity-90">
            <DoctorFinderSearchBar headline={c_headline} />
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {keyActions.map((a) => (
              <div
                key={a.label}
                className="bg-gray-100 flex items-center justify-center gap-4 flex-col py-10 hover:bg-blue-700 group transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div className="text-4xl text-blue-700 group-hover:text-white transition-colors">
                  {a.icon}
                </div>
                <div className="text-2xl font-bold text-center group-hover:text-white transition-colors">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
          <GridSection
            title="Feature Specialties"
            items={c_featuredSpecialties}
          />
          <GridSection
            title="Feature Procedures"
            items={c_featuredProcedures}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
