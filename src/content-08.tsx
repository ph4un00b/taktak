import React from "https://esm.sh/react@17";
import { EnvelopeIcon } from "./icons/envelope.tsx";

const features = [
  { description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { description: "Lorem ipsum dolor sit 1." },
  { description: "Lorem ipsum dolor sit 2." },
  { description: "Lorem ipsum dolor sit 3." },
];

type FeatureOpts = {
  description: string;
};

function Feature({ description }: FeatureOpts) {
  return <p>{description}</p>;
}

const AuthorCard = (
  <div className="flex flex-row items-center h-full">
    <div className="pl-10 avatar">
      <div className="w-10 rounded-full">
        <img src="https://api.lorem.space/image/face?hash=92310" alt="avatar" />
      </div>
    </div>
    <div className="pl-4">
      <p>
        <strong>John Doe</strong>
      </p>
      <p>john@doe.com</p>
    </div>
  </div>
);

export function Header() {
  return (
    <header className="pt-16 text-center text-white">
      <h1 className="text-2xl capitalize">connect an email account</h1>
      <p className="text-base">sync your things.</p>
    </header>
  );
}

export function Content() {
  return (
    <div
      tabIndex={0}
      className="card grid grid-rows-[1fr_1fr_9rem_4rem_1fr_1fr] grid-cols-8 w-[36rem] h-[36rem] bg-base-100 shadow-xl inset-0 m-auto"
    >
      <div className="col-span-6 col-start-2">
        <EnvelopeIcon className="mx-auto" />
      </div>

      <div className="col-span-6 col-start-2">
        <div className="flex flex-row items-center justify-between h-full">
          <button className="btn btn-outline btn-primary w-[48%]">Gmail</button>
          <button className="btn btn-outline btn-primary w-[48%]">
            Outlook
          </button>
        </div>
      </div>

      <div className="col-span-6 col-start-2">
        <div className="flex flex-col justify-around h-full">
          {features.map(Feature)}
        </div>
      </div>

      <div className="col-span-6 col-start-2 bg-blue-100 bg-base-100">
        {AuthorCard}
      </div>

      <div className="col-span-6 col-start-2">
        <div className="grid h-full place-items-center">
          <a className="link link-primary" href="#">
            Lorem ipsum dolor sit amet consectetur.
          </a>
        </div>
      </div>

      <div className="flex justify-center col-span-8 pb-4">
        <button className="capitalize rounded-md btn btn-primary">
          continue
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return <></>;
}
