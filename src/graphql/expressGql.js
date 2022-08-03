// old method using express-graphql

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const { bookz, authorz } = require("../data/db");

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "a list of books with authorId",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    yearOfRelease: { type: GraphQLInt },
    authorId: { type: GraphQLID },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "BookQuery",
  fields: {
    books: {
      type: new GraphQLList(BookType),
      description: "Query all the book lists",
      args: {},
      resolve: async (parent, args, ctx, info) => {
        return bookz;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "a list of authors",
      args: {},
      resolve: async (parent, args, ctx, info) => {
        return authorz;
      },
    },
  },
});

module.exports = {
  schema: new GraphQLSchema({
    query: rootQuery,
    mutation: null,
  }),
};
