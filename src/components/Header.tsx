import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { SearchBar } from "@yext/answers-react-components";
import * as React from "react";
import searchConfig from "../search.config";

const Header = () => {
  return (
    <div className="bg-gray-100 border-b">
      <div className="grid grid-cols-3 max-w-screen-lg px-4 mx-auto py-4">
        <a href="/" className="flex justify-start items-center">
          <div className="">Logo</div>
        </a>
        <div className="flex items-center justify-center gap-8 text-lg font-medium text-gray-700">
          <div>Doctors</div>
          <div>Locations</div>
          <div>Services</div>
        </div>
        <div className="flex justify-end items-center">
          <AnswersHeadlessProvider {...searchConfig}>
            <SearchBar
              placeholder="Search for anything..."
              customCssClasses={{
                container: "mb-0",
              }}
            />
          </AnswersHeadlessProvider>
        </div>
      </div>
    </div>
  );
};

export default Header;
