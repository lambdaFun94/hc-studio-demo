import { SectionProps } from "@yext/answers-react-components";
import * as React from "react";

const GridSection = ({
  results,
  verticalKey,
  CardComponent,
  header,
  viewMore,
}: SectionProps) => {
  if (!CardComponent) {
    return <div>Missing Card Component</div>;
  }
  return (
    <div>
      <div>{header}</div>
      <div className="grid grid-cols-4 gap-4">
        {results.map((r) => (
          <CardComponent result={r} vertical={true} />
        ))}
      </div>
    </div>
  );
};

export default GridSection;
