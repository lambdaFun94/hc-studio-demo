import * as React from "react";
import { HexColor } from "@yext/studio";
// import { TextFieldProps } from "../../types/component-props";

export interface TextFieldProps {
  text?: string;
  fontSize?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  fontFamily?: "sans" | "serif" | "mono";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  fontStyle?: "normal" | "italic";
  textColor?: HexColor;
}

export const initialProps: TextFieldProps = {
  text: "This is text",
  fontSize: "md",
  fontFamily: "sans",
  fontWeight: "normal",
  fontStyle: "normal",
  textColor: "#111827",
};

export default function TextField({
  text,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textColor,
}: TextFieldProps) {
  return (
    <p
      className={`text-${fontSize} font-${fontFamily} font-${fontWeight} font-${fontStyle}`}
      style={{ color: textColor }}
    >
      {text}
    </p>
  );
}
