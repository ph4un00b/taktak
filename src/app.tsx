import React from "https://esm.sh/react@17";
import FeedVideos from "./feed_videos.tsx";

function App() {
  const ratio = { ["--aspect-ratio" as any]: "9/16" };

  return (
    <main className="grid text-white h-screen overflow-x-hidden">
      <section
        className="App max-w-[370px] h-full overflow-y-scroll"
        style={ratio}
      >
        <FeedVideos />
      </section>
    </main>
  );
}

export default App;
