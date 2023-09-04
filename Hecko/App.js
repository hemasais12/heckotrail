import AppViewTry from "./src/app/AppViewTry";
import Text from "react-native";
import AppView from "./src/app/AppView";

export default function App() {
  let appViewTry = false;

  if (appViewTry) return <AppViewTry />;
  else return <AppView />;
}
