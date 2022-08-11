// Global Fetch Function for all test environments
require('isomorphic-fetch')
const EasyGraphQLTester = require("easygraphql-tester");
const {allSchema, resolvers} = require("./src/graphql");

// Global Variables
global.baseURL = `http://localhost:4000/graphql`;
global.path = '/graphql'
global.tester = null

beforeAll(function () {
    global.tester = new EasyGraphQLTester(allSchema, resolvers)
}, 10000)