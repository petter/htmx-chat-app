import { Hono } from "hono";

import { HomePage } from "./pages/home";
import { Counter } from "./pages/counter";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<HomePage />);
});

app.post("/counter-increase", async (c) => {
  const formData = await c.req.parseBody();
  console.log(formData);
  const count = +formData["counterValue"];
  return c.html(<Counter count={count + 1} />);
});
app.post("/counter-decrease", async (c) => {
  const formData = await c.req.parseBody();
  console.log(formData);
  const count = +formData["counterValue"];
  return c.html(<Counter count={count - 1} />);
});

export default app;
