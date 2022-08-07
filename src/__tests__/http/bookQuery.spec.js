const { describe, test, it } = require("@jest/globals");
// adding the fetch globally to make a use of
require('isomorphic-fetch')
const { GET_ALL_BOOKS_QUERY } = require("../queries/book.query");

const baseURL = `http://localhost:4000/graphql`;

describe("Query Tests", () => {
  test("should see a list of books", async () => {
    const bookResp =
      await fetch(baseURL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              query: GET_ALL_BOOKS_QUERY,
              variables: {},
              operationName: null,
          }),
      })
    const listOfBooks = await bookResp.json();
    console.log(listOfBooks)

  });
});
