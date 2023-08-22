import AppViewTry from "./src/app/AppViewTry";
import AppView from "./src/app/AppView";
import SyncStorage from "sync-storage";
import { STORAGE_USERLANG } from "./src/common/constants";
export default function App() {
  let appViewTry = false;
  SyncStorage.set(STORAGE_USERLANG, "en");

  if (appViewTry) return <AppViewTry />;
  else return <AppView />;
}
