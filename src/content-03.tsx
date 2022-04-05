import React from "https://esm.sh/react@17";

import {
  RefreshIcon,
  QuestionMarkCircleIcon,
} from "https://esm.sh/@heroicons/react/outline";

function SelectSlugName() {
  return (
    <>
      <p className="flex justify-center">
        Lorem ipsum dolor sit, amet consectetur.
      </p>

      <div className="flex justify-center py-2">
        <RefreshIcon className="w-6 h-6" />
      </div>

      <div className="grid grid-cols-3 gap-8">
        <label
          htmlFor="checkbox"
          className="relative px-4 py-2 text-center rounded-md cursor-pointer"
        >
          <input
            id="checkbox"
            type="checkbox"
            className="z-20 hidden bg-transparent rounded-md peer"
          />
          <span className="inset-0 w-full h-[1rem] m-auto">field title</span>
          <div className="absolute inset-0 bg-transparent peer-checked:border-[#3232AB] z-10 border rounded-md"></div>
        </label>

        <label
          htmlFor="checkbox2"
          className="relative px-4 py-2 text-center rounded-md cursor-pointer"
        >
          <input
            id="checkbox2"
            type="checkbox"
            className="z-20 hidden bg-transparent rounded-md peer"
          />
          <span className="inset-0 w-full h-[1rem] m-auto">field title</span>
          <div className="absolute inset-0 bg-transparent peer-checked:border-[#3232AB] z-10 border rounded-md"></div>
        </label>

        <label
          htmlFor="checkbox3"
          className="relative px-4 py-2 text-center rounded-md cursor-pointer"
        >
          <input
            id="checkbox3"
            type="checkbox"
            className="z-20 hidden bg-transparent rounded-md peer"
          />
          <span className="inset-0 w-full h-[1rem] m-auto">field title</span>
          <div className="absolute inset-0 bg-transparent peer-checked:border-[#3232AB] z-10 border rounded-md"></div>
        </label>
      </div>
    </>
  );
}

export function Header() {
  return <></>;
}

export function Content() {
  return (
    <div
      tabIndex={0}
      className="card grid grid-rows-7 grid-cols-8 w-[36rem] h-[36rem] bg-base-100 shadow-xl inset-0 m-auto"
    >
      <header className="col-span-8 pt-4 text-center">
        <h2 className="text-2xl capitalize">Organization Name and Slug</h2>
        <p className="text-[#565656] text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </header>

      <div className="w-full col-span-6 col-start-2 form-control">
        <label className="label">
          <span className="capitalize label-text">organization name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full input input-bordered input-sm"
        />
      </div>

      <div className="w-full col-span-6 col-start-2 form-control">
        <SelectSlugName />
      </div>

      <div className="divider col-start-2 col-span-6 text-[#565656]">OR</div>

      <div className="w-full col-span-6 col-start-2 form-control">
        <label className="flex flex-row items-center">
          <QuestionMarkCircleIcon className="w-4 h-4" />
          <span className="capitalize label-text">custom slug</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full input input-bordered input-sm"
        />
        <label className="label">
          <span className="before:content-['*'] label-text-alt text-red-500">
            Lorem, ipsum dolor sit amet consectetur.
          </span>
        </label>
      </div>

      <p className="col-start-2 col-span-6 px-5 text-center text-[#565656]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit facilis
        alias ullam.
      </p>

      <div className="flex flex-row justify-center col-span-8 pb-4">
        <button className="mx-auto capitalize rounded-md btn btn-primary">
          continue
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return <></>;
}
