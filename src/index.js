import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import TopNavBar from "./components/topNavBar";
import Counters from "./components/counters";
import Graph from "./components/graph";

ReactDOM.render(<TopNavBar />, document.getElementById("topNavBar"));
// ReactDOM.render(<TodaysUpdates />, document.getElementById("todaysUpdates"));
// ReactDOM.render(<Counters />, document.getElementById("root"));
ReactDOM.render(<Counters />, document.getElementById("root"));
ReactDOM.render(<Graph />, document.getElementById("graph"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
