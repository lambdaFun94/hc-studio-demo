import * as React from "react";
import TextField from "./atoms/TextField";
import VStack from "./molecules/VStack";
import Avatar from "./Avatar";
import HStack from "./molecules/HStack";
import Icon from "./atoms/Icon";
import { HexColor } from "@yext/studio";

export interface DoctorCardProps {
  name?: string;
  specialty?: string;
  rating?: number;
  ratingCount?: number;
  location?: string;
  locationCount?: number;
  inNetwork?: boolean;
  avatarUrl?: string;
  backgroundColor?: HexColor;
}

export const initialProps: Required<DoctorCardProps> = {
  name: "John Doe",
  specialty: "Primary Care Doctor",
  rating: 4.94,
  ratingCount: 325,
  location: "New York, NY",
  locationCount: 2,
  inNetwork: true,
  // TODO: replace with placeholder image
  avatarUrl:
    "https://a.mktgcdn.com/p/jwn23ktRk6uKz65OR7hl_SYIzvWgsk1XoCSFESbCgmY/300x375.jpg",
  backgroundColor: "#FFFFFF",
};

export default function DoctorCard({
  name,
  specialty,
  rating,
  ratingCount,
  location,
  locationCount,
  inNetwork,
  avatarUrl,
}: DoctorCardProps) {
  return (
    <HStack spacing="md">
      <Avatar imgUrl={avatarUrl} />
      <VStack>
        <TextField
          text={name}
          fontSize="4xl"
          fontFamily="sans"
          fontWeight="bold"
          fontStyle="normal"
        />
        <TextField
          text={specialty}
          fontSize="sm"
          fontFamily="sans"
          fontWeight="semibold"
          fontStyle="normal"
        />
        <HStack spacing="xs">
          <Icon name="Star" style="solid" color="red" />
          <TextField
            text={rating?.toString()}
            fontSize="sm"
            fontFamily="sans"
            fontWeight="semibold"
            fontStyle="normal"
            textColor="#111827"
          />
          <TextField
            text={`(${ratingCount})`}
            fontSize="sm"
            fontFamily="sans"
            fontWeight="medium"
            fontStyle="normal"
            textColor="#111827"
          />
        </HStack>
        <HStack spacing="xs">
          <Icon name="Location Marker" style="solid" />
          <TextField
            text={location}
            fontSize="sm"
            fontFamily="sans"
            fontWeight="semibold"
            fontStyle="normal"
          />
          <TextField
            text={`${locationCount} Locations`}
            fontSize="sm"
            fontFamily="sans"
            fontWeight="medium"
            fontStyle="normal"
          />
        </HStack>
        <HStack spacing="xs">
          <Icon name="Shield Check" style="solid" color="blue" />
          <TextField
            text={inNetwork ? `In Network Patients Only` : `Out of Network`}
            fontSize="sm"
            fontFamily="sans"
            fontWeight="semibold"
            fontStyle="normal"
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
