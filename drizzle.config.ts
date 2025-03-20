import "dotenv/config";
import { defineConfig } from "drizzle-kit";

console.log("In DrizzleConfig: ", process.env.DATABASE_URL);

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
