import React from "https://esm.sh/react@17";

const src = "https://v16-webapp.tiktok.com/c20aa972a534877aefc7d8abf7bb4143/622582c4/video/tos/useast2a/tos-useast2a-ve-0068c003/480486161a644844bce4b1c6d125518a/?a=1988&amp;br=3256&amp;bt=1628&amp;cd=0%7C0%7C0%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3CMnz7ThZUyQDXq&amp;l=20220306215657010223082150017ED677&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=MzZ1dXFkOzQ7MzMzOzczM0ApNzo6NGQ8aDxkNzxlNjdkOmc1amstZ2xucWBgLS1iMTZzcy41LzY1XjQuMC1hMTVhLTI6Yw%3D%3D&amp;vl=&amp;vr="


function VideoPlayer() {
	return (
		<video autoPlay muted className="w-full" src={src} controls={false} />
	)
}

export default VideoPlayer
