const {describe, it, expect} = require("@jest/globals");
const {GET_ALL_BOOKS_QUERY} = require("../queries/book");
const {fetchQuery} = require("../utils/test-helpers");
require("isomorphic-fetch");

const baseURL = `http://localhost:4000/graphql`;

describe("Query Tests", () => {
    test("should see a list of books", async () => {
        const {data} = await fetchQuery(
            baseURL,
            GET_ALL_BOOKS_QUERY,
            undefined,
            undefined
        );
        // check length of thy books query
        expect(data.books).toHaveLength(7);


        // nested property checking book [ 0 ]
        expect(data).toHaveProperty('books[0]', {
            id: "1",
            name: "Winner of the PULITZER PRIZE",
            authorId: 1,
            yearOfRelease: 1960,
            author: {
                id: "1",
                name: "Harper Lee",
                age: 54
            }
        })
    });


    it('should see a book using authorId', function () {

    });
});
