import * as React from "react";
import { Coordinate } from "../../types/kg";
import TextField from "../atoms/TextField";
import { HexColor } from "@yext/studio";

export interface AddressProps {
  address: {
    city: string;
    countryCode: string;
    line1: string;
    line2?: string;
    postalCode: string;
    region: string;
  };
  geocodedCoordinates?: Coordinate;
  showDirectionsLink?: boolean;
}

export const initialProps = {
  address: {
    city: "New York",
    countryCode: "US",
    line1: "123 Main St",
    line2: "Apt 1",
    postalCode: "10001",
    region: "NY",
  },
  geocodedCoordinates: {
    latitude: 40.7484,
    longitude: 73.9857,
  },
  showDirectionsLink: true,
};

export default function Address({
  address,
  geocodedCoordinates,
  showDirectionsLink,
}: AddressProps) {
  return (
    <div className="text-sm">
      <TextField text={address.line1} />
      {address.line2 && <TextField text={address.line2} />}
      <TextField
        text={`${address.city}, ${address.region} ${address.postalCode}`}
      />
      {showDirectionsLink && geocodedCoordinates && (
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${geocodedCoordinates.latitude},${geocodedCoordinates.longitude}`}
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </a>
      )}
    </div>
  );
}
