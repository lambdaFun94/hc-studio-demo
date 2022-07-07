import {
  AnswersHeadlessProvider,
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import { FilterSearch } from "@yext/answers-react-components";
import cx from "classnames";
import * as React from "react";
import { FaSearch } from "react-icons/fa";
import searchConfig from "../../search.config";
import Button from "../Button";

type Props = {
  //Insert Props Here
  className?: string;
};

const DoctorFinderSearchBar = ({ className }: Props) => {
  const filters = useAnswersState((s) => s.filters);
  const actions = useAnswersActions();
  return (
    <div className={cx(className)}>
      <div className="bg-gray-200 rounded-lg py-4 px-8 lg:py-6 flex flex-col items-center">
        <h2 className="text-2xl font-medium mt-4">Find a Provider</h2>
        <div className="flex items-end  flex-col md:flex-row gap-4 my-4 w-full mx-8">
          <div className="flex-grow">
            <FilterSearch
              label="Search for specialty, procedure or provider name"
              placeholder="e.g. Cardiology or Jim Shaw"
              sectioned={true}
              searchFields={[
                {
                  entityType: "healthcareProfessional",
                  fieldApiName: "c_specialty.name",
                },
                {
                  entityType: "healthcareProfessional",
                  fieldApiName: "name",
                },
                // {
                //   entityType: "healthcareProfessional",
                //   fieldApiName: "c_specialty.taxonomy_relatedConditions.name",
                // },
                // {
                //   entityType: "healthcareProfessional",
                //   fieldApiName:
                //     "c_specialty.taxonomy_relatedReasonsForVisit.name",
                // },
              ]}
            />
          </div>
          <div className="flex-grow">
            <FilterSearch
              label="Location"
              placeholder="e.g. New York, NY or 10032"
              searchFields={[
                {
                  entityType: "healthcareProfessional",
                  fieldApiName: "builtin.location",
                },
              ]}
            />
          </div>
          <Button
            onClick={() => {
              window.location.href = `/doctors?filters=${JSON.stringify(
                filters.static
              )}`;
            }}
          >
            <div>Find Doctors</div>
            <FaSearch />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <AnswersHeadlessProvider
    headlessId="doctor-finder"
    {...searchConfig}
    verticalKey="healthcare_professionals"
  >
    <DoctorFinderSearchBar />
  </AnswersHeadlessProvider>
);
