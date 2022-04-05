import React from "https://esm.sh/react@17";

const questions = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. 1",
    options: ["a", "b", "c"],
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. 2",
    options: ["a", "b", "c"],
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. 3",
    options: ["a", "b", "c"],
  },
];

function RadioQuestionList() {
  const questionList = questions.map((question, index) => (
    <div key={index} className="w-full form-control">
      <p>{question.text}</p>

      <label className="cursor-pointer">
        <input
          type="radio"
          name="radio-1"
          className="radio checked:bg-red-500"
        />
        <span className="label-text">Red pill</span>
      </label>

      <label className="cursor-pointer">
        <input
          type="radio"
          name="radio-1"
          className="radio checked:bg-blue-500"
          defaultChecked
        />
        <span className="label-text">Blue pill</span>
      </label>

      <label className="cursor-pointer">
        <input
          type="radio"
          name="radio-1"
          className="radio checked:bg-green-500"
        />
        <span className="label-text">Green pill</span>
      </label>
    </div>
  ));

  return <div className="flex flex-col">{questionList}</div>;
}

export function Header() {
  return (
    <header className="pt-16 text-center text-white">
      <h1 className="text-2xl capitalize">about practice</h1>
    </header>
  );
}

export function Content() {
  return (
    <div
      tabIndex={0}
      className="card grid grid-rows-[8rem_auto_4rem] grid-cols-8 w-[36rem] h-[36rem] bg-base-100 shadow-xl inset-0 m-auto"
    >
      <header className="col-span-8 pt-4 text-center">
        <ul className="w-3/4 steps">
          <li className="step step-primary">current</li>
          <li className="step step-primary">next step</li>
          <li className="step">last step</li>
        </ul>
        <p className="text-[#565656] text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </header>

      <div className="col-span-6 col-start-2">
        <RadioQuestionList />
      </div>

      <div className="flex flex-row justify-center col-span-8 pb-4">
        <button className="mx-auto capitalize rounded-md btn btn-primary">
          next
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return <></>;
}
