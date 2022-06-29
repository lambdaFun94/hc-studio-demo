import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { SearchBar } from "@yext/answers-react-components";
import * as React from "react";
//@ts-ignore
import logo from "../images/logo.webp?w=100&h=100";
import searchConfig from "../search.config";

const Header = () => {
  return (
    <div className="bg-gray-100 border-b">
      <div className="grid grid-cols-3 max-w-screen-lg px-4 mx-auto py-4">
        <a href="/" className="flex justify-start items-center">
          <img src={logo} width={50} height={50} />
        </a>
        <div className="flex items-center justify-center text-lg font-medium text-gray-700">
          <a href="/doctors" className="px-4">
            Doctors
          </a>
          <div className="px-4">Locations</div>
          <div className="px-4">Services</div>
        </div>
        <div className="flex justify-end items-center">
          <AnswersHeadlessProvider {...searchConfig} headlessId="header">
            <SearchBar
              placeholder="Search for anything..."
              customCssClasses={{
                container: "mb-0",
              }}
              onSearch={({ query, verticalKey }) => {
                window.location.href = `/search?query=${query}`;
              }}
            />
          </AnswersHeadlessProvider>
        </div>
      </div>
    </div>
  );
};

export default Header;
