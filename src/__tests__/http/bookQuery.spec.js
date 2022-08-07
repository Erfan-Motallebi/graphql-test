const { describe, test, it } = require("@jest/globals");
const { default: got } = require("got");
const { GET_ALL_BOOKS_QUERY } = require("../queries/book.query");

const baseURL = `http://localhost:4000/graphql`;

describe("Query Tests", () => {
  test("should see a list of books", async () => {
    const listOfBooks = await (
      await got(baseURL, {
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
    ).json();

    console.log(listOfBooks);
  });
});
