import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, useIonRouter, setupIonicReact } from '@ionic/react';
import { App as Application } from '@capacitor/app';

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

// const ionRouter = useIonRouter();
document.addEventListener('ionBackButton', (ev:any) => {
  ev.detail.register(-1, () => {
    console.log('Handler was called!');
    // if (!ionRouter.canGoBack()) {
    //   Application.exitApp();
    // }
  });
});

const App: React.FC = () => (
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
);

export default App;
