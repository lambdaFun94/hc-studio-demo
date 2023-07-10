import * as React from "react";
import { IconType } from "../../types/icons";
import SolidIcon from "./SolidIcon";
import OutlineIcon from "./OutlineIcon";
import { HexColor } from "@yext/studio";

// TODO: Why don't arbitrary colors work with Icons and the text-[color] class?

interface IconProps {
  name?: IconType;
  style?: "solid" | "outline";
  color?: HexColor;
}

// rather than Required, could also do type Omit<IconProps, 'color'> & { color: color };
export const initialProps: Required<IconProps> = {
  name: "Star",
  style: "solid",
  color: "#111827",
};

// TODO: Figure out sizing
export default function Icon({ name, style, color }: IconProps) {
  return style === "solid" ? (
    <SolidIcon
      name={name ?? initialProps.name}
      classname={`h-5 w-5`}
      color={color}
    />
  ) : (
    <OutlineIcon
      name={name ?? initialProps.name}
      classname={`h-5 w-5 ${color}`}
    />
  );
}
