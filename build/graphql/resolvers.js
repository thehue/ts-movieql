"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: 'heeyou',
    age: 28,
    gender: 'female',
};
var resolvers = {
    Query: {
        person: function () { return person; },
    },
};
exports.default = resolvers;
