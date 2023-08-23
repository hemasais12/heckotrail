import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_USERLANG } from "../common/constants";
import { TextLang } from "../common/screentexten";

export function getLangObject() {
  //let lang = await AsyncStorage.getItem(STORAGE_USERLANG);
  //if (!lang) lang = "en";
  return TextLang["en"];
}
