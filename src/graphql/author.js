const { default: gql } = require("graphql-tag");
const { authorz } = require("../data/db");

const { find: _find } = require("lodash/collection");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    authors: [Author!]!
    author(id: ID!): [Author!]
  }
`;

const resolvers = {
  Query: {
    authors: async (src, args, ctx, info) => {
      return authorz;
    },
    author: async (src, args, ctx, info) => {
      const { id } = args;
      return _find(authorz, (author) => author.id === id);
    },
  },
};

module.exports = {
  resolvers,
  typeDefs,
};
