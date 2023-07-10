import * as React from "react";

export default function NavBar() {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <div className="ml-6 flex space-x-8">
            <a
              href="#"
              className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-500  hover:text-gray-700"
            >
              Team
            </a>
            <a
              href="#"
              className="inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-500  hover:text-gray-700"
            >
              Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-500  hover:text-gray-700"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
