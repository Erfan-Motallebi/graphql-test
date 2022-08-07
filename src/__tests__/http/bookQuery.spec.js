const { describe, it } = require("@jest/globals");
const { got } = require("got");
const { GET_ALL_BOOKS_QUERY } = require("../queries/book.query");

const baseURL = `http://localhost:4000/graphql`;

describe("Query Tests", () => {
  it("should see a list of books", async () => {
    const listOfBooks = await got(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_ALL_BOOKS_QUERY,
        variables: {},
        operationName: null,
      }),
    });

    console.log(listOfBooks);
  });
});
