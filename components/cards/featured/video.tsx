import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const Video = ({ video, active }: { video: string; active: boolean }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [active]);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl">
      <video
        src={video}
        ref={videoRef}
        loop={active}
        muted
        className={cn(
          "h-full w-full object-cover rounded-3xl",
          active ? "" : "grayscale"
        )}
      />
    </div>
  );
};

export default Video;
