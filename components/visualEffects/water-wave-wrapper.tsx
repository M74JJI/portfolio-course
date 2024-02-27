"use client";
import { FC, ReactNode } from "react";
import WaterWave from "react-water-wave";

interface WaterWveWrapperProps {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
}

const WaterWaveWrapper: FC<WaterWveWrapperProps> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};

export default WaterWaveWrapper;
