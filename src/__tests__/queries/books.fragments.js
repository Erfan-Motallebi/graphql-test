const {disableFragmentWarnings} = require('graphql-tag')

disableFragmentWarnings()

const booksListFragment = `#graphql
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

const bookByAuthorIdFragment = `#graphql
fragment bookByAuthorIdOutputs on Query {
    book(authorId: $authorId) {
        id
        name
        genre
        yearOfRelease
        author {
            id
            name
            age
        }
    }
}
`


module.exports = {
    booksListFragment,
    bookByAuthorIdFragment
}