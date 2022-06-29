export const sortProps = (obj: any, keys: string[]) => {
  keys.forEach((key) => {
    obj[key] = obj[key]?.sort((a: any, b: any) => a.name.localeCompare(b.name));
  });
  return obj;
};

export const defaultHeadConfig = {
  title: "Healthcare Demo",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1",
};

export const setQueryParam = (name: string, value: any) => {
  var queryParams = new URLSearchParams(window.location.search);
  // Set new or modify existing parameter value.
  queryParams.set("query", value);
  // OR do a push to history
  history.pushState(null, "", "?" + queryParams.toString());
};

export const removeQueryParam = (name: string) => {
  var queryParams = new URLSearchParams(window.location.search);
  // Set new or modify existing parameter value.
  queryParams.delete(name);
  // OR do a push to history
  history.pushState(null, "", "?" + queryParams.toString());
};
