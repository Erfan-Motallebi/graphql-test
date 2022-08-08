const { describe, test, it, beforeAll } = require("@jest/globals");
// adding the fetch globally to make a use of
require('isomorphic-fetch')
const { GET_ALL_BOOKS_QUERY } = require("../queries/book.query");
const {fetchQuery} = require("../utils/test-helpers");
const url = require("url");
const {booksFragment} = require("../queries/books.fragments");

const baseURL = 'http://localhost:4000/graphql';


describe("Query Tests", () => {

    // a List of books
    let data;

    beforeAll(async () => {
        let {data: bookQuery} = await fetchQuery(baseURL, GET_ALL_BOOKS_QUERY, undefined, undefined);
        data = bookQuery
    }, 5000)

  test("should see a list of books ", async () => {
    try {

        // Check sections
        expect(data.books).toHaveLength(7)

        // books [2]
        expect(data).toHaveProperty('books[2]',{
            yearOfRelease : 1998,
            id : "3",
            genre : "Sci-Fi",
            name : "Lord of the Rings",
            authorId : 3,
            author: {
                name: "J.R.R. Tolkien",
                id: "3",
                age: 76
            }
        })

    } catch (e) {
       console.log(e)
    }

  },10000);

    it('should see a book using authorId', function () {

    }, 10000);
});



