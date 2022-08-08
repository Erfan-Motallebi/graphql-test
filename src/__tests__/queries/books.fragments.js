const {disableFragmentWarnings} = require('graphql-tag')

disableFragmentWarnings()

const booksFragment = `#graphql
    fragment BookOutputs on Query {
        books {
            id
            yearOfRelease
            genre
            name
            authorId
            author {
                name
                id
                age
            }
        }
    }
`;


module.exports = {
    booksFragment
}