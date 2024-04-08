import { ChatMessage } from "../server/chat-api";

export function ChatMessages({ messages }: { messages: Array<ChatMessage> }) {
  return (
    <div class="flex flex-col gap-2 max-w-xl w-full" id="chatMessages">
      {messages.map(({ id, message, timestamp }) => (
        <div
          key={id}
          id={`message-${id}`}
          class="flex flex-col gap-2 w-full p-4 bg-slate-100 rounded-sm"
        >
          <p>{message}</p>
          <p class="text-slate-700 text-xs">{timestamp}</p>
        </div>
      ))}
    </div>
  );
}
