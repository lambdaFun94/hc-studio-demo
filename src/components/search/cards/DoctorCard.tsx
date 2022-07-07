import {
  CardProps,
  renderHighlightedValue,
} from "@yext/answers-react-components";
import * as React from "react";
import {
  HealthcareProfessional,
  HealthcareProfessionalCustomFields,
} from "../../../types/kg";
import Button from "../../Button";
import Img, { Image } from "../../Img";

const DoctorCard = ({ result }: CardProps) => {
  const data = result.rawData as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
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
        {data.c_specialty && (
          <div>{data.c_specialty?.map((s) => s.name).join(", ")}</div>
        )}
        {npi && <div className="text-gray-500 text-sm">NPI: {npi}</div>}
        {/* <pre>{JSON.stringify(result.rawData, null, 2)}</pre> */}

        <div className="flex gap-2 mt-4">
          <Button>Book Appointment</Button>
          <Button>Get Directions</Button>
          <Button>Call Now</Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
