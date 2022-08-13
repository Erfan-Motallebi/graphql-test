const {
  describe,
  it,
  expect: jestExpect,
  test,
  beforeAll,
} = require("@jest/globals");
const {
  GET_ALL_BOOKS_QUERY,
  GET_BOOK_BY_AUTHORID_QUERY,
} = require("../queries/book/queries");
const { fetchQuery, superTQuery } = require("../utils/test-helpers");

// Mocha && Chai requirements
const { expect: chaiExpect, assert: chaiAssert } = require("chai"),
  chai = require("chai");

describe("Query Tests", () => {
  test("should see a list of books", async () => {
    const { data } = await fetchQuery(
      baseURL,
      GET_ALL_BOOKS_QUERY,
      undefined,
      undefined
    );
    // check length of thy books query
    jestExpect(data.books).toHaveLength(7);

    // nested property checking book [ 0 ]
    jestExpect(data).toHaveProperty("books[0]", {
      id: "1",
      name: "Winner of the PULITZER PRIZE",
      authorId: 1,
      yearOfRelease: 1960,
      author: {
        id: "1",
        name: "Harper Lee",
        age: 54,
      },
    });
  });

  it("should see a book using authorId", async () => {
    const queryVars = {
      authorId: "1",
    };
    const { data } = await fetchQuery(
      baseURL,
      GET_BOOK_BY_AUTHORID_QUERY,
      queryVars,
      undefined
    );
    // check the length of the query [2]
    jestExpect(data.books).toBeUndefined();
    jestExpect(data.book).toHaveLength(2);

    // check book [ 0 ]
    jestExpect(data.book).toBeDefined();
    jestExpect(data).toHaveProperty("book[0]", {
      id: "1",
      name: "Winner of the PULITZER PRIZE",
      genre: "Novel",
      yearOfRelease: 1960,
      author: {
        id: "1",
        name: "Harper Lee",
        age: 54,
      },
    });
  });
});

describe("Book Query Test using graphql-tools", function () {
  // let tester;
  // beforeAll(() => {
  //     tester = new EasyGraphQLTester(allSchema, resolvers)
  // })
  test("book Query test", async function () {
    const { data: bookLists } = await superTQuery(
      path,
      GET_ALL_BOOKS_QUERY,
      undefined,
      undefined
    );

    // Check the definition of the data object
    chaiAssert.isDefined(bookLists, "data is defined");
    chaiAssert.isDefined(bookLists.books, "data.book is defined");

    //    length of data.book
    chaiExpect(bookLists.books).to.have.length(7);

    //    Query test
    tester.test(true, GET_ALL_BOOKS_QUERY, undefined);

    //    Query Test
    const bookQueryVars = {
      authorId: "1",
    };
    const { data: bookListsByAuthorId } = await superTQuery(
      path,
      GET_BOOK_BY_AUTHORID_QUERY,
      bookQueryVars,
      undefined
    );

    // check the definition of the data object
    chaiAssert.isDefined(bookListsByAuthorId, "Data is defined");
    chaiAssert.isDefined(bookListsByAuthorId.book, "Data is defined");
  });
});
