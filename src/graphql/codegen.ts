import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://beta.pokeapi.co/graphql/v1beta": {
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
