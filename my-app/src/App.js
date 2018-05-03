import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import styled from "styled-components";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {render} from "react-dom";

function Img(props) {
    return <img src={props.src} className={props.className} alt={props.alt}/>;
}

function Buttons(props) {
    return <button {...props} />;
}

//styles
const StButtons = styled(Buttons) `
  width: 200px;
  height: 85px;
  background-color: rebeccapurple;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  `;

const StButtonsRed = StButtons.extend `
  background-color: tomato;
  margin-top: 10px;
  height: auto;
`;

function Movie(props) {
    return (
        <div className="movie-page">
            <Img className="movie-img" src={props.src} alt={props.title}/>
            <h1 className="movie-title">{props.title}</h1>
            <StButtons
                className="btn-test"
                type="button"
                children="info">
            </StButtons>
            <StButtonsRed className="btn-info" type="submit" children="Book now!"/>
        </div>
    );
}


export default Movie;

// class Movie extends React.Component {
//     state = {
//         detail: false,
//     };
//
//     triggerDetail = () => {
//         this.setState({
//             detail: !this.state.detail,
//         });
//     }
//
//     render() {
//         const {props} = this;
//         const {detail} = this.state;
//         return (
//             <div className="movie-page">
//                 <Img className="movie-img" src={props.src} alt={props.title} />
//                 <h1 className="movie-title">{props.title}</h1>
//                 {detail && <FilmInfo />}
//                 <StButtons className="btn-test" type="button" children="INFO" onClick={this.triggerDetail} />
//                 <StButtonsRed className="btn-info" type="submit" children="Book now!"/>
//             </div>
//         );
//     }
// }
//
// export default Movie;
