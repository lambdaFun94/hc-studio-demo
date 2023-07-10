import { HexColor } from "@yext/studio";
import * as React from "react";

export interface LayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
}

export default function Layout({ children, backgroundColor }: LayoutProps) {
  return (
    <div className={`min-h-screen`} style={{ backgroundColor }}>
      <main>{children}</main>
    </div>
  );
}
