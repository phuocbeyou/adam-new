"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Component() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    const leftHandVariants = {
        hidden: { x: -200, y: -700, opacity: 0 },
        visible: {
            x: -200,
            y: -50,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut" as const }
        },
    }

    const rightHandVariants = {
        hidden: { x: 200, y: 700, opacity: 0 },
        visible: {
            x: 200,
            y: 50,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut" as const }
        },
    }

    const heartVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" as const, delay: 0.5 },
        },
    }

    const floatingVariants = {
        floating: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatType: "reverse" as const,
            },
        },
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
    }

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const textLinesTop = ["No one changes the world alone", "But together, we grow movements rooted in giving"]
    const textLinesBottom = [
        "From every $ADAM action, a portion flows into the",
        "Karma Pool – a treasury of collective compassion",
        "funding real-world causes. This is not just a pool",
        "of capital, but a wellspring of intention.",
    ]

    return (
        <section
            ref={ref}
            className="relative flex flex-col items-center justify-between w-full text-white overflow-hidden"
        >
            {/* Văn bản phía trên */}
            <div className="relative z-10 mt-20 text-center space-y-2 px-4">
                {textLinesTop.map((line, index) => (
                    <motion.p
                        key={index}
                        variants={textVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: index * 0.2 + 0.2, duration: 0.8, ease: "easeInOut" }}
                        className="text-xl md:text-2xl lg:text-3xl font-bold"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>

            {/* Container cho bàn tay và trái tim */}
            <div className="relative z-10 flex items-center justify-center w-full h-full py-20">
                {/* Bàn tay trái */}
                <motion.div
                    variants={leftHandVariants}
                    initial="hidden"
                    animate={controls}
                    className="absolute top-[20%] left-[200px] z-10"
                >
                    <Image
                        src="/logo/hand_2.png"
                        alt="Left Hand"
                        width={700}
                        height={300}
                        className="object-contain"
                    />
                </motion.div>

                {/* Bàn tay phải */}
                <motion.div
                    variants={rightHandVariants}
                    initial="hidden"
                    animate={controls}
                    className="absolute top-[35%] right-[200px] z-10"
                >
                    <Image
                        src="/logo/hand_1.png"
                        alt="Right Hand"
                        width={700}
                        height={300}
                        className="object-contain"
                    />
                </motion.div>

                {/* Trái tim */}
                <motion.div
                    variants={heartVariants}
                    initial="hidden"
                    animate={controls}
                    className="relative z-20"
                >
                    <motion.div
                        variants={floatingVariants}
                        animate="floating"
                        className="relative"
                    >
                        <Image
                            src="/logo/heart.png"
                            alt="Heart Gem"
                            width={550}
                            height={250}
                            className="object-contain hover:scale-110 transition-transform duration-300"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Văn bản phía dưới */}
            <div className="relative z-10 mb-20 text-center space-y-2 max-w-3xl px-4">
                {textLinesBottom.map((line, index) => (
                    <motion.p
                        key={index}
                        variants={textVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: index * 0.2 + 0.8, duration: 0.8, ease: "easeInOut" }}
                        className="text-lg md:text-xl lg:text-2xl font-bold"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </section>
    )
}