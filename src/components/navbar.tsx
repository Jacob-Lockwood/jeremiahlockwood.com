import { createSignal } from "solid-js";

// from HeroIcons
const MenuOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width={1.5}
    stroke="currentColor"
    class="h-6 w-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const MenuClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-6 w-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export function Navbar() {
  const [show, setShow] = createSignal(false);
  return (
    <nav class="fixed top-0 z-50 block w-full gap-10 bg-sky-200/90 px-10 py-5 text-lg md:flex md:px-16 md:text-sm lg:text-lg">
      <div class="mr-auto flex gap-10">
        <button class="md:hidden" onClick={() => setShow((show) => !show)}>
          {show() ? <MenuClose /> : <MenuOpen />}
        </button>
        <span>Jeremiah Lockwood</span>
      </div>
      <div
        class="hidden flex-col gap-10 py-10 md:flex md:flex-row md:p-0"
        classList={{ "!flex": show() }}
      >
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/music/">Music</a>
        <a href="/academic/">Academic</a>
        <a href="/visual-art/">Visual Art</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
