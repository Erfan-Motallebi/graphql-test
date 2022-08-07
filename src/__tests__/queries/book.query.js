const { gql } = require("graphql-tag");

const GET_ALL_BOOKS_QUERY = gql`
  query getAllBooks {
    books {
      id
      name
      yearOfRelease
      genre
      authorId

    }
  }
`;

module.exports = {
  GET_ALL_BOOKS_QUERY,
};
