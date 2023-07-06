import * as React from "react";
import {
  Template,
  TemplateProps,
  TemplateRenderProps,
  GetPath,
  TemplateConfig,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import { buildBreadCrumbs } from "../utilities";

export const config: TemplateConfig = {
  stream: {
    $id: "city-directory",
    fields: ["id", "uid", "meta", "name", "slug", "c_addressRegionDisplayName"],
    filter: {
      savedFilterIds: ["dm_us-directory-2_address_city"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = (data) => {
  return data.document.slug;
};

const CityDirectory: Template<TemplateRenderProps> = (data) => {
  const {
    name,
    dm_directoryChildren,
    dm_directoryChildrenCount,
    dm_directoryParents,
    c_addressRegionDisplayName,
  } = data.document;

  return (
    <PageLayout
      title={`Health Care Facilities in ${c_addressRegionDisplayName}`}
      breadcrumbs={[
        { label: "All Locations", href: "/locations" },
        ...buildBreadCrumbs(dm_directoryParents, data.relativePrefixToRoot),
      ]}
    ></PageLayout>
  );
};

export default CityDirectory;
