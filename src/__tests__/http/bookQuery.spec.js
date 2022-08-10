require("isomorphic-fetch");
const { describe, it, expect, test } = require("@jest/globals");
const { allSchema } = require("../../graphql");
const {
  GET_ALL_BOOKS_QUERY,
  GET_BOOK_BY_AUTHORID_QUERY,
} = require("../queries/book/queries");
const { fetchQuery } = require("../utils/test-helpers");

const baseURL = `http://localhost:4000/graphql`;

describe("Query Tests", () => {
  test("should see a list of books", async () => {
    const { data } = await fetchQuery(
      baseURL,
      GET_ALL_BOOKS_QUERY,
      undefined,
      undefined
    );

    // check length of thy books query
    expect(data.books).toHaveLength(7);

    // nested property checking book [ 0 ]
    expect(data).toHaveProperty("books[0]", {
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

    // the existence of book
    expect(data).toBeDefined();
    expect(data.book).toBeDefined();
    expect(data.book).not.toBeNull();

    // length of data.book [ 2 ]
    expect(data.book).toHaveLength(2);
  });
});

describe("Book Schema Test", () => {
  test("should see a book schema type", () => {
    // check book schema type
    expect(allSchema.getType("Book")).toBeDefined();
    expect(allSchema.getType("Book")).not.toBeNull();
  });
});
