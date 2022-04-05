import React from "https://esm.sh/react@17";
import { EyeIcon } from "https://esm.sh/@heroicons/react/outline";

function Header() {
  return <></>;
}

function Content() {
  return (
    <div
      tabIndex={0}
      className="card grid grid-rows-7 grid-cols-8 w-[36rem] h-[36rem] bg-base-100 shadow-xl inset-0 m-auto"
    >
      <header className="col-span-8 pt-4 text-center">
        <h2 className="text-2xl capitalize">Complete Profile</h2>
        <p className="text-[#565656] text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </header>

      <div className="w-full col-span-6 col-start-2 form-control">
        <label className="label">
          <span className="capitalize label-text">first name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full input input-bordered input-sm"
        />
      </div>

      <div className="w-full col-span-6 col-start-2 form-control">
        <label className="label">
          <span className="capitalize label-text">last name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full input input-bordered input-sm"
        />
      </div>

      <div className="w-full col-span-6 col-start-2 form-control">
        <label className="label">
          <span className="capitalize label-text">set password</span>
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Type here"
            className="w-full input input-bordered input-sm"
          />
          <div className="absolute inset-y-0 flex items-center right-3">
            <EyeIcon className="w-6 h-6 text-[#565656]" />
          </div>
        </div>
      </div>

      <div className="w-full col-span-6 col-start-2 form-control">
        <label className="label">
          <span className="capitalize label-text">confirm password</span>
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Type here"
            className="w-full input input-bordered input-sm"
          />
          <div className="absolute inset-y-0 flex items-center right-3">
            <EyeIcon className="w-6 h-6 text-[#565656]" />
          </div>
        </div>
      </div>

      <p className="col-start-2 col-span-6 text-center text-[#565656]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit facilis
        alias ullam asperiores provident, neque eveniet, a aliquid sequi
      </p>

      <div className="flex flex-row justify-center col-span-8 pb-4">
        <button className="mx-auto rounded-md btn btn-primary">continue</button>
      </div>
    </div>
  );
}

function Footer() {
  return <></>;
}

export default Content;
