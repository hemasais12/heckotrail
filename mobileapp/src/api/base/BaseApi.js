import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_TOKEN } from "../../common/constants";

export async function request(options) {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const storedToken = await AsyncStorage.getItem(STORAGE_TOKEN);
  if (storedToken) {
    headers.append("Authorization", "Bearer " + storedToken);
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
