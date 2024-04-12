import { EventEmitter } from "node:events";
let id = 0;

const emitter = new EventEmitter();

export interface ChatMessage {
  id: string;
  message: string;
  timestamp: string;
}

const messages: Array<ChatMessage> = [];

async function addMessage(message: string) {
  const m = {
    id: String(id++),
    message,
    timestamp: new Date().toISOString(),
  };
  messages.push(m);
  emitter.emit("newMessage", m);
  return m;
}

export function subscribe(newMessage: (m: ChatMessage) => void) {
  emitter.on("newMessage", newMessage);
}

export function unsubscribe(newMessage: (m: ChatMessage) => void) {
  emitter.off("newMessage", newMessage);
}

async function getMessages() {
  return messages;
}

export const chatApi = {
  addMessage,
  getMessages,
  subscribe,
  unsubscribe,
};
