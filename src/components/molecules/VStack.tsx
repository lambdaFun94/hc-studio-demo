import * as React from "react";
import Container, { ContainerProps } from "../atoms/Container";
import { TailwindSize } from "../../types/tailwind";
import { HexColor } from "@yext/studio";

export interface VStackProps {
  children?: React.ReactNode;
  containerProps?: ContainerProps;
}

export const initialProps: VStackProps = {
  containerProps: {},
};

const VStack = ({ children, containerProps }: VStackProps) => {
  return (
    <Container {...containerProps}>
      <div className="lg:max-w-lg lg:self-end">{children}</div>
    </Container>
  );
};

export default VStack;
