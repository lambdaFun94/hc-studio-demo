//@ts-ignore
import mapboxgl from "mapbox-gl";

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

export interface BoundingArea {
  west: number;
  east: number;
  south: number;
  north: number;
  sw: mapboxgl.LngLat;
  ne: mapboxgl.LngLat;
  llb: mapboxgl.LngLatBounds;
  centerLng: number;
  centerLat: number;
}

export const calculateBoundingArea = (results: any[]): BoundingArea => {
  const lats = results.map((r) => r.rawData.geocodedCoordinate.latitude);
  const lngs = results.map((r) => r.rawData.geocodedCoordinate.longitude);
  const west = Math.min(...lats);
  const east = Math.max(...lats);
  const south = Math.min(...lngs);
  const north = Math.max(...lngs);

  const sw = new mapboxgl.LngLat(south, west);
  const ne = new mapboxgl.LngLat(north, east);
  const llb = new mapboxgl.LngLatBounds(sw, ne);

  const centerLng = west - (east - west) / 2;
  const centerLat = north - (north - south) / 2;

  return {
    west,
    east,
    south,
    north,
    sw,
    ne,
    llb,
    centerLng,
    centerLat,
  };
};
