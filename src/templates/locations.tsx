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
import "../index.css";
import { HealthcareFacility } from "../types/kg";
import { defaultHeadConfig, staticMapUrl } from "../utilities";

export const config: TemplateConfig = {
  stream: {
    $id: "location-page",
    fields: [
      "name",
      "meta",
      "id",
      "uid",
      "address",
      "mainPhone",
      "slug",
      "geocodedCoordinate",
      "c_doctorsPracticingHere.id",
      "c_doctorsPracticingHere.name",
      "c_doctorsPracticingHere.slug",
    ],
    filter: {
      entityTypes: ["healthcareFacility"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  const location = document as HealthcareFacility;
  return `${location.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const location = document as HealthcareFacility;
  return {
    ...defaultHeadConfig,
    title: location.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const LocationPage: Template<TemplateRenderProps> = ({ document }) => {
  const location = document as HealthcareFacility;
  const { geocodedCoordinate, name, address, c_doctorsPracticingHere } =
    location;

  return (
    <PageLayout
      title={location.name}
      //   image={geocodedCoordinate ? staticMapUrl(geocodedCoordinate) : undefined}
      breadcrumbs={[{ label: "All Locations", href: "/locations" }]}
    >
      <div className="flex gap-4">
        {geocodedCoordinate && (
          <img
            src={staticMapUrl(geocodedCoordinate, 300, 300)}
            width={300}
            height={300}
          />
        )}
        <div className="flex flex-col gap-2">
          <div>
            <p>{name}</p>
            <p>{address.line1}</p>
            <p>{address.line2}</p>
            <p>
              {address.city}, {address.region}, {address.postalCode}
            </p>
          </div>
          <Button secondary icon={<FaDirections />}>
            Get Directions
          </Button>
          <Button secondary icon={<FaPhone />}>
            Call Now
          </Button>
        </div>
      </div>
      {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
      <GridSection
        title="Doctors Practicing Here"
        items={c_doctorsPracticingHere}
      />
    </PageLayout>
  );
};

export default LocationPage;
