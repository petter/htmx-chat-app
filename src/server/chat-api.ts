let id = 0;

export interface ChatMessage {
  id: string;
  message: string;
  timestamp: string;
}

const messages: Array<ChatMessage> = [];

async function addMessage(message: string) {
  messages.push({
    id: String(id++),
    message,
    timestamp: new Date().toISOString(),
  });
}

async function getMessages() {
  return messages;
}

export const chatApi = {
  addMessage,
  getMessages,
};
