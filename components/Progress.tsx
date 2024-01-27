import React from "react";
import { Progress } from "@nextui-org/react";

export default function ProgressBar({
  value,
  className,
}: {
  value: number;
  className?: {};
}) {
  return (
    <Progress aria-label="Loading..." value={value} classNames={className} />
  );
}
