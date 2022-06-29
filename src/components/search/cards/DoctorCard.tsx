import {
  CardProps,
  renderHighlightedValue,
} from "@yext/answers-react-components";
import * as React from "react";

const DoctorCard = ({ result }: CardProps) => {
  const title = (result.highlightedFields?.name ?? result.name) as string;

  return (
    <div className="border rounded-md p-4 mb-4">
      {title && <div>{renderHighlightedValue(title)}</div>}
      {/* <pre>{JSON.stringify(result.rawData, null, 2)}</pre> */}
      <a href={result.rawData.slug as string}>View Details</a>
    </div>
  );
};

export default DoctorCard;
