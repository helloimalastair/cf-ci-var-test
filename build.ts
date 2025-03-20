import { build } from "esbuild";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MESSAGE: string;
      DATABASE_URL: string;
    }
  }
}

console.log(process.env.MESSAGE);

await build({
  bundle: true,
  minify: true,
  target: "esnext",
  format: "esm",
  outfile: "dist/worker.js",
  external: ["cloudflare:*"],
  entryPoints: ["src/index.ts"],
});
