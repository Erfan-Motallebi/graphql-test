require("isomorphic-fetch");
const { fetchQuery } = require("../utils/test-helpers");
const { GET_ALL_AUTHORS_QUERY } = require("../queries/author/queries");

const baseURL = `http://localhost:4000/graphql`;

describe("Author Query Test", () => {
  test("should see a list of authors", async () => {
    const { data } = await fetchQuery(
      baseURL,
      GET_ALL_AUTHORS_QUERY,
      undefined,
      undefined
    );
    console.log(data);
  });
});
