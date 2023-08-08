import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_THE_GRAPH_URL,
  documents: ["src/gql/**/*.ts", "'!src/gql/generated/**/*'"],
  generates: {
    "src/gql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
