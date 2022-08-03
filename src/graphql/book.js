const { default: gql } = require("graphql-tag");
const { bookz } = require("../data/db");

const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    genre: String!
    yearOfRelease: Int!
    authorId: Int!
  }

  type Query {
    books: [Book!]!
  }
`;

const resolvers = {
  Query: {
    books: (src, args, ctx, info) => {
      return bookz;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
