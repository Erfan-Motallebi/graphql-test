const {authorsListFragments, authorListByIdFragment} = require("./authors.fragments");

const GET_ALL_AUTHORS_QUERY = `#graphql
query getAllAuthors {
    ...AuthorOutputs
}

${authorsListFragments}
`;

const GET_AUTHOR_BY_ID = `#graphql
query getAuthorById($id: ID!) {
    ...AuthorListByIdOutputs
}
${authorListByIdFragment}
`

module.exports = {
    GET_ALL_AUTHORS_QUERY,
    GET_AUTHOR_BY_ID
};
