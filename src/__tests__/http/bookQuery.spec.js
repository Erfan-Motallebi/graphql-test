const { describe, it, expect } = require("@jest/globals");
const { got } = require("got");
const { GET_ALL_BOOKS_QUERY } = require("../../queries/book");

const baseURL = `http://localhost:4001/graphql`;

describe("Query Tests", () => {
  test("should see a list of books", async () => {
    const listOfBooks = await fetch(baseURL, {
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

    expect(listOfBooks).toHaveLength(3);
  });
});
