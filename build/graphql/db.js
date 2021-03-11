"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.people = [
    {
        id: 1,
        name: 'heeyou',
        age: 28,
        gender: 'female',
    },
    {
        id: 2,
        name: 'hee',
        age: 18,
        gender: 'male',
    },
    {
        id: 3,
        name: 'you',
        age: 25,
        gender: 'female',
    },
    {
        id: 4,
        name: 'hemin',
        age: 28,
        gender: 'female',
    },
];
exports.getById = function (id) {
    var filterdPeople = exports.people.filter(function (person) { return id === person.id; });
    return filterdPeople[0];
};
