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


const inline = 'inline';
const none = 'none';

class MovieTexts extends React.Component {
    constructor(props) {
        super(props);
        this.descr = {description: "Кто мы? Какое место мы занимаем во Вселенной? Эти вопросы стоят перед героями фильма. Экипаж космического корабля С. С. Дискавери — капитаны Дэйв Боумэн, Фрэнк Пул и их бортовой компьютер ХЭЛ-9000 — должны исследовать район галактики и понять, почему инопланетяне следят за Землей. На этом пути их ждет множество неожиданных открытий…"};
    }
        render(props) {
            return (
                {/*<p children={this.descr.description}/>*/},
                 <p {...this.props} children={this.descr.description}/>
            )
        }
        // render(props) {
        //     return <p {...this.props}/>
        // }
    }

// function movieContent(props) {
//     return (
//         <div className="movie-content">
//             <StButtons
//                 className="btn-test"
//                 type="button"
//                 children="info"
//                 style={{display: this.state.toggle}}
//                 onClick={this.showText}>
//             </StButtons>
//         </div>
//
//     )
// }


class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle: none};
        this.showText = this.showText.bind(this);

    }

    showText() {
        const changeText = this.state.toggle == none ? inline : none;
        this.setState({toggle: changeText});
    }

    render() {
        return (
            <div className="movie-content">
                <StButtons
                    className="btn-test"
                    type="button"
                    children="info"
                    onClick={this.showText}>
                </StButtons>
                <MovieTexts style={{display: this.state.toggle}}/>
            </div>
        )
    }
}


{/*<Image src="https://i.imgur.com/82kaBeI.jpg"/>*/
}


function Movie(props) {
    return (
        <div className="movie-page">
            <Img className="movie-img" src={props.src} alt={props.title}/>
            <h1 className="movie-title">{props.title}</h1>
            <ToggleButton/>
            <StButtonsRed className="btn-info" onClick={handleClick} id="bookBtn" type="submit" children="Click me: 0"/>
        </div>
    );
}

const button = document.getElementById("my-button");


// вешаем на него клик


var count = 0;

function handleClick() {
    const button = document.getElementById("bookBtn");
    count++;
    button.innerHTML = "Click me: " + count;
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
