import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Propostas from "./pages/Propostas";
export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/propostas" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
