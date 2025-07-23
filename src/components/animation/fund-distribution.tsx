"use client"

import FundItem from "./fund-item"

// Estimated absolute coordinates for heart connection points and box positions
// These values are relative to the 1200x600 container where the heart image is centered.
// Adjust these values to fine-tune alignment with the background image.
const fundsData = [
    {
        name: "SPIRITUAL CULTURE FUND",
        percent: "10%",
        delay: 0,
        boxPosition: { top: "100px", left: "200px" },
        lineStart: { x: 550, y: 220 }, // Point on heart (right side, upper)
        lineEnd: { x: 400, y: 150 }, // Point near box (left side of box)
    },
    {
        name: "EMPATHY FUND",
        percent: "10%",
        delay: 0.1,
        boxPosition: { top: "200px", left: "150px" },
        lineStart: { x: 500, y: 280 }, // Point on heart (right side, mid)
        lineEnd: { x: 350, y: 250 }, // Point near box (left side of box)
    },
    {
        name: "TECH FOR GOOD FUN",
        percent: "15%",
        delay: 0.2,
        boxPosition: { top: "300px", left: "100px" },
        lineStart: { x: 480, y: 350 }, // Point on heart (right side, lower-mid)
        lineEnd: { x: 300, y: 350 }, // Point near box (left side of box)
    },
    {
        name: "HEALING HANDS FUND",
        percent: "20%",
        delay: 0.3,
        boxPosition: { top: "400px", left: "150px" },
        lineStart: { x: 520, y: 420 }, // Point on heart (right side, lower)
        lineEnd: { x: 350, y: 450 }, // Point near box (left side of box)
    },
    {
        name: "WEB3 EDU SEED FUN",
        percent: "25%",
        delay: 0.4,
        boxPosition: { top: "150px", right: "150px" },
        lineStart: { x: 650, y: 220 }, // Point on heart (left side, upper)
        lineEnd: { x: 800, y: 200 }, // Point near box (right side of box)
    },
    {
        name: "GREEN EARTH FUN",
        percent: "20%",
        delay: 0.5,
        boxPosition: { top: "400px", right: "100px" },
        lineStart: { x: 680, y: 400 }, // Point on heart (left side, lower)
        lineEnd: { x: 850, y: 450 }, // Point near box (right side of box)
    },
]

export default function FundDistribution() {
    return (
        <div className="relative h-full w-full">
            {fundsData.map((fund, index) => (
                <FundItem
                    key={index}
                    name={fund.name}
                    percent={fund.percent}
                    delay={fund.delay}
                    boxPosition={fund.boxPosition}
                    lineStart={fund.lineStart}
                    lineEnd={fund.lineEnd}
                    gradientId={`gradient${index + 1}`}
                />
            ))}
        </div>
    )
}
