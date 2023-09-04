import { getLangObject } from "./LanguageUtil";

export function getLocationTitle(address) {
  //{"city": "Bengaluru", "country": "India", "district": "Chokkanahalli", "isoCountryCode": "IN",
  //"name": "1", "postalCode": "560064", "region": "Karnataka",
  //"street": "Thanisandra Main Road", "streetNumber": "1",
  //"subregion": "Bangalore Division", "timezone": null}

  let title = "";

  if (address && address.street) title += address.street;
  else if (address && address.district) title += address.district;
  else if (address && address.city) title += address.city;
  else if (address && address.region) title += address.region;
  else if (address && address.country) title += address.country;
  else title += getLangObject().Location.unknownLocation;

  return title;
}

export function getLocationArea(address) {
  let area = "";
  let sep = getLangObject().Location.separator;

  if (address && address.district) area += address.district + sep;
  if (address && address.city) area += address.city + sep;
  if (address && address.region) area += address.region + sep;
  if (address && address.country) area += address.country + sep;

  if (area.length === 0) area = getLangObject().Location.unknownLocation;

  return area;
}
