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
import Insurances from "../components/Insurances";
import NavBar from "../components/NavBar";
import SellingPoints from "../components/SellingPoints";
import Container from "../components/atoms/Container";
import Layout from "../components/atoms/Layout";
import MultilineTextField from "../components/atoms/MultilineTextField";
import StaticMap from "../components/atoms/StaticMap";
import Address from "../components/molecules/Address";
import HStack from "../components/molecules/HStack";
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
    fields: ["c_description", "slug"],
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
    <>
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
        <NavBar labels={["About", "Insurances", "Locations"]} />
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
                title: `Highly reccomended`,
                description: `95% of patients gave this doctor 5 stars`,
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
            text={`${document.c_description}`}
            fontSize="md"
            fontFamily="sans"
            fontWeight="normal"
            fontStyle="normal"
            textColor="#111827"
          />
        </Section>
        <Section
          titleProps={{
            text: `Location`,
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
          <HStack
            spacing="s"
            containerProps={{
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
          >
            <StaticMap
              coordinates={{ latitude: 40.7128, longitude: 74.006 }}
              width={450}
              height={300}
              className={``}
            />
            <Address
              address={{
                city: "New York",
                countryCode: "US",
                line1: "123 Main St",
                line2: "Apt 1",
                postalCode: "10001",
                region: "NY",
              }}
              geocodedCoordinates={{ latitude: 40.7484, longitude: 73.9857 }}
              showDirectionsLink={true}
            />
          </HStack>
        </Section>
      </Layout>
      <Insurances
        insurances={[
          {
            name: "Aetna",
            logoUrl:
              "https://dum01j710waoj.cloudfront.net/insurance_300_high.svg",
          },
          {
            name: "BlueCross BlueShield",
            logoUrl:
              "https://dum01j710waoj.cloudfront.net/insurance_304_high.svg",
          },
          {
            name: "Cigna",
            logoUrl:
              "https://dum01j710waoj.cloudfront.net/insurance_307_high.svg",
          },
          {
            name: "Medicare",
            logoUrl:
              "https://dum01j710waoj.cloudfront.net/insurance_356_high.svg",
          },
          {
            name: "UnitedHealthcare",
            logoUrl:
              "https://dum01j710waoj.cloudfront.net/insurance_323_high.svg",
          },
        ]}
      />
    </>
  );
};

export default DoctorPage;
