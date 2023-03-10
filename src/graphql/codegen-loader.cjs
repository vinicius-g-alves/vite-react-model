require("dotenv").config({ path: ".env.local" });
const fetch = require("cross-fetch");
const { getIntrospectionQuery, buildClientSchema } = require("graphql");

const API_URL = process.env.VITE_API_URL;

module.exports = async () => {
  const introspectionQuery = getIntrospectionQuery();

  if (!API_URL) {
    throw new Error("Environment variable `API_URL` is not defined");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });

  const data = await response.json();

  return buildClientSchema(data.data);
};
