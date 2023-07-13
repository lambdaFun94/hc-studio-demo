import * as React from "react";
import Section from "./molecules/Section";
import GridContainer from "./atoms/GridContainer";
import HStack from "./molecules/HStack";
import TextField from "./atoms/TextField";
import { HexColor } from "@yext/studio";
import { TailwindSize } from "../types/tailwind";

export interface InsurancesProps {
  insurances: {
    name: string;
    logoUrl: string;
  }[];
}

export const initialProps: InsurancesProps = {
  insurances: [
    {
      name: "Aetna",
      logoUrl: "https://dum01j710waoj.cloudfront.net/insurance_300_high.svg",
    },
    {
      name: "BlueCross BlueShield",
      logoUrl: "https://dum01j710waoj.cloudfront.net/insurance_304_high.svg",
    },
    {
      name: "Cigna",
      logoUrl: "https://dum01j710waoj.cloudfront.net/insurance_307_high.svg",
    },
    {
      name: "Medicare",
      logoUrl: "https://dum01j710waoj.cloudfront.net/insurance_356_high.svg",
    },
    {
      name: "UnitedHealthcare",
      logoUrl: "https://dum01j710waoj.cloudfront.net/insurance_323_high.svg",
    },
  ],
};

export default function Insurances({ insurances }: InsurancesProps) {
  return (
    <Section
      titleProps={{ text: "Insurances", fontSize: "xl", fontWeight: "bold" }}
      outerContainerProps={{ padding: "12" }}
    >
      <GridContainer columnCount={2} rowCount={2} rowGap="2.5">
        {insurances.map((insurance, i) => (
          <HStack key={`insurance-${i}`}>
            <img
              src={insurance.logoUrl}
              alt={insurance.name}
              className="h-12"
            />
            <TextField text={insurance.name} />
          </HStack>
        ))}
      </GridContainer>
    </Section>
  );
}
