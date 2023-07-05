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
import { FaDirections, FaPhone } from "react-icons/fa";
import Button from "../components/Button";
import GridSection from "../components/GridSection";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import StaticMap from "../components/StaticMap";
import "../index.css";
import {
  HealthcareProfessional,
  HealthcareProfessionalCustomFields,
} from "../types/kg";

export const config: TemplateConfig = {
  stream: {
    $id: "pros-doctors-stream-234",
    fields: [
      "name",
      "meta",
      "id",
      "uid",
      "address",
      "firstName",
      "lastName",
      "middleName",
      "npi",
      // "mainPhone",
      "c_specialty.id",
      "c_specialty.name",
      "c_specialty.slug",
      "insuranceAccepted",
      "admittingHospitals",
      "c_locationsPracticingAt.id",
      "c_locationsPracticingAt.name",
      "c_locationsPracticingAt.slug",
      "c_locationsPracticingAt.address",
      "c_locationsPracticingAt.geocodedCoordinate",
      "headshot",
      "slug",
    ],
    filter: {
      entityTypes: ["ce_doctor"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  const doctor = document as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return `${doctor.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const doctor = document as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return {
    title: doctor.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const DoctorPage: Template<TemplateRenderProps> = ({ document }) => {
  const doctor = document as HealthcareProfessional &
    HealthcareProfessionalCustomFields;

  return (
    <PageLayout
      title={doctor.name}
      subtitle={`NPI: ${doctor.npi}`}
      image={doctor.headshot}
      breadcrumbs={[{ label: "All Doctors", href: "/doctors" }]}
    >
      <GridSection title="Specialties" items={doctor.c_specialty} />

    </PageLayout>
  );
};

export default DoctorPage;
