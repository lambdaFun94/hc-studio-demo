import * as React from "react";
import { staticMapUrl } from "../../utilities";
import { Coordinate } from "../../types/kg";

export interface StaticMapProps {
  coordinates: Coordinate;
  width?: number;
  height?: number;
  className?: string;
}

export const initialProps: StaticMapProps = {
  coordinates: {
    latitude: 40.7128,
    longitude: 74.006,
  },
  width: 300,
  height: 300,
};

const StaticMap = ({
  coordinates,
  width,
  height,
  className,
}: StaticMapProps) => {
  return (
    <>
      <img
        className={className}
        width={width}
        height={height}
        src={staticMapUrl(coordinates, width, height)}
        alt="static map"
      />
    </>
  );
};

export default StaticMap;
