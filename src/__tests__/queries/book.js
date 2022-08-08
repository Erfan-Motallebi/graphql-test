const { gql } = require("graphql-tag");

const GET_ALL_BOOKS_QUERY = gql`
  query getAllBooks {
    books {
      id
      name
      authorId
      yearOfRelease
      author
    }
  }
`;

module.exports = {
  GET_ALL_BOOKS_QUERY,
};
