const {
  booksListFragment,
  bookByAuthorIdFragment,
} = require("./books.fragments");

const GET_ALL_BOOKS_QUERY = `#graphql
query getBookLists {
    ...BookOutputs
}
${booksListFragment}
`;

const GET_BOOK_BY_AUTHORID_QUERY = `#graphql
query getBookListByAuthorId($authorId: ID!) {
    ...bookByAuthorIdOutputs
}
${bookByAuthorIdFragment}
`;

module.exports = {
  GET_ALL_BOOKS_QUERY,
  GET_BOOK_BY_AUTHORID_QUERY,
};
