export function Counter({ count }: { count: number }) {
  return (
    <div id="counter">
      <h1 class="text-4xl font-bold">{count}</h1>
      <input
        type="hidden"
        name="counterValue"
        value={count}
        id="counterValue"
      />
    </div>
  );
}
