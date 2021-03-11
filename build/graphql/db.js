"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var API_URL = 'https://yts.mx/api/v2/list_movies.json?';
//limit, rating
exports.getMovies = function (limit, rating) {
    var REQUEST_URL = API_URL;
    if (!limit) {
        limit = 10; //default 개수
    }
    REQUEST_URL += "limit=" + limit;
    if (rating) {
        REQUEST_URL += "&minimum_rating=" + rating;
    }
    return node_fetch_1.default("" + REQUEST_URL)
        .then(function (res) { return res.json(); })
        .then(function (json) { return json.data.movies; });
};
