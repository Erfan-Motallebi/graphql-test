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
    book(authorId: ID!): [Book!]
  }
`;

const resolvers = {
  Query: {
    books: (src, args, ctx, info) => {
      return bookz;
    },
    book: (src, args, ctx, info) => {
      const { authorId } = args;
      return bookz.filter((book) => book.authorId === authorId);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
