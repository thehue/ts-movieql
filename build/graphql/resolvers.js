"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var resolvers = {
    Query: {
        movies: function () { return db_1.getMovies(); },
        movie: function (_, args) {
            var id = args.id;
            return db_1.getById(id);
        },
    },
    Mutation: {
        addMovie: function (_, _a) {
            var name = _a.name, audiAcc = _a.audiAcc;
            return db_1.addMovie(name, audiAcc);
        },
    },
};
exports.default = resolvers;
