import * as React from "react";

export default function Heading() {
  return (
    <div className="pt-1.5">
      <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
      <p className="text-sm font-medium text-gray-500">
        Applied for{" "}
        <a href="#" className="text-gray-900">
          Front End Developer
        </a>{" "}
        on <time dateTime="2020-08-25">August 25, 2020</time>
      </p>
    </div>
  );
}
