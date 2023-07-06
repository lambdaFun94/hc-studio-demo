import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Container from "../components/Container";
import HStack from "../components/HStack";
import "../index.css";
import {
  HealthcareProfessional,
  HealthcareProfessionalCustomFields,
} from "../types/kg";

export const config: TemplateConfig = {
  stream: {
    $id: "pros-doctors-stream-234",
    localization: { locales: ["en"], primary: false },
    fields: ["slug"],
    filter: { entityTypes: ["ce_doctor"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  const doctor = document as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return `${doctor.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const doctor = document as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return {
    title: doctor.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const DoctorPage: Template<TemplateRenderProps> = ({ document }) => {
  const doctor = document as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return (
    <Container>
      <HStack>
        <Image
          image={{
            height: 375,
            url: "https://a.mktgcdn.com/p/jwn23ktRk6uKz65OR7hl_SYIzvWgsk1XoCSFESbCgmY/300x375.jpg",
            width: 375,
            alternateText: ``,
          }}
        />
      </HStack>
    </Container>
  );
};

export default DoctorPage;
