let id = 0;

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
  return m;
}

async function getMessages() {
  return messages;
}

export const chatApi = {
  addMessage,
  getMessages,
};
