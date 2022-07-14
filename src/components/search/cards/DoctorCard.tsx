import {
  CardProps,
  renderHighlightedValue,
} from "@yext/answers-react-components";
import * as React from "react";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import {
  HealthcareProfessional,
  HealthcareProfessionalCustomFields,
} from "../../../types/kg";
import Button from "../../Button";
import Img, { Image } from "../../Img";

const DoctorCard = ({ result }: CardProps) => {
  const data = result.rawData as HealthcareProfessional &
    HealthcareProfessionalCustomFields;
  console.log(data);
  const title = (result.highlightedFields?.name ?? result.name) as string;
  const npi = result.rawData.npi as string;
  const headshot = result.rawData.headshot as Image;
  return (
    <div className="border rounded-md  mb-4 flex flex-col lg:flex-row gap-4 justify-between max-w-4xl overflow-hidden">
      <div className="flex gap-4">
        {headshot && (
          <div className="w-36 lg:w-60 flex-none">
            <Img
              image={headshot}
              className=""
              aspectRatio={1}
              layout="full-width"
            />
          </div>
        )}
        <div className="p-4">
          {title && (
            <a
              className="text-2xl font-medium hover:underline"
              href={result.rawData.slug as string}
            >
              {renderHighlightedValue(title)}
            </a>
          )}
          {data.c_specialty && (
            <div className="text-lg text-gray-700 mb-2">
              {data.c_specialty?.map((s) => s.name).join(", ")}
            </div>
          )}
          {data.address && (
            <div className="flex gap-2 items-center">
              <div className="text-gray-500">
                <FaMapMarkerAlt />
              </div>
              <div className="text-gray-600">
                <div>{data.address.line1}</div>
                <div>
                  {data.address.city}, {data.address.region},{" "}
                  {data.address.postalCode}
                </div>
              </div>
            </div>
          )}
          {data.mainPhone && <div>{data.mainPhone}</div>}
          {npi && (
            <div className="text-gray-400 text-xs font-mono mt-2">
              NPI: {npi}
            </div>
          )}
          <div className="flex text-lg items-bottom text-yellow-500 gap-1 mt-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
            <div className="text-sm text-yellow-600">4.7 Stars</div>
          </div>
          {/* <pre>{JSON.stringify(result.rawData, null, 2)}</pre> */}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <Button icon={<FaCalendar />} block secondary>
          Book Appointment
        </Button>
        <Button icon={<FaMapMarkerAlt />} secondary>
          Get Directions
        </Button>
        <Button icon={<FaPhone />} secondary>
          Call Now
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
