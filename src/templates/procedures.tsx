import {
  Data,
  Default,
  GetHeadConfig,
  GetPath,
  GetStaticProps,
  HeadConfig,
  TemplateConfig,
} from "@yext/yext-sites-scripts";
import * as React from "react";
import GridSection from "../components/GridSection";
import PageLayout from "../components/PageLayout";
import "../index.css";
import { Taxonomy_Procedure } from "../types/kg";
import { sortProps } from "../utilities";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "procedures-fad-234",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name",
      "meta",
      "id",
      "uid",
      "slug",
      "taxonomy_synonyms",
      "description",
      "c_relatedSpecialties2.id",
      "c_relatedSpecialties2.slug",
      "c_relatedSpecialties2.name",
    ],

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

export const getStaticProps: GetStaticProps<Data> = async (input) => {
  const procedure = input.document.streamOutput as Taxonomy_Procedure;

  input.document.streamOutput = sortProps(procedure, [
    "c_providersWithSpecialty",
    "taxonomy_relatedConditions",
    "taxonomy_relatedReasonsForVisit",
    "taxonomy_subspecialties",
    "c_relatedProcedures2",
  ]);

  return input;
};

const ProcedurePage: Default<Data> = ({ document }) => {
  const procedure = document.streamOutput as Taxonomy_Procedure;

  return (
    <PageLayout title={procedure.name} subtitle={procedure.description}>
      <GridSection
        title="Related Specialties"
        items={procedure.c_relatedSpecialties2}
      />
    </PageLayout>
  );
};

export default ProcedurePage;
