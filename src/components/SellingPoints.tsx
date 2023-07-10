import * as React from "react";
import GridContainer from "./atoms/GridContainer";
import HStack from "./molecules/HStack";
import VStack from "./molecules/VStack";
import TextField from "./atoms/TextField";
import Icon from "./atoms/Icon";
import { IconType } from "../types/icons";

export interface SellingPointsProps {
  sellingPoints: {
    icon?: IconType;
    title?: string;
    description?: string;
  }[];
}

export const initialProps: SellingPointsProps = {
  sellingPoints: [
    {
      icon: "Star",
      title: "This is a selling point",
      description: "This is a description of the selling point",
    },
  ],
};

export default function SellingPoints({ sellingPoints }: SellingPointsProps) {
  return (
    <GridContainer
      backgroundColor="#ffffff"
      rowCount={2}
      columnCount={2}
      columnGap="0"
      rowGap="6"
    >
      {sellingPoints.map((sellingPoint, i) => (
        <HStack key={`sp-${i}`} spacing="s">
          <Icon name={sellingPoint.icon} style="solid" color="base" />
          <VStack>
            <TextField
              text={sellingPoint.title}
              fontSize="md"
              fontFamily="sans"
              fontWeight="normal"
              fontStyle="normal"
              textColor="#111827"
            />
            <TextField
              text={sellingPoint.description}
              fontSize="md"
              fontFamily="sans"
              fontWeight="normal"
              fontStyle="normal"
              textColor="#111827"
            />
          </VStack>
        </HStack>
      ))}
    </GridContainer>
  );
}
