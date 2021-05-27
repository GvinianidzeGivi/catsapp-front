import React from "react";
import Sidebar from "./components/sidebar/sidebar.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from "./routes";
import "./styles.css";

const RenderRoute = (route: any) => {
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
