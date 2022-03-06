import React, { useState } from "https://esm.sh/react@17";
import VideoPlayer from "./video_player.tsx"

function App() {
  const [count, setCount] = useState(0)
	const ratio = { ['--aspect-ratio' as any]: '9/16' }

  return (
    <main className="grid place-content-center text-white h-screen">
    	<section className="App max-w-[370px] h-full" style={ratio}>
        <VideoPlayer/>
      </section>
    </main>
  )
}

export default App
