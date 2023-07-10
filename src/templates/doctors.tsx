import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import DoctorCard from "../components/DoctorCard";
import SellingPoints from "../components/SellingPoints";
import Container from "../components/atoms/Container";
import Layout from "../components/atoms/Layout";
import MultilineTextField from "../components/atoms/MultilineTextField";
import Section from "../components/molecules/Section";
import "../index.css";
import {
  HealthcareProfessional,
  HealthcareProfessionalCustomFields,
} from "../types/kg";

export const config: TemplateConfig = {
  stream: {
    $id: "doctors",
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

const DoctorPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const doctor = document as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  return (
    <Layout backgroundColor="#FFFFFF">
      <Container
        backgroundColor="#fff7ed"
        marginY=""
        marginX=""
        marginRight=""
        marginLeft=""
        marginBottom=""
        marginTop=""
        margin=""
        padding="12"
        paddingY=""
        paddingX=""
        paddingBottom=""
        paddingTop=""
        paddingRight=""
        paddingLeft=""
      >
        <DoctorCard
          name="John Doe"
          specialty="Primary Care Doctor"
          rating={4.94}
          ratingCount={325}
          location="New York, NY"
          locationCount={2}
          inNetwork={true}
          avatarUrl="https://a.mktgcdn.com/p/jwn23ktRk6uKz65OR7hl_SYIzvWgsk1XoCSFESbCgmY/300x375.jpg"
          backgroundColor="#FFFFFF"
        />
      </Container>
      <Container
        paddingLeft="0"
        paddingRight="0"
        paddingTop="0"
        paddingBottom="0"
        paddingX="20"
        paddingY="8"
        padding="0"
        margin="0"
        marginTop="0"
        marginBottom="0"
        marginLeft="0"
        marginRight="0"
        marginX="0"
        marginY="0"
        backgroundColor="#ffffff"
      >
        <SellingPoints
          sellingPoints={[
            {
              icon: "Star",
              title: "This is a selling point",
              description: "This is a description of the selling point",
            },
          ]}
        />
      </Container>
      <Section
        titleProps={{
          text: `About`,
          fontFamily: "sans",
          fontSize: "xl",
          fontStyle: "normal",
          fontWeight: "bold",
          textColor: "#111827",
        }}
        innerContainerProps={{
          backgroundColor: "#FFFFFF",
          marginY: "",
          marginX: "",
          marginRight: "",
          marginLeft: "",
          marginBottom: "",
          marginTop: "",
          margin: "",
          padding: "",
          paddingY: "",
          paddingX: "",
          paddingBottom: "",
          paddingTop: "",
          paddingRight: "",
          paddingLeft: "",
        }}
        outerContainerProps={{
          backgroundColor: "#FFFFFF",
          marginY: "",
          marginX: "",
          marginRight: "",
          marginLeft: "",
          marginBottom: "",
          marginTop: "",
          margin: "",
          padding: "12",
          paddingY: "",
          paddingX: "",
          paddingBottom: "",
          paddingTop: "",
          paddingRight: "",
          paddingLeft: "",
        }}
      >
        <MultilineTextField
          text="Dr. Schleider is in network with these insurances: Geha PPO, Meritain PPO, and United Health care student services. any insurances not listed is considered out of network and subject to out of network pricing. Dr. Schleider, welcomes all new patients to the practice before psychiatrist consults to make sure patients have had a complete medical evaluation before any psychiatric assessment is done. Dr. Schleider is a family doctor and addiction medicine doctor. He founded and runs his psychiatry based medical practice and has special interest in mental health.\n\nDr. Natan Schleider attended medical school at Columbia University Health Sciences in Collaboration with Ben Gurion University of the Negev where Dr. Schleider obtained his Medical Doctorate (2002).\n\nResidency training in Family Medicine was completed at Overlook Hospital in Summit, New Jersey (2004). Dr. Natan Schleider, M.D. had the honor of Chief Resident at Overlook Hospital (2005).\n\nDr. Natan Schleider, M.D. has an unrestricted license to practice medicine in New York State.\n\nAcademies and societies with whom Dr. Natan Schleider, M.D., actively participate, include the American Academy of Family Physicians, American Psychiatric Association, and the American Society of Addiction Medicine."
          fontSize="md"
          fontFamily="sans"
          fontWeight="normal"
          fontStyle="normal"
          textColor="#111827"
        />
      </Section>
    </Layout>
  );
};

export default DoctorPage;
