// src/components/HeartFunds.tsx
import Image from "next/image";
import Karma from "./animation/karma";

export default function HeartFunds() {
  return (
    <div
      className="relative w-full flex justify-center items-center"
      style={{ minHeight: 500 }}
    >
      <Karma />

    </div>
  );
}
