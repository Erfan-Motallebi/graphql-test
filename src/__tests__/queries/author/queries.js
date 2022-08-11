const { authorsListFragments } = require("./authors.fragments");

const GET_ALL_AUTHORS_QUERY = `#graphql
  query getAllAuthors {
    ...AuthorOutputs
  }

  ${authorsListFragments}
`;

module.exports = {
  GET_ALL_AUTHORS_QUERY,
};
