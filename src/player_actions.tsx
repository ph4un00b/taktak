import React from "https://esm.sh/react@17";
import { Kokoro } from "./icons/kokoro.tsx";

export default function PlayerActions() {
    return (
        <aside className="absolute w-16 h-auto bg-bg-transparent right-0 bottom-0 z-10">
            <div className="flex flex-col text-red-500">
                <Kokoro />
            </div>

            <div className="flex flex-col">
                <Kokoro />
            </div>

            <div className="flex flex-col text-purple-400">
                <Kokoro />
            </div>
        </aside>
    )
}