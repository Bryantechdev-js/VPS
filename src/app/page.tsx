import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="popover">
        <h1 className="title">hello world</h1>
        <p className="description">
          This is a simple example of a Next.js app with a popover component.
        </p>
        <button>
          icon <menu>new test</menu>
        </button>
      </div>
    </div>
  );
}
