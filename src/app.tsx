import React from "https://esm.sh/react@17";
// import { Content } from "./content-01.tsx";
// import { Content } from "./content-02.tsx";
// import { Content } from "./content-03.tsx";
// import { Content } from "./content-04.tsx";
// import { Content } from "./content-05.tsx";
// import { Content } from "./content-06.tsx";
// import { Content } from "./content-07.tsx";
// import { Content } from "./content-08.tsx";
import { Content } from "./content-09.tsx";
import MainContent from "./main_content.tsx";
import Navbar from "./navbar.tsx";
import Sidebar from "./sidebar.tsx";
// import FeedVideos from "./feed_videos.tsx";

function App() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <Navbar />
        <MainContent main={<Content />} />
      </div>

      <Sidebar />
    </div>
  );
}

export default App;
