import * as React from "react";
import Container, { ContainerProps } from "../atoms/Container";

type SpacingSize = "xs" | "s" | "md" | "lg" | "xl";
export interface HStackProps {
  children?: React.ReactNode;
  spacing?: SpacingSize;
  containerProps?: Omit<ContainerProps, "children">;
}

export const initialProps: HStackProps = {
  spacing: "s",
  containerProps: {},
};

const spacingMap: Record<SpacingSize, string> = {
  xs: "gap-2",
  s: "gap-4",
  md: "gap-8",
  lg: "gap-12",
  xl: "gap-16",
};

const HStack = ({ children, spacing, containerProps }: HStackProps) => {
  return (
    <Container {...containerProps}>
      <div className={`flex items-center ${spacingMap[spacing ?? "s"]}`}>
        {children}
      </div>
    </Container>
  );
};

export default HStack;
