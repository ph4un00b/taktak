import React, { ReactNode } from "https://esm.sh/react@17";

function MainContent(props: { main: ReactNode }) {
  /* Page content here */
  /* todo: percentage would be better but they do not */
  /* seem to work at the moment, falling back to em. */
  return (
    <section className="grid grid-rows-[8rem_1fr_8rem] bg-transparent">
      <header className="pt-16 text-center text-white">
        {/* <h1 className="text-2xl capitalize">getting started</h1> */}
        {/* <p className="text-base">Welcome! We’re here to get you rolling.</p> */}
      </header>

      {props.main}

      <footer className="pt-20 text-center text-black">
        {/* <a href="#" className="text-blue-600 underline">
          Skip and continue to your Dashboard
        </a>
        <p className="pt-8">
          You can return to these steps at anytime from the settings menu.
        </p> */}
      </footer>
    </section>
  );
}

export default MainContent;
