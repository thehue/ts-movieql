"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var resolvers = {
    Query: {
        movies: function (_, _a) {
            var limit = _a.limit, rating = _a.rating;
            return db_1.getMovies(limit, rating);
        },
    },
};
exports.default = resolvers;
