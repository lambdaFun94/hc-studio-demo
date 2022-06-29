import { useAnswersActions } from "@yext/answers-headless-react";
import { useEffect } from "react";

export const useLoadStateFromURL = () => {
  const searchActions = useAnswersActions();

  const setQueryParam = (name: string, value: any) => {
    var queryParams = new URLSearchParams(window.location.search);
    // Set new or modify existing parameter value.
    queryParams.set("query", value);
    // OR do a push to history
    history.pushState(null, "", "?" + queryParams.toString());
  };

  useEffect(() => {
    if (window) {
      const params = Object.fromEntries(
        new URLSearchParams(window.location.search)
      );
      const { query } = params;
      if (query) {
        searchActions.setQuery(query);
        searchActions.executeUniversalQuery();
      }
    }
  }, []);

  return { setQueryParam };
};
