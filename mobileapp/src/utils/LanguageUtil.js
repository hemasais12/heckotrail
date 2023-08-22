import SyncStorage from "sync-storage";
import { STORAGE_USERLANG } from "../common/constants";
import { TextLang } from "../common/screentexten";

export function getLangObject() {
  let lang = SyncStorage.get(STORAGE_USERLANG);
  return TextLang[lang];
}
