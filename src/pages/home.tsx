import { RootLayout } from "../layouts/root";
import { ChatMessage } from "../server/chat-api";
import { ChatMessages } from "./chat-messages";

export function HomePage({ messages }: { messages: Array<ChatMessage> }) {
  return (
    <RootLayout>
      <div class="w-full h-full flex flex-col items-center justify-center gap-4">
        <div class="w-full max-w-2xl grid gap-4 px-16 py-8 bg-pink-200">
          <ChatMessages messages={messages} />
          <form
            {...{
              "hx-on::after-request": "chatForm.reset();chatBox.focus();",
            }}
            hx-post="/new-message"
            hx-swap="none"
            class="flex gap-2"
            id="chatForm"
          >
            <input
              type="text"
              id="chatBox"
              name="message"
              class="w-full p-4 bg-slate-50 border border-pink-100 rounded-sm"
              placeholder="Type a message..."
            />
            <button class="bg-pink-400 px-4 text-pink-50 rounded-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </RootLayout>
  );
}
