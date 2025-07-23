// src/components/HeartFunds.tsx
import Image from "next/image";
import FundDistribution from "./animation/fund-distribution";

export default function HeartFunds() {
  return (
    <div
      className="relative w-full flex justify-center items-center"
      style={{ minHeight: 500 }}
    >
      <div className="relative w-[450px] h-[450px]">
        {/* Trái tim */}
        <Image
          src="/icon/Heart.svg"
          alt="Heart"
          fill
          className="object-contain z-0"
          priority
        />
        {/* Các nhánh quỹ lớn hơn, phủ lên */}
        <Image
          src="/icon/Group12.png"
          alt="Funds"
          fill
          className="object-contain z-20 scale-[1.8] -translate-y-14 -translate-x-2"
          priority
        />

      </div>

    </div>
  );
}
