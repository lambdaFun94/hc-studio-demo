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
import { Taxonomy_Specialty } from "../types/kg";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "specialty-fad-234",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name",
      "meta",
      "id",
      "uid",
      "slug",
      "taxonomy_synonyms",
      "taxonomy_relatedConditions.id",
      "taxonomy_relatedConditions.name",
      "taxonomy_relatedConditions.slug",
      "taxonomy_subspecialties.id",
      "taxonomy_subspecialties.name",
      "taxonomy_subspecialties.slug",
      "taxonomy_relatedReasonsForVisit.id",
      "taxonomy_relatedReasonsForVisit.name",
      "taxonomy_relatedReasonsForVisit.slug",
      "taxonomy_relatedProcedures.id",
      "taxonomy_relatedProcedures.name",
      "taxonomy_relatedProcedures.slug",
      "c_providersWithSpecialty.id",
      "c_providersWithSpecialty.name",
      "c_providersWithSpecialty.slug",
      "c_providersWithSpecialty.headshot",
      "c_providersWithSpecialty.c_specialty.name",
    ],
    filter: {
      entityTypes: ["taxonomy_specialty"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<Data> = ({ document }) => {
  const specialty = document.streamOutput as Taxonomy_Specialty;
  return `${specialty.slug}`;
};

export const getStaticProps: GetStaticProps<Data> = async (input) => {
  var specialty = input.document.streamOutput as Taxonomy_Specialty;

  specialty.c_providersWithSpecialty = specialty.c_providersWithSpecialty?.sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  specialty.taxonomy_relatedConditions =
    specialty.taxonomy_relatedConditions?.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

  input.document.streamOutput = specialty;

  return input;
};

export const getHeadConfig: GetHeadConfig<Data> = ({
  document,
}): HeadConfig => {
  const specialty = document.streamOutput as Taxonomy_Specialty;
  return {
    title: specialty.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const SpecialtyPage: Default<Data> = ({ document }) => {
  const specialty = document.streamOutput as Taxonomy_Specialty;
  const subtitle =
    specialty.taxonomy_synonyms?.length > 0
      ? `aka ${specialty.taxonomy_synonyms?.join(", ")}`
      : undefined;
  return (
    <PageLayout title={specialty.name} subtitle={subtitle}>
      <GridSection
        title="Related Conditions"
        items={specialty.taxonomy_relatedConditions}
      />
      <GridSection
        title={`Providers Who Specialize in ${specialty.name}`}
        items={specialty.c_providersWithSpecialty?.map((d) => ({
          ...d,
          image: d.headshot,
          subtitle: d.c_specialty?.map((s) => s.name)?.join(", "),
        }))}
      />
      <GridSection
        title="Subspecialties"
        items={specialty.taxonomy_subspecialties}
      />
      <GridSection
        title="Related Procedures"
        items={specialty.taxonomy_relatedProcedures}
      />
      <GridSection
        title="Reasons for Visit"
        items={specialty.taxonomy_relatedReasonsForVisit}
      />
    </PageLayout>
  );
};

export default SpecialtyPage;
