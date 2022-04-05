import React from "https://esm.sh/react@17";

const questions = [
  { text: "this form" },
  { text: "this form2" },
  { text: "this form3" },
  { text: "this form4" },
  { text: "this form5" },
  { text: "this form6" },
  { text: "this form7" },
];

function ChecklistQuestions() {
  const questionList = questions.map((question, index) => (
    <label key={index} className="cursor-pointer">
      <input type="checkbox" className="checkbox checkbox-primary" />
      <span className="label-text">{question.text}</span>
    </label>
  ));

  return (
    <div className="flex flex-col">
      {questionList}
      <label className="cursor-pointer">
        <input type="checkbox" className="checkbox checkbox-primary" />
        <span className="label-text">Other</span>
      </label>
    </div>
  );
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
          <li className="step step-primary">last step</li>
        </ul>
        <p className="text-[#565656] text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </header>

      <div className="col-span-6 col-start-2">
        <ChecklistQuestions />
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
