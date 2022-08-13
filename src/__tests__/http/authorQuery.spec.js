const {fetchQuery, superTQuery} = require("../utils/test-helpers");
const {
    GET_ALL_AUTHORS_QUERY,
    GET_AUTHOR_BY_ID,
} = require("../queries/author/queries");
const {expect: jestExpect, describe, test, afterEach, it} = require("@jest/globals");
const {allSchema} = require("../../graphql");
const {serverListening} = require("../../server");

describe("Author Query Test", () => {
    it("should see a list of authors", async () => {
        const {data} = await fetchQuery(
            baseURL,
            GET_ALL_AUTHORS_QUERY,
            undefined,
            undefined
        );

        // check the nullability of the data object
        jestExpect(data).toBeDefined();
        jestExpect(data.authors).toBeDefined();

        // check the length of author [ 2 ]
        jestExpect(data.authors).toHaveLength(3);
    });
});

describe("Author Schema Test", () => {
    test("should see an author schema type", () => {
        // check book schema type
        jestExpect(allSchema.getType("Author")).toBeDefined();
        jestExpect(allSchema.getType("Author")).not.toBeNull();
    });
});

describe("Author Query Test using graphql-tools", function () {

    afterEach(() => {
        serverListening.close()
    }, 5000)


    test("Authors Query test", async function () {
        const {data: authorLists} = await superTQuery(
            path,
            GET_ALL_AUTHORS_QUERY,
            undefined,
            undefined
        );

        //  check definition of the author list data
        jestExpect(authorLists).toBeDefined();
        jestExpect(authorLists.authors).toBeDefined();
        jestExpect(typeof authorLists.authors).toBe("object");

        //  Author Query Test
        tester.test(true, GET_ALL_AUTHORS_QUERY, undefined);
    }, 7000);

    test("Author Query test using ID", async function () {
        const authorQueryVars = {
            id: "1",
        };
        const {data: authorById} = await superTQuery(
            path,
            GET_AUTHOR_BY_ID,
            authorQueryVars,
            undefined
        );

        // author check definition
        jestExpect(authorById).toBeDefined();
        jestExpect(authorById.author).toBeDefined();
        // jestExpect(authorById.author).toBe('object')
        jestExpect(authorById).toHaveProperty("author", {
            id: "1",
            name: "Harper Lee",
            age: 54,
        });
    }, 8000);
});

describe("Author Query through graphql module", () => {
    test("should first a list of Author", async () => {
        // author query availability
        tester.test(true, GET_ALL_AUTHORS_QUERY, undefined);
        tester.test(true, GET_AUTHOR_BY_ID, {id: "1"});

        // Query result test
        const {data} = await tester.graphql(
            GET_ALL_AUTHORS_QUERY,
            undefined,
            undefined,
            {}
        );

        jestExpect(data).toBeDefined()
        jestExpect(data.authors).toBeDefined()
        jestExpect(data.authors).toBeInstanceOf(Array)

        jestExpect(data.authors).toHaveLength(3)
        jestExpect(data).toHaveProperty('authors[0]', {
            "id": "1",
            "name": "Harper Lee",
            "age": 54
        })

    });
});
