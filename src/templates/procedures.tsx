import {
  Data,
  Default,
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
} from "@yext/yext-sites-scripts";
import * as React from "react";
import PageLayout from "../components/PageLayout";
import "../index.css";
import { Taxonomy_Procedure } from "../types/kg";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "procedures-fad-234",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["name", "meta", "id", "uid", "slug", "taxonomy_synonyms"],

    filter: {
      entityTypes: ["taxonomy_procedure"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<Data> = ({ document }) => {
  const procedure = document.streamOutput as Taxonomy_Procedure;
  return procedure.slug;
};

export const getHeadConfig: GetHeadConfig<Data> = ({
  document,
}): HeadConfig => {
  const procedure = document.streamOutput as Taxonomy_Procedure;
  return {
    title: procedure.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const ProcedurePage: Default<Data> = ({ document }) => {
  const procedure = document.streamOutput as Taxonomy_Procedure;
  const subtitle =
    procedure.taxonomy_synonyms?.length > 0
      ? `aka ${procedure.taxonomy_synonyms?.join(", ")}`
      : undefined;
  return <PageLayout title={procedure.name} subtitle={subtitle}></PageLayout>;
};

export default ProcedurePage;
