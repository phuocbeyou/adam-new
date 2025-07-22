// src/components/HeartFunds.tsx
import Image from "next/image";

export default function HeartFunds() {
  return (
    <div
      className="relative w-full flex justify-center items-center"
      style={{ minHeight: 500 }}
    >
      {/* Trái tim */}
      <Image
        src="/icon/Heart.svg"
        alt="Heart"
        width={450}
        height={450}
        className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        priority
      />
      {/* Các nhánh quỹ */}
      <Image
        src="/icon/Group12.png"
        alt="Funds"
        width={800}
        height={800}
        className="absolute left-90 top-2/5 -translate-x-1/2 -translate-y-1/2 z-20 max-w-[900px]"
        priority
      />
    </div>
  );
}
