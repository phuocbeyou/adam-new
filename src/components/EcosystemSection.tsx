"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const companies = [
    { name: "Company A", src: "/icon/logo_1.png", url: "https://cerf.un.org/" },
    { name: "Company B", src: "/icon/logo_2.png", url: "https://nouns.wtf/" },
    { name: "Company C", src: "/icon/logo_3.png", url: "https://theblockchainassociation.org/" },
    { name: "Company D", src: "/icon/logo_4.png", url: "https://yearn.fi/" },
    { name: "Company E", src: "/icon/logo_5.png", url: "https://www.eff.org/" },
]

interface WordByWordFadeInProps {
    text: string
    className?: string
}

const WordByWordFadeIn: React.FC<WordByWordFadeInProps> = ({ text, className }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [animatedWords, setAnimatedWords] = useState<boolean[]>([])

    const words = text.split(" ")

    useEffect(() => {
        if (isInView && animatedWords.length === 0) {
            // Initialize all words as false
            setAnimatedWords(new Array(words.length).fill(false))

            // Animate each word with delay
            words.forEach((_, index) => {
                setTimeout(() => {
                    setAnimatedWords(prev => {
                        const newArray = [...prev]
                        newArray[index] = true
                        return newArray
                    })
                }, index * 100) // 100ms delay between words
            })
        }
    }, [isInView, words.length, animatedWords.length])

    return (
        <p ref={ref} className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block mr-1 transition-all duration-500 ease-out"
                    style={{
                        opacity: animatedWords[i] ? 1 : 0,
                        transform: animatedWords[i] ? 'translateY(0px)' : 'translateY(20px)'
                    }}
                >
                    {word}
                </span>
            ))}
        </p>
    )
}

export default function EcosystemSection() {
    const titleRef = useRef(null)
    const titleInView = useInView(titleRef, { once: true, amount: 0.1, margin: "0px 0px -200px 0px" })

    // Debug để xem animation có trigger không
    useEffect(() => {
        console.log('Title in view:', titleInView)
    }, [titleInView])

    return (
        <>
            {/* CSS for infinite scroll animation */}
            <style jsx>{`
                @keyframes infiniteScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-infinite-scroll {
                    animation: infiniteScroll 30s linear infinite;
                }
                
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <section className="w-full text-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h1
                        ref={titleRef}
                        initial={{ opacity: 0, y: -50 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8"
                        style={{ willChange: 'opacity, transform' }}
                    >
                        ECOSYSTEM
                    </motion.h1>

                    <div className="max-w-2xl mx-auto space-y-4">
                        <WordByWordFadeIn
                            text="We're proud to join among a growing forest of builders, dreamers, and doers."
                            className="text-lg md:text-xl lg:text-2xl"
                        />
                    </div>

                    <div className="max-w-2xl mx-auto space-y-4 mt-5">
                        <WordByWordFadeIn
                            text="Together we make the impact real – for on chain – change off chain"
                            className="text-lg md:text-xl lg:text-2xl"
                        />
                    </div>
                </div>

                <div className="relative w-full overflow-hidden py-12 mt-12">
                    <div className="flex animate-infinite-scroll">
                        {/* Duplicate companies array to create seamless loop */}
                        {[...companies, ...companies, ...companies].map((company, index) => (
                            <Link
                                key={index}
                                href={company.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 mx-4 p-4 bg-white rounded-xl shadow-lg flex items-center justify-center h-24 w-48 md:w-60 transition-transform duration-300 hover:scale-105"
                            >
                                <Image
                                    src={company.src || "/placeholder.svg"}
                                    alt={`${company.name} logo`}
                                    width={180}
                                    height={60}
                                    className="object-contain max-h-full max-w-full"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}