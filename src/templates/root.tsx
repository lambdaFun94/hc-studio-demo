import * as React from "react";
import {
  Template,
  TemplateProps,
  TemplateRenderProps,
  GetPath,
  TemplateConfig,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";

const path = "location/directory";

export const config: TemplateConfig = {
  stream: {
    $id: "directory-root",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "c_addressRegionDisplayName",
      "c_addressCountry",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_root"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

const Root: Template<TemplateRenderProps> = ({ document }) => {
  const {
    name,
    dm_directoryChildren,
    dm_directoryChildrenCount,
    c_addressCountry,
    relativePrefixToRoot,
  } = document;

  return (
    <PageLayout
      title={`Health Care Facilities`}
      breadcrumbs={[{ label: "All Locations", href: "/locations" }]}
    ></PageLayout>
  );
};

export default Root;
