import React from "https://esm.sh/react@17";
import {
  CheckCircleIcon,
  UserCircleIcon,
} from "https://esm.sh/@heroicons/react/outline";

const links = [
  {
    subject: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    subject: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    subject: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    subject: "jamon ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    subject: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    subject: "hola ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

type LinkOpts = { subject: string; description: string };

function Link({ subject, description }: LinkOpts) {
  return (
    <a
      tabIndex={0}
      href="#"
      className="grid grid-cols-8 hover:bg-[#F3F4F6] border-b-[#DEDEDE] border-solid border-2"
    >
      <div className="relative col-span-1">
        <UserCircleIcon className="absolute inset-0 w-6 h-6 m-auto" />
      </div>

      <section className="flex flex-col justify-center col-span-6">
        <h2 className="after:content-['*'] after:text-red-500">{subject}</h2>
        <p className="text-xs text-[#565656]">{description}</p>
      </section>

      <div className="relative col-span-1">
        <CheckCircleIcon className="absolute inset-0 w-6 h-6 m-auto" />
      </div>
    </a>
  );
}

const Links = <>{links.map(Link)}</>;

function Header() {
  return (
    <header className="pt-16 text-center text-white">
      <h1 className="text-2xl capitalize">getting started</h1>
      <p className="text-base">Welcome! We’re here to get you rolling.</p>
    </header>
  );
}

export function Content() {
  return (
    <div
      tabIndex={0}
      className="card grid grid-rows-6 w-[36rem] h-[36rem] bg-base-100 shadow-xl inset-0 m-auto"
    >
      {Links}
    </div>
  );
}

export function Footer() {
  <footer className="pt-20 text-center text-black">
    <a href="#" className="text-blue-600 underline">
      Skip and continue to your Dashboard
    </a>
    <p className="pt-8">
      You can return to these steps at anytime from the settings menu.
    </p>
  </footer>;
}
