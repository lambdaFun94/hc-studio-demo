import * as React from "react";
import { TailwindSize } from "../../types/tailwind";
import { HexColor } from "@yext/studio";

export interface ContainerProps {
  children?: React.ReactNode;
  paddingLeft?: TailwindSize;
  paddingRight?: TailwindSize;
  paddingTop?: TailwindSize;
  paddingBottom?: TailwindSize;
  paddingX?: TailwindSize;
  paddingY?: TailwindSize;
  padding?: TailwindSize;
  margin?: TailwindSize;
  marginTop?: TailwindSize;
  marginBottom?: TailwindSize;
  marginLeft?: TailwindSize;
  marginRight?: TailwindSize;
  marginX?: TailwindSize;
  marginY?: TailwindSize;
  backgroundColor?: HexColor;
}

export const initialProps: Required<Omit<ContainerProps, "children">> = {
  paddingLeft: "0",
  paddingRight: "0",
  paddingTop: "0",
  paddingBottom: "0",
  paddingX: "0",
  paddingY: "0",
  padding: "0",
  margin: "0",
  marginTop: "0",
  marginBottom: "0",
  marginLeft: "0",
  marginRight: "0",
  marginX: "0",
  marginY: "0",
  backgroundColor: "#ffffff",
};

export default function Container({
  children,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingX,
  paddingY,
  padding,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
  backgroundColor,
}: ContainerProps) {
  const className = `px-${paddingX} py-${paddingY} px-${paddingLeft} px-${paddingRight} py-${paddingTop} py-${paddingBottom} p-${padding} mx-${marginX} my-${marginY} mx-${marginLeft} mx-${marginRight} my-${marginTop} my-${marginBottom} m-${margin}`;

  return (
    <div className={className} style={{ backgroundColor }}>
      {children}
    </div>
  );
}
