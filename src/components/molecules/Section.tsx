import * as React from "react";
import TextField, { TextFieldProps } from "../atoms/TextField";
import Container, { ContainerProps } from "../atoms/Container";
import { TailwindSize } from "../../types/tailwind";
import { HexColor } from "@yext/studio";

export interface SectionProps {
  children?: React.ReactNode;
  titleProps?: TextFieldProps;
  outerContainerProps?: ContainerProps;
  innerContainerProps?: ContainerProps;
}

export const initialProps: SectionProps = {
  titleProps: {
    text: "Section Title",
    fontFamily: "sans",
    fontSize: "xl",
    fontStyle: "normal",
    fontWeight: "bold",
    textColor: "#111827",
  },
};

export default function Section({
  titleProps,
  outerContainerProps,
  innerContainerProps,
  children,
}: SectionProps) {
  return (
    <Container {...outerContainerProps}>
      <div className="mb-2">
        <TextField {...titleProps} />
      </div>
      <Container {...innerContainerProps}>{children}</Container>
    </Container>
  );
}
