import video001 from "./videos/video001.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
    remove() {
      videoRef.current.remove();
    },
  }));
  return <video width={300} src={video001} ref={videoRef}></video>;
}

export default forwardRef(Video);
