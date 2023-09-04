import AsyncStorage from "@react-native-async-storage/async-storage";
import { IS_VENDOR_APP, STORAGE_TOKEN } from "../../common/constants";

export async function request(options) {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const storedToken = await AsyncStorage.getItem(STORAGE_TOKEN);
  if (storedToken) {
    headers.append("Authorization", "Bearer " + storedToken);
  }

  if (IS_VENDOR_APP) {
    headers.append("TempDate", "Date " + "2021-01-01");
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
}

export function httpPost(url, requestData) {
  return request({
    url: url,
    method: "POST",
    body: JSON.stringify(requestData),
  });
}

export function httpGet(url) {
  return request({
    url: url,
    method: "GET",
  });
}
