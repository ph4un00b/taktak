import React from "https://esm.sh/react@17";
import { Kokoro } from "./icons/kokoro.tsx";

export default function PlayerActions(
  { likes = 222, comments = 444, shares = 666 },
) {
  return (
    <aside className="absolute w-16 h-auto bg-bg-transparent right-0 bottom-0 z-10">
      <div className="flex flex-col text-red-500 items-center">
        <Kokoro />
        <strong title="likes">{likes}</strong>
      </div>

      <div className="flex flex-col items-center">
        <Kokoro />
        <strong title="comments">{comments}</strong>
      </div>

      <div className="flex flex-col text-purple-400 items-center">
        <Kokoro />
        <strong title="shares">{shares}</strong>
      </div>
    </aside>
  );
}
