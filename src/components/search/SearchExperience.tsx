import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import * as React from "react";
import { useLoadStateFromURL } from "../../hooks";
import searchConfig from "../../search.config";

type Props = {
  //Insert Props Here
  verticalKey?: string;
  children?: React.ReactNode;
};

const StateManager = ({ children }: { children: React.ReactNode }) => {
  useLoadStateFromURL();

  return <>{children}</>;
};

const SearchExperience = ({ verticalKey, children }: Props) => {
  return (
    <AnswersHeadlessProvider {...searchConfig} verticalKey={verticalKey}>
      <StateManager>{children}</StateManager>
    </AnswersHeadlessProvider>
  );
};

export default SearchExperience;
