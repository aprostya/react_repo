import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import styled from "styled-components";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {render} from "react-dom";



class Image extends React.Component {
    render() {
        console.log(this.props);
        return <img src={this.props.src} />;
    }
}

function Images(props) {
    return (
        <div className="movie-page--personal">
            <Image src="https://i.imgur.com/wycmlAg.jpg"/>
            <Image src="https://i.imgur.com/82kaBeI.jpg"/>
        </div>
    );
}

export default Images;
