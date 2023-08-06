import AppViewTry from "./src/app/AppViewTry";
import AppView from "./src/app/AppView";

export default function App() {
  let appViewTry = false;
  if (appViewTry) return <AppViewTry />;
  else return <AppView />;
}
