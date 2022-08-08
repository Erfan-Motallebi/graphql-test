
const GET_ALL_BOOKS_QUERY = `#graphql
  query getAllBooks {
    books {
      id
      name
      authorId
      yearOfRelease
      author {
        id
        name
        age
      }
    }
  }
`;



module.exports = {
  GET_ALL_BOOKS_QUERY,
};
