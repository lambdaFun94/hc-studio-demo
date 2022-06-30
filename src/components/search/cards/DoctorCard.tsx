import {
  CardProps,
  renderHighlightedValue,
} from "@yext/answers-react-components";
import * as React from "react";
import Img, { Image } from "../../Img";

const DoctorCard = ({ result }: CardProps) => {
  const title = (result.highlightedFields?.name ?? result.name) as string;
  const npi = result.rawData.npi as string;
  const headshot = result.rawData.headshot as Image;
  return (
    <div className="border rounded-md p-4 mb-4 flex gap-4">
      {headshot && (
        <div className="w-12 lg:w-48">
          <Img
            image={headshot}
            className="rounded-md drop-shadow-md"
            aspectRatio={1}
            layout="full-width"
          />
        </div>
      )}
      <div>
        {title && <div>{renderHighlightedValue(title)}</div>}
        {npi && <div className="text-gray-500 text-sm">NPI: {npi}</div>}
        {/* <pre>{JSON.stringify(result.rawData, null, 2)}</pre> */}
        <a href={result.rawData.slug as string}>View Details</a>
      </div>
    </div>
  );
};

export default DoctorCard;
