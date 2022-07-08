import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { SearchBar } from "@yext/answers-react-components";
import * as React from "react";
import { FaBars, FaFileMedical, FaHandHoldingMedical } from "react-icons/fa";
//@ts-ignore
import searchConfig from "../search.config";

const Header = () => {
  return (
    <>
      <div className="bg-green-700 border-b px-4 py-2 flex justify-between items-center lg:hidden text-white">
        <a href="/" className="flex justify-start items-center text-white/80">
          <FaFileMedical />
        </a>
        <FaBars className="opacity-50" />
      </div>
      <div className="bg-green-700  border-b hidden lg:flex">
        <div className="w-full flex justify-between items-center max-w-screen-lg px-4 mx-auto py-2">
          <div className=" flex items-center justify-center text-lg font-medium  text-white">
            <a
              href="/"
              className="flex justify-start items-center mr-4 text-white/80 text-4xl"
            >
              <FaHandHoldingMedical />
            </a>
            <a
              href="/doctors"
              className="px-4 hover:bg-black/20 rounded-full py-1 text-white transition-all"
            >
              Doctors
            </a>
            <a
              href="/locations"
              className="px-4 hover:bg-black/20 rounded-full py-1 text-white transition-all"
            >
              Locations
            </a>
            <a
              href="/specialties"
              className="px-4 hover:bg-black/20 rounded-full py-1 text-white transition-all"
            >
              Specialties
            </a>
          </div>
          <div className="flex justify-end items-center">
            <AnswersHeadlessProvider {...searchConfig} headlessId="header">
              <SearchBar
                placeholder="Search for anything..."
                customCssClasses={{
                  container: "mb-0",
                }}
                hideVerticalLinks
                onSearch={({ query, verticalKey }) => {
                  window.location.href = `/search?query=${query}`;
                }}
              />
            </AnswersHeadlessProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
