const authorsListFragments = `#graphql
fragment AuthorOutputs on Query {
    authors {
        id
        name
        age
    }
}
`;


const authorListByIdFragment = `#graphql
fragment AuthorListByIdOutputs on Query {
    author (id: $id){
        id
        name
        age
    }
}
`
module.exports = {
    authorsListFragments,
    authorListByIdFragment
};
