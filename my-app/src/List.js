import React from "react";
import ReactDOM from "react-dom";
import Movie from "./App";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {render} from "react-dom";

const FilmsInfo = () => (
    <div>
        <h1>Film Info</h1>
    </div>
);

const FilmComponent = () => (
    <Movie
        title="Back to the Future"
        src={
            "https://images-na.ssl-images-amazon.com/images/I/91DH7giO-OL._SL1500_.jpg"
        }
        type={"submit"}
    />
)

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/films">Film</Link>
                </li>
            </ul>
            <hr/>
            <Route exact path="/" component={FilmsInfo}/>
            <Route exact path="/films" component={FilmComponent}/>
        </div>
    </Router>
);

export default BasicExample;