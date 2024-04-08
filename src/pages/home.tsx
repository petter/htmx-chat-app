import { RootLayout } from "../layouts/root";
import { ChatMessage } from "../server/chat-api";
import { ChatMessages } from "./chat-messages";

export function HomePage({ messages }: { messages: Array<ChatMessage> }) {
  return (
    <RootLayout>
      <div class="w-full h-full flex flex-col items-center justify-center gap-4">
        <ChatMessages messages={messages} />
      </div>
    </RootLayout>
  );
}
