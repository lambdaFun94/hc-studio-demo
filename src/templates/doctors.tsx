import {
  Data,
  Default,
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
} from "@yext/yext-sites-scripts";
import * as React from "react";
import GridSection from "../components/GridSection";
import PageLayout from "../components/PageLayout";
import "../index.css";
import {
  HealthcareProfessional,
  HealthcareProfessionalCustomFields,
} from "../types/kg";

export const config: TemplateConfig = {
  stream: {
    $id: "pros-fad-234",
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
      "headshot",
      "slug",
    ],
    filter: {
      entityTypes: ["healthcareProfessional"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<Data> = ({ document }) => {
  const doctor = document.streamOutput as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return `${doctor.slug}`;
};

export const getHeadConfig: GetHeadConfig<Data> = ({
  document,
}): HeadConfig => {
  const doctor = document.streamOutput as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return {
    title: doctor.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const DoctorPage: Default<Data> = ({ document }) => {
  const doctor = document.streamOutput as HealthcareProfessional &
    HealthcareProfessionalCustomFields;

  console.log(doctor);

  return (
    <PageLayout
      title={doctor.name}
      subtitle={`NPI: ${doctor.npi}`}
      image={doctor.headshot}
    >
      <GridSection title="Specialties" items={doctor.c_specialty} />
    </PageLayout>
  );
};

export default DoctorPage;
