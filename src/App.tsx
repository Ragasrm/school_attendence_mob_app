import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, useIonRouter, setupIonicReact } from '@ionic/react';
import React, { useEffect } from "react";
import { Plugins, Capacitor } from "@capacitor/core";
import { useHistory } from "react-router-dom";

// import Home from './pages/Home';
import Login from './pages/Login/Login';
// import Login from './pages/newLogin/Login1';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import "./theme/global.css"
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/Report/Report'



setupIonicReact();

document.addEventListener('ionBackButton', (ev:any) => {
  ev.detail.register(-1, () => {
   
   

    if (window.location.pathname === '/dashboard') {
      console.log('exit');
      let user_action = window.confirm("Are you sure to close the app")
      console.log("user_action", user_action)
      user_action && history.back() 
    } else {
      history.back()
    }
  });
});

const App: React.FC = () => { 
  const history = useHistory();
  
  useEffect(() => {
    console.log("Native device",Capacitor.isNativePlatform())
  }, [])
  
  return(
  <IonApp>
    <BrowserRouter>
      <Switch>
      <Route exact path="/"><Redirect to="/login" /></Route>
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/report" component={Report} />
      </Switch>
    </BrowserRouter>
  </IonApp>
)};

export default App;
