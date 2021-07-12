import React from "react";
import {App} from "./components/App";
import ReactDOM from "react-dom";
import {Route,BrowserRouter}from "react-router-dom";

ReactDOM.render (<BrowserRouter><Route path="/" component={App}/></BrowserRouter>,document.getElementById("root"));

