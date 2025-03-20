import { build } from "esbuild";

interface Process {
  env: {
    MESSAGE: string;
  };
}

declare global {
  const process: Process;
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
