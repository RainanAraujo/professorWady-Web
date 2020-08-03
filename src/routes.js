import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Propostas from "./pages/Propostas";
import Biografia from "./pages/Biografia";
export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/biografia" component={Biografia} />
        <Route path="/propostas" component={Propostas} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
