"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var resolvers_1 = __importDefault(require("./graphql/resolvers"));
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: 'src/graphql/schema.graphql',
    resolvers: resolvers_1.default,
});
server.start(function () { return console.log('Graphql Server Running'); });
