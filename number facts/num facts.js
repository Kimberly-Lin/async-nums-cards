"use strict";

const API_BASE_URL = "http://numbersapi.com/";

async function getFact(num) {
    const resp = await axios.get(`${API_BASE_URL}${num}?json`);
    return resp.data.text;
}

async function getBatchFacts(num1, num2, num3, num4) {
    const resp = await axios.get(`${API_BASE_URL}${num1},${num2},${num3},${num4}`);
    return resp.data;
}

async function getFourFacts(num) {
    const resp1 = getFact(num);
    const resp2 = getFact(num);
    const resp3 = getFact(num);
    const resp4 = getFact(num);
    return await Promise.all([resp1, resp2, resp3, resp4]);
}
// Question: Why don't we need to have await in front of Promise.all(), shouldn't that always return a promise?
// getFourFacts works without an async in front of function definition. 
// Is this just because the console is friendly? Or because we're not having an await keyword.
