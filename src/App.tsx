import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import React, { useEffect } from "react";
import { Plugins, Capacitor } from "@capacitor/core";
import { Network } from "@capacitor/network";

import Login from "./pages/Login/Login";
// import Login from './pages/newLogin/Login1';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/global.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Report from "./pages/Report/Report";
import useNetworkCheckhook from "./hooks/useNetworkCheckhook";
import attendence from "./pages/Attendence/attendence";

setupIonicReact();

// interfac for component
interface UserActionCallback {
  (): void;
}

// Back button event handle.
document.addEventListener("ionBackButton", (ev: any) => {
  ev.detail.register(-1, handleBackButton);
});

function handleBackButton() {
  const currentPath = window.location.pathname;

  switch (currentPath) {
    case "/dashboard":
      handleUserAction("Are you sure to logout?", () => history.back());
      break;
    case "/login":
      handleUserAction("Are you sure to close the app", () =>
        Plugins.App.exitApp()
      );
      break;
    default:
      history.back();
  }
}
function handleUserAction(message: string, callback: UserActionCallback) {
  const userAction = window.confirm(message);
  userAction && callback();
}

const App: React.FC = () => {
  // const { netWorkStatus } = useNetworkCheckhook();

  // console.log("netWorkStatus", netWorkStatus);
  // useEffect(() => {
  //   console.log("Native device", Capacitor.isNativePlatform());
  // }, []);

  return (
    <IonApp>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/report" component={Report} />
          <Route path="/attendence" component={attendence} />
        </Switch>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
