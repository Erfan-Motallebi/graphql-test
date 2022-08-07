const { default: gql } = require("graphql-tag");

const GET_ALL_BOOKS_QUERY = gql`
  query getAllBooks {
    books {
      id
      name
      yearsOfRelease
      authorId
      author
    }
  }
`;

module.exports = {
  GET_ALL_BOOKS_QUERY,
};
