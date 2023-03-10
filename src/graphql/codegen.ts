import * as dotenv from "dotenv";
import { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config({ path: ".env.local" });

const API_URL = process.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("Environment variable `API_URL` is not defined");
}

const config: CodegenConfig = {
  schema: [
    {
      [API_URL]: {
        loader: "./src/graphql/codegen-loader.cjs",
      },
    },
  ],
  documents: "./src/**/*.graphql",
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    "src/graphql/types.d.ts": {
      config: {
        withHooks: true,
      },
      plugins: [
        {
          add: {
            content: [
              "/* eslint-disable */",
              "//THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)",
            ],
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-urql",
      ],
    },
    "src/graphql/schema.json": {
      plugins: ["urql-introspection"],
    },
  },
};

export default config;
