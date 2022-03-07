import React, { useRef, useState } from "https://esm.sh/react@17";

function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  function handle_play() {
    const { current: video_el } = video;
    if (!video_el) return;

    playing ? video_el.pause() : video_el.play();

    setPlaying(!playing);
  }

  return (
    <div className="relative">
      <video
        ref={video}
        loop
        muted
        className="w-full"
        src={src}
        controls={false}
        onClick={handle_play}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute inset-0 m-auto w-16 h-16 bg-transparent ${
          playing ? "opacity-0" : ""
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default VideoPlayer;
