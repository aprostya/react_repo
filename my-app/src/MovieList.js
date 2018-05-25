// import React from "react";
// import ReactDOM from "react-dom";
// import React, {Component} from 'react';
// import Movie from "./App";
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import {render} from "react-dom";
//
//
//
//
// // рендерим
// function Movies() {
//     const state = {
//         movies: [
//             {
//                 id: 1,
//                 title: "City Lights",
//                 year: 1931,
//                 rating: 8.5
//             },
//             {
//                 id: 2,
//                 title: "American History X",
//                 year: 1998,
//                 rating: 8.5
//             },
//             {
//                 id: 3,
//                 title: "Wild Strawberries",
//                 year: 1957,
//                 rating: 8.1
//             }
//         ]
//     };
//
//     function changeSort(kind) {
//         // заведём объект,
//         // который будет приводить
//         // kind к полю у объекта
//         const sortFieldsToKey = {
//             alphabetical: "title",
//             date: "year",
//             rating: "rating"
//         };
//
//         // получим поле у объектов,
//         // по которому нужно сортировать
//         const currentSortField = sortFieldsToKey[kind];
//
//         // сохраним текущее поле
//         // чтобы подсветить кнопку активным
//         setState({ orderField: kind });
//
//         // отсортируем фильмы
//         setState({
//             movies: state.movies.sort(function(leftObj, rightObj) {
//                 return sortObjectsByField(currentSortField, leftObj, rightObj);
//             })
//         });
//     }
//
//     return (
//         <div>
//             <p>Sort by:</p>
//             <button onClick={() => changeSort("alphabetical")}>alphabetical</button>
//             <button onClick={() => changeSort("date")}>date released</button>
//             <button onClick={() => changeSort("rating")}>average rating</button>
//             {state.movies.map(function(movie) {
//                 // movie это объект с данными
//
//                 // возвращаем Реакт-компонент
//                 return (
//                     <a href={`/movies/${movie.id}`} key={movie.id}>
//                         {movie.title} ({movie.year}) | rating {movie.rating}
//                     </a>
//                 );
//             })}
//         </div>
//     );
// }
//
// function sortObjectsByField(field, leftObject, rightObject) {
//     return leftObject[field] - rightObject[field];
// }
//
//
//
// export default Movies;