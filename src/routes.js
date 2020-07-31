import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}
