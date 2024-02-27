import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface HeadingAnimatedSvg {
  animated?: boolean;
  text: string;
}

export const HeadingAnimatedSvg: FC<HeadingAnimatedSvg> = ({
  animated,
  text,
}) => {
  const [active, setActive] = useState<boolean>(animated || false);
  return (
    <div
      className="link relative flex items-center justify-center w-[50px]"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 384 384" // Adjust this viewBox based on your SVG content
        width={active ? 30 : 50}
        height={active ? 30 : 50}
        className="origin-center transition-all duration-700 ease-in"
      >
        <path
          id="dp_path001"
          transform="matrix(1,0,0,1,-236.031,-39.0307)"
          fill={active ? "#fff" : "#fff"}
          stroke="none"
          strokeWidth={0}
          d="M 427.651,39.0307 C 452.591,98.5 511.431,10.6507 452.851,170.7 C 524.031,15.84 503.9,119.64 563.5,95.0107 C 539.08,154.691 642.809,134.18 488.2,205.931 C 648.04,146.76 560.411,205.92 619.971,230.651 C 560.5,255.591 648.351,314.431 488.3,255.851 C 643.16,327.029 539.36,306.9 563.991,366.5 C 504.311,342.08 524.82,445.811 453.071,291.2 C 512.24,451.04 453.071,363.411 428.351,422.971 C 403.411,363.5 344.571,451.351 403.151,291.3 C 331.971,446.16 352.1,342.36 292.5,366.991 C 316.92,307.311 213.191,327.82 367.791,256.071 C 207.96,315.24 295.589,256.071 236.031,231.351 C 295.5,206.411 207.651,147.571 367.7,206.151 C 212.84,134.971 316.64,155.1 292.011,95.5 C 351.691,119.92 331.18,16.1907 402.931,170.791 C 343.76,10.96 402.92,98.5907 427.651,39.0307 Z "
        />
      </svg>
      <div
        className={cn(
          "absolute origin-center transition-opacity duration-300",
          active ? "opacity-1" : "opacity-0"
        )}
      >
        <svg
          className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 100 100"
          overflow="visible"
        >
          <path
            id="curve-wnxkz4"
            d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
            strokeWidth="none"
            fill="transparent"
          />
          <text>
            <textPath
              href="#curve-wnxkz4"
              startOffset={0}
              dominantBaseline="Central"
              style={{
                fontSize: "14.5px",
                fontFamily: "Figtree",
                fontWeight: 600,
                wordSpacing: "0.1px",
                letterSpacing: 1,
                fill: "#fff",
              }}
            >
              {text} ✦
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
