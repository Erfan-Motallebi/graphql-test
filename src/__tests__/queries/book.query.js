const {booksFragment} = require("./books.fragments");

const GET_ALL_BOOKS_QUERY = `#graphql
  query getBookLists {
    ...BookOutputs
  }
 ${booksFragment}
`;


module.exports = {
  GET_ALL_BOOKS_QUERY,
};
