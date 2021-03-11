"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movies = [
    {
        id: 1,
        name: '미나리',
        audiAcc: '276870',
    },
    {
        id: 2,
        name: '라야와 마지막 드래곤',
        audiAcc: '127006',
    },
    {
        id: 3,
        name: '극장판 귀멸의 칼날: 무한열차편',
        audiAcc: '1052396',
    },
    {
        id: 4,
        name: '소울',
        audiAcc: '1965137',
    },
];
exports.getMovies = function () { return exports.movies; };
exports.getById = function (id) {
    return exports.movies.filter(function (movie) { return id === movie.id; })[0];
};
exports.deleteMovie = function (id) {
    var cleanedMovies = exports.movies.filter(function (movie) { return movie.id !== id; });
    if (exports.movies.length > cleanedMovies.length) {
        exports.movies = cleanedMovies;
        return true;
    }
    else {
        return false;
    }
};
exports.addMovie = function (name, audiAcc) {
    var id = exports.movies.length + 1;
    var newMovie = {
        id: id,
        name: name,
        audiAcc: audiAcc,
    };
    exports.movies.push(newMovie);
    return newMovie;
};
