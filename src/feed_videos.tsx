import React from "https://esm.sh/react@17";
import VideoPlayer from "./video_player.tsx";

const VIDEOS = [
  {
    id: "a",
    author: "ph4u party",
    description: "party hard #hardcore #tuluminatis",
    likes: 963,
    shares: 333,
    comments: 21,
    albumCover: "",
    songTitle: "",
    src:
      "https://v16-webapp.tiktok.com/a9f12ae5ad63bf584458ba70a0f8ce1e/6225aeee/video/tos/useast2a/tos-useast2a-pve-0068/53ce4fffdd12499491e958718722bea1/?a=1988&amp;br=2894&amp;bt=1447&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3CMnz7ThYmkQDXq&amp;l=202203070106020102230730270C8F1FC9&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=ajpnbzw6ZnE2OzMzNzczM0ApOjVnZTdpNzxnNzRmO2U0NmcwNF5vcjQwYF9gLS1kMTZzc2BiMGNhM142XzNfYDIuNGA6Yw%3D%3D&amp;vl=&amp;vr=",
  },
  {
    id: "b",
    author: "ph4un00b",
    description: "let's go deep3er!",
    likes: 9831343,
    shares: 342432,
    comments: 999,
    albumCover: "",
    songTitle: "",
    src:
      "https://v16-webapp.tiktok.com/c20aa972a534877aefc7d8abf7bb4143/622582c4/video/tos/useast2a/tos-useast2a-ve-0068c003/480486161a644844bce4b1c6d125518a/?a=1988&amp;br=3256&amp;bt=1628&amp;cd=0%7C0%7C0%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3CMnz7ThZUyQDXq&amp;l=20220306215657010223082150017ED677&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=MzZ1dXFkOzQ7MzMzOzczM0ApNzo6NGQ8aDxkNzxlNjdkOmc1amstZ2xucWBgLS1iMTZzcy41LzY1XjQuMC1hMTVhLTI6Yw%3D%3D&amp;vl=&amp;vr=",
  },
];

function FeedVideos() {
  return (
    <>
      {VIDEOS.map((video) => (
        <div style={{ scrollSnapAlign: "center" }}>
          <VideoPlayer key={video.id} {...video} />
        </div>
      ))}
    </>
  );
}

export default FeedVideos;
