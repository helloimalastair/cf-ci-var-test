import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint<Env> {
  fetch(_: Request) {
    return new Response("Hello World!");
  }
}
