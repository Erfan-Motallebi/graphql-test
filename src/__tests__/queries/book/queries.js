const {
  bookByAuthorIdFragment,
  booksListFragment,
} = require("./books.fragments");

const GET_ALL_BOOKS_QUERY = `#graphql
query getAllBooks {
    ...bookByAuthorIdOutputs
}
${booksListFragment}
`;

const GET_BOOK_BY_AUTHORID_QUERY = `#graphql
query getBookByAuthorId ($authorId: ID!) {
    ... bookByAuthorIdOutputs
}

${bookByAuthorIdFragment}
`;

module.exports = {
  GET_ALL_BOOKS_QUERY,
  GET_BOOK_BY_AUTHORID_QUERY,
};
