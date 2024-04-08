import { Hono } from "hono";

import { HomePage } from "./pages/home";
import { chatApi } from "./server/chat-api";
import { SingleMessage } from "./pages/chat-messages";

const app = new Hono();

app.get("/", async (c) => {
  const messages = await chatApi.getMessages();
  return c.html(<HomePage messages={messages} />);
});

app.post("/new-message", async (c) => {
  const formData = await c.req.parseBody();
  const message = formData["message"];
  const m = await chatApi.addMessage(message as string);
  return c.html(<SingleMessage message={m} />);
});

export default app;
