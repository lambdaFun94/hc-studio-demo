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
    $id: "state-directory",
    fields: ["id", "uid", "meta", "name", "slug", "c_addressRegionDisplayName"],
    filter: {
      entityTypes: ["ce_state"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

const StateDirectory: Template<TemplateRenderProps> = ({
  document,
  relativePrefixToRoot,
}) => {
  const {
    name,
    dm_directoryChildren,
    dm_directoryChildrenCount,
    dm_directoryParents,
    c_addressRegionDisplayName,
  } = document;

  return (
    <PageLayout
      title={`Health Care Facilities in ${c_addressRegionDisplayName}`}
      breadcrumbs={[
        { label: "All Locations", href: "/locations" },
        ...buildBreadCrumbs(dm_directoryParents, relativePrefixToRoot),
      ]}
    ></PageLayout>
  );
};

export default StateDirectory;
