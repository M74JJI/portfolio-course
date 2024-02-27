"use client";

import { FC, useEffect, useState } from "react";
import moment from "moment-timezone";

interface LiveClockProps {
  timeZone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH:mm");
      setTime(currentTime);
    };

    const intervalId = setInterval(updateClock, 1000);

    //Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div className=" text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span>{timeZone.split("/")[1]}</span>,<span>{time}</span>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default LiveClock;
