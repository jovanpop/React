import React from "react";
import { Nav } from "./Nav";
import { Switch,Route } from "react-router-dom";
import {Users} from "./users";
import {Comments} from "./comments";
export function App (){
  return (
    <div>
      <Nav/>
      <Switch><Route path="/users" component={Users}/></Switch>
      <Switch><Route path="/comments" component={Comments}/></Switch>
      </div>
  )
}
