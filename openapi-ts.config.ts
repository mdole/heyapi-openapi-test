import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "src/clients/openapi.json",
  output: "src/clients",
  client: "@hey-api/client-fetch",
  base: "http://localhost:3002",
  name: "test",
});
