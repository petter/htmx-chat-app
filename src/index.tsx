import { Hono } from "hono";

import { HomePage } from "./pages/home";
import { chatApi } from "./server/chat-api";

const app = new Hono();

chatApi.addMessage("Hello, World!");

app.get("/", async (c) => {
  const messages = await chatApi.getMessages();
  return c.html(<HomePage messages={messages} />);
});

export default app;
