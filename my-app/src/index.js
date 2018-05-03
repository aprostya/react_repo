import React from "react";
import ReactDOM from "react-dom";
import Movie from "./App";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {render} from "react-dom";
import BasicExample from './List';
ReactDOM.render(
    <Movie
        title="2001: A Space Odyssey"
        src={
            "http://is2.mzstatic.com/image/thumb/Video118/v4/79/a6/3f/79a63fde-fc31-d112-1646-f1591d006f71/source/1200x630bb.jpg"
        }
        type={"submit"}
    />,
    document.getElementById("root")
);

ReactDOM.render(
    <BasicExample/>,
    document.getElementById("router-container")
)
