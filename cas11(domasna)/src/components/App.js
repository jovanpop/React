import React from "react";
import { Switch,Route } from "react-router-dom";
import { Cake } from "./Cake";
import {Nav} from "./Nav";
import { Comments } from "./Comments";
export function App (){
  return(<div>
    <h2>App</h2>
    <Nav/>
    <Switch>
      <Route path="/cake" component={Cake}/>
      <Route path="/comments" component={Comments}/>
      </Switch>
  </div>)
}
