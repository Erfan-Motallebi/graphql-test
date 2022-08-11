const request = require('supertest')
const app = require('../../app')

/**
 * @function fetchQuery
 * @param {string} url - the graphql URL
 * @param {string} query - the query for which you're trying to get some INFO
 * @param {Object} [variables={}]  - the variables of the query being used when needed
 * @param {null} [operationName=null] -
 * @return {Object} the result of the under-mentioned function after fetching - { data }
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

/**
 * @function superTQuery
 * @param {string} url - the graphql URL
 * @param {string} query - the query for which you're trying to get some INFO
 * @param {Object} [variables={}] - the variables of the query being used when needed
 * @param {null} [operationName=null] -
 * @return {Object} the result of the under-mentioned function after fetching - { data }
 * */
async function superTQuery(url, query, variables = {}, operationName = null) {

    try {
        const resp = await request(app)
            .post(url)
            .set('Content-Type', 'application/json')
            .send({
                query,
                variables,
                operationName
            })
            .expect(200)
        return resp.body

    } catch (e) {
        console.error({superTestError: e})
    }
}

module.exports = {
    fetchQuery,
    superTQuery
};
