import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import GridSection from "../components/GridSection";
import PageLayout from "../components/PageLayout";
import "../index.css";
import { Taxonomy_Condition } from "../types/kg";

export const config: TemplateConfig = {
  stream: {
    $id: "conditions-fad-234",
    localization: { locales: ["en"], primary: false },
    fields: ["name", "description", "slug"],
    filter: { entityTypes: ["taxonomy_conditionTreated"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const condition = document as Taxonomy_Condition;
  return {
    title: condition.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const ConditionsPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const { name, description, slug, c_relatedSpecialties } = document;
  return (
    <PageLayout
      title={`${document.name}`}
      subtitle={`${document.description}`}
      hideTitle={false}
      noPadding={false}
      fullWidth={false}
      image={{ url: ``, width: 0, height: 0, thumbnails: [] }}
    >
      <GridSection
        title="Related Specialties"
        items={[
          {
            id: "",
            name: `Related Speciality 1`,
            slug: `/spec1`,
            image: {
              height: 0,
              width: 0,
              url: `${document.siteDomain}`,
              thumbnails: [],
            },
            subtitle: `See a doctor Fast`,
          },
          {
            id: "",
            name: `Speicality 2`,
            slug: "",
            image: { height: 0, width: 0, url: "", thumbnails: [] },
            subtitle: `Get to the ER`,
          },
        ]}
        className={``}
      />
    </PageLayout>
  );
};

export default ConditionsPage;
