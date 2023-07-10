import { HexColor } from "@yext/studio";
import * as React from "react";
import { TextFieldProps } from "./TextField";

export const initialProps = {
  text: "Dr. Schleider is in network with these insurances: Geha PPO, Meritain PPO, and United Health care student services. any insurances not listed is considered out of network and subject to out of network pricing. Dr. Schleider, welcomes all new patients to the practice before psychiatrist consults to make sure patients have had a complete medical evaluation before any psychiatric assessment is done. Dr. Schleider is a family doctor and addiction medicine doctor. He founded and runs his psychiatry based medical practice and has special interest in mental health.\n\nDr. Natan Schleider attended medical school at Columbia University Health Sciences in Collaboration with Ben Gurion University of the Negev where Dr. Schleider obtained his Medical Doctorate (2002).\n\nResidency training in Family Medicine was completed at Overlook Hospital in Summit, New Jersey (2004). Dr. Natan Schleider, M.D. had the honor of Chief Resident at Overlook Hospital (2005).\n\nDr. Natan Schleider, M.D. has an unrestricted license to practice medicine in New York State.\n\nAcademies and societies with whom Dr. Natan Schleider, M.D., actively participate, include the American Academy of Family Physicians, American Psychiatric Association, and the American Society of Addiction Medicine.",
  fontSize: "md",
  fontFamily: "sans",
  fontWeight: "normal",
  fontStyle: "normal",
  textColor: "#111827",
};

export default function MultiLineTextField({
  text,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textColor,
}: TextFieldProps) {
  return (
    <p
      className={`text-${fontSize} font-${fontFamily} font-${fontWeight} font-${fontStyle} text-[${textColor}] whitespace-pre-line`}
      style={{ color: textColor }}
    >
      {text}
    </p>
  );
}
