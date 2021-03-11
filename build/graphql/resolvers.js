"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var resolvers = {
    Query: {
        people: function () { return db_1.people; },
        person: function (_, args) {
            var id = args.id;
            return db_1.getById(id);
        },
    },
};
exports.default = resolvers;
