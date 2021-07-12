import React from "react";
import {About} from "./About";
import {Contact} from "./Contact";
import {Home} from "./Home";
import {Nav} from "./Nav";
import {Route, Switch} from "react-router-dom";
export function App (){
  return(<div>
    <Nav/>
    <Switch><Route path="/home" component={Home}/></Switch>
    <Switch><Route path="/about" component={About}/></Switch>
    <Switch><Route path="/contact" component={Contact}/></Switch>
    </div>)
}
