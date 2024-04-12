import { Hono } from "hono";
import { streamSSE } from "hono/streaming";

import { HomePage } from "./pages/home";
import { ChatMessage, chatApi } from "./server/chat-api";
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

app.get("/messages", async (c) => {
  let id = 0;

  return streamSSE(c, async (stream) => {
    function subscriber(message: ChatMessage) {
      stream.writeSSE({
        event: "message",
        data: String(<SingleMessage message={message} />),
        id: String(id++),
      });
    }

    stream.onAbort(() => {
      chatApi.unsubscribe(subscriber);
    });

    chatApi.subscribe(subscriber);
  });
});

export default app;
