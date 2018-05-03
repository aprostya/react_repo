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

const AnotherFilm = () => (
    <Movie
        title="2001: A Space Odyssey"
        src={
            "http://is2.mzstatic.com/image/thumb/Video118/v4/79/a6/3f/79a63fde-fc31-d112-1646-f1591d006f71/source/1200x630bb.jpg"
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
            <Route exact path="/" component={AnotherFilm}/>
            <Route exact path="/films" component={FilmComponent}/>
        </div>
    </Router>
);

export default BasicExample;