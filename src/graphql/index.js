const { mergeResolvers, mergeTypeDefs } = require("@graphql-tools/merge");
const {
  makeExecutableSchema,
  // used for .gql files
  addResolversToSchema,
} = require("@graphql-tools/schema");
const { typeDefs: bookTypeDefs, resolvers: bookResolvers } = require("./book");
const {
  typeDefs: authorTypeDefs,
  resolvers: authorResolvers,
} = require("./author");

// used for gql files
const { loadSchemaSync } = require("@graphql-tools/load");

const path = require("node:path");

const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

// Merging all the Type Definitions

const typeDefs = mergeTypeDefs([bookTypeDefs, authorTypeDefs]);
const resolvers = mergeResolvers([bookResolvers, authorResolvers]);

module.exports = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
};

// Adding the .graphql files to make a use of
// installing the loaders from graphql-tools module

// const allGqlSchemas = loadSchemaSync(path.join(__dirname, "gql/**/*.gql"), {
//   loaders: [new GraphQLFileLoader()],
// });

// addResolversToSchema= addResolversToSchema({
//  schema: allGqlSchemas,
//  resolvers
// })

// module.exports = {
//     schema: addResolversToSchema
// }
