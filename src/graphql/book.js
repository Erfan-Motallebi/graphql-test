const { default: gql } = require("graphql-tag");
const { bookz, authorz } = require("../data/db");

const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    genre: String!
    yearOfRelease: Int!
    authorId: Int!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
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

  Book: {
    author: (parent = src, args, ctx, info) => {
      const { authorId: parentAuthorId } = parent;
      return authorz.find((author) => author.id === parentAuthorId);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
