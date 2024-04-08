import { RootLayout } from "../layouts/root";
import { Counter } from "./counter";

export function HomePage() {
  return (
    <RootLayout>
      <div class="w-full h-full flex flex-col items-center justify-center gap-4">
        <Counter count={0} />
        <div class="flex gap-4">
          <button
            class="rounded-lg px-4 py-2 bg-blue-400"
            hx-post="/counter-decrease"
            hx-include="#counterValue"
            hx-swap="outerHTML"
            hx-target="#counter"
          >
            -
          </button>
          <button
            class="rounded-lg px-4 py-2 bg-blue-400"
            hx-post="/counter-increase"
            hx-include="#counterValue"
            hx-swap="outerHTML"
            hx-target="#counter"
          >
            +
          </button>
        </div>
      </div>
    </RootLayout>
  );
}
