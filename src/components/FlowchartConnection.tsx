import React from 'react';

interface FlowchartConnectionProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export function FlowchartConnection({ start, end }: FlowchartConnectionProps) {
  const pathD = `M ${start.x} ${start.y} C ${(start.x + end.x) / 2} ${start.y}, ${(start.x + end.x) / 2} ${end.y}, ${end.x} ${end.y}`;

  return (
    <path
      d={pathD}
      className="stroke-current text-blue-400 dark:text-blue-500"
      fill="none"
      strokeWidth="2"
      strokeDasharray="0"
      markerEnd="url(#arrowhead)"
    />
  );
}