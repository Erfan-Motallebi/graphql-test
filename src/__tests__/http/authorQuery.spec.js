const {fetchQuery, superTQuery} = require("../utils/test-helpers");
const {GET_ALL_AUTHORS_QUERY, GET_AUTHOR_BY_ID} = require("../queries/author/queries");
const {expect, describe, test, it} = require("@jest/globals");
const {allSchema} = require("../../graphql");
const {GET_BOOK_BY_AUTHORID_QUERY} = require("../queries/book/queries");

describe("Author Query Test", () => {
    test("should see a list of authors", async () => {
        const {data} = await fetchQuery(
            baseURL,
            GET_ALL_AUTHORS_QUERY,
            undefined,
            undefined
        );

        // check the nullability of the data object
        expect(data).toBeDefined();
        expect(data.authors).toBeDefined();

        // check the length of author [ 2 ]
        expect(data.authors).toHaveLength(3);
    });
});

describe("Author Schema Test", () => {
    test("should see an author schema type", () => {
        // check book schema type
        expect(allSchema.getType("Author")).toBeDefined();
        expect(allSchema.getType("Author")).not.toBeNull();
    });
});


describe('Author Query Test using graphql-tools', function () {

    test('Authors Query test', async function () {
        const {data: authorLists} = await superTQuery(path, GET_ALL_AUTHORS_QUERY, undefined, undefined)

        //  check definition of the author list data
        expect(authorLists).toBeDefined()
        expect(authorLists.authors).toBeDefined()
        expect(typeof authorLists.authors).toBe('object')

        //  Author Query Test
        tester.test(true, GET_ALL_AUTHORS_QUERY, undefined)

    }, 7000)

    test('Author Query test using ID', async function () {
        const authorQueryVars = {
            id: "1"
        }
        const {data: authorById} = await superTQuery(path, GET_AUTHOR_BY_ID, authorQueryVars
            , undefined)

        // author check definition
        expect(authorById).toBeDefined()
        expect(authorById.author).toBeDefined()
        // expect(authorById.author).toBe('object')
        expect(authorById).toHaveProperty('author', {
            id: "1",
            name: "Harper Lee",
            age: 54
        })
    }, 8000)
})