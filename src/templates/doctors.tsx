/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

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

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "doctors-fad-234",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
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
      entityTypes: ["ce_doctor"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<Data> = (data) => {
  return `${data.document.streamOutput.slug}`;
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
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

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */

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
