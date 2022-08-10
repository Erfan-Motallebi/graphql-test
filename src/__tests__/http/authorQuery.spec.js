require("isomorphic-fetch");
const { fetchQuery } = require("../utils/test-helpers");
const { GET_ALL_AUTHORS_QUERY } = require("../queries/author/queries");
const { expect } = require("@jest/globals");

const baseURL = `http://localhost:4000/graphql`;

describe("Author Query Test", () => {
  test("should see a list of authors", async () => {
    const { data } = await fetchQuery(
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
