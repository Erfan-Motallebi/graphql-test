const { describe, test, it } = require("@jest/globals");
// adding the fetch globally to make a use of
require("isomorphic-fetch");
const {
  GET_ALL_BOOKS_QUERY,
  GET_BOOK_BY_AUTHORID_QUERY,
} = require("../queries/book.query");
const { fetchQuery } = require("../utils/test-helpers");

const baseURL = "http://localhost:4000/graphql";

describe("Query Tests", () => {
  test.skip("should see a list of books ", async () => {
    try {
      const { data } = await fetchQuery(
        baseURL,
        GET_ALL_BOOKS_QUERY,
        undefined,
        undefined
      );
      // Check sections
      expect(data.books).toHaveLength(7);

      // books [2]
      expect(data).toHaveProperty("books[2]", {
        yearOfRelease: 1998,
        id: "3",
        genre: "Sci-Fi",
        name: "Lord of the Rings",
        authorId: 3,
        author: {
          name: "J.R.R. Tolkien",
          id: "3",
          age: 76,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }, 10000);

  it("should see a book using authorId", async () => {
    const queryVariables = {
      authorId: "2",
    };
    const { data } = await fetchQuery(
      baseURL,
      GET_BOOK_BY_AUTHORID_QUERY,
      queryVariables,
      undefined
    );

    //  check the length of the query [ should be 3 ]
    expect(data.book).toHaveLength(3);

    //    check a nested property in the book list
    expect(data).toHaveProperty("book[0]", {
      name: "Don Quixote",
      id: "2",
      genre: "Advanturous",
      yearOfRelease: 1987,
      author: {
        id: "2",
        name: "Miguel de Cervantes",
        age: 61,
      },
    });
  }, 10000);
});
