"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var resolvers = {
    Query: {
        movies: function (_, _a) {
            var limit = _a.limit, rating = _a.rating;
            return db_1.getMovies(limit, rating);
        },
        movie: function (_, _a) {
            var id = _a.id;
            return db_1.getMovie(id);
        },
        suggestions: function (_, _a) {
            var id = _a.id;
            return db_1.getSuggestions(id);
        },
    },
};
exports.default = resolvers;
