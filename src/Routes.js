import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
<<<<<<< HEAD
=======
import Profile from "../src/user/Profile";
import DashboardHome from "../src/user/UserDashBoard";
>>>>>>> develop

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
=======
        {/* <Route path="/" exact component={DashboardHome} /> */}
>>>>>>> develop
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
