import React from "react";
import ReactDOM from "react-dom";
import Movie from "./App";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {render} from "react-dom";
import  Movies from "./MovieList";
import BasicExample from './List';

ReactDOM.render(
    <BasicExample/>,
    document.getElementById("router-container")
);

ReactDOM.render(
    <Movies/>,
    document.getElementById("list-container")
)