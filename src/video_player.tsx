import React, { useRef, useState } from "https://esm.sh/react@17";

const src =
  "https://v16-webapp.tiktok.com/c20aa972a534877aefc7d8abf7bb4143/622582c4/video/tos/useast2a/tos-useast2a-ve-0068c003/480486161a644844bce4b1c6d125518a/?a=1988&amp;br=3256&amp;bt=1628&amp;cd=0%7C0%7C0%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3CMnz7ThZUyQDXq&amp;l=20220306215657010223082150017ED677&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=MzZ1dXFkOzQ7MzMzOzczM0ApNzo6NGQ8aDxkNzxlNjdkOmc1amstZ2xucWBgLS1iMTZzcy41LzY1XjQuMC1hMTVhLTI6Yw%3D%3D&amp;vl=&amp;vr=";

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  function handle_play() {
    if (!video) return;
    if (!video.current) return;

    if (playing) {
      video.current.pause();
    } else {
      video.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <div className="relative">
      <video
        ref={video}
        autoPlay
        muted
        className="w-full"
        src={src}
        controls={false}
      />

      <button
        className="absolute inset-0 m-auto w-16 h-16 bg-transparent rounded-full border-1 border-solid border-black"
        onClick={handle_play}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default VideoPlayer;
