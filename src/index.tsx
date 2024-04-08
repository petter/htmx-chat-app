import { Hono } from "hono";

import { HomePage } from "./pages/home";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<HomePage />);
});

export default app;
