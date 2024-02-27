"use client";

import { FC } from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorProps {
  color: string;
}

const Cursor: FC<CursorProps> = ({ color }) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `1px solid ${color}`,
      }}
      clickables={["a", "button", "select", "input", ".link"]}
    />
  );
};
export default Cursor;
