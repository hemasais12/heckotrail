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
  else title += "Unknown Location";

  return title;
}

export function getLocationArea(address) {
  let area = "";

  if (address && address.district) area += address.district + ", ";
  if (address && address.city) area += address.city + ", ";
  if (address && address.region) area += address.region + ", ";
  if (address && address.country) area += address.country + ", ";

  if (area.length === 0) area = "Unknown Loation";

  return area;
}
