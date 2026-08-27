"use client";

import { useState } from "react";

export default function ImageMeasure() {
  const [start, setStart] = useState<{ x: number; y: number } | null>(null);
  const [box, setBox] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    setStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  function handleMouseUp(e: React.MouseEvent<HTMLDivElement>) {
    if (!start) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    const x = Math.min(start.x, endX);
    const y = Math.min(start.y, endY);
    const width = Math.abs(endX - start.x);
    const height = Math.abs(endY - start.y);

    const result = {
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      width: (width / rect.width) * 100,
      height: (height / rect.height) * 100,
    };

    setBox(result);
    console.log(result);
    setStart(null);
  }

  return (
    <div
      className="relative w-full cursor-crosshair"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <img
        src="/bg_home.png"
        alt=""
        className="block w-full"
      />

      {box && (
        <div
          className="absolute border-2 border-red-500 bg-red-500/10"
          style={{
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: `${box.width}%`,
            height: `${box.height}%`,
          }}
        />
      )}
    </div>
  );
}