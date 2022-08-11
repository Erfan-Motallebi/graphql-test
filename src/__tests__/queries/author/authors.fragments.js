const authorsListFragments = `#graphql
  fragment AuthorOutputs on Query {
    authors {
      id
      name
      age
    }
  }
`;

module.exports = {
  authorsListFragments,
};
