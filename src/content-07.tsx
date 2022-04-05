import React from "https://esm.sh/react@17";

export function Header() {
  return (
    <header className="pt-16 text-center text-white">
      <h1 className="text-2xl capitalize">invite your team</h1>
      <p className="text-base">Give some people access to this stuff.</p>
    </header>
  );
}

export function Content() {
  return (
    <div
      tabIndex={0}
      className="card grid grid-rows-[8rem_1fr_1fr_4rem] grid-cols-8 w-[36rem] h-[36rem] bg-base-100 shadow-xl inset-0 m-auto"
    >
      <p className="col-span-6 col-start-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <textarea
        className="col-span-6 col-start-2 textarea textarea-primary"
        placeholder="Bio"
        defaultValue={""}
      />

      <p className="col-span-6 col-start-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facili
      </p>

      <div className="flex flex-row justify-center col-span-8 pb-4">
        <button className="capitalize rounded-md btn btn-primary">Send</button>
      </div>
    </div>
  );
}

export function Footer() {
  return <></>;
}
