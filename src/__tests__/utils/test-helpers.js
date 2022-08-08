/**
 * @function fetchQuery
 * @param {string} url - the graphql URL
 * @param {string} query - the query for which you're trying to get some INFO
 * @param {Object} [variables={}] - the variables of the query being used when needed
 * @param {null} [operationName=null] -
 * @return {Object} data - the result of the under-mentioned function after fetching
 * */
async function fetchQuery(url, query, variables = {}, operationName = null) {
  return await (
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
        operationName,
      }),
    })
  ).json();
}

module.exports = {
  fetchQuery,
};
