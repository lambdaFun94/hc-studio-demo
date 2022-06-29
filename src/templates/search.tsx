/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  Data,
  Default,
  GetHeadConfig,
  GetPath,
  HeadConfig,
} from "@yext/yext-sites-scripts";
import * as React from "react";
import PageLayout from "../components/PageLayout";
import UniversalSearchResults from "../components/UniversalSearchResults";
import "../index.css";
import { defaultHeadConfig } from "../utilities";

export const getPath: GetPath<Data> = (data) => {
  return `search`;
};

export const getHeadConfig: GetHeadConfig<Data> = (data): HeadConfig => {
  return {
    ...defaultHeadConfig,
    title: "Search Results",
  };
};

const SearchResultsPage: Default<Data> = (data) => {
  const { document } = data;
  const { streamOutput } = document;

  return (
    <PageLayout title="Search Results">
      <UniversalSearchResults />
    </PageLayout>
  );
};

export default SearchResultsPage;