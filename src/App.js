import React from "react";
import Login from "./Components/Login/Login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Header from "./Components/Header/Header";
import { Router } from "react-router";
import Profile from "./Components/Profile/Profile";
import Nav from "./Components/Navbar/Nav";




const App = () => {
  return (
    //<Header/>
      <Switch>
        <Route path="/" exact component={Nav} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup"  component={SignUp} />
        <Route path="/profile"  component={Profile} />
      </Switch>
  );
};
export default App;

