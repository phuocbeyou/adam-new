"use client";

import { useEffect, useRef } from "react";

export default function AudioTrigger() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleUserInteraction = () => {
            if (!audioRef.current) {
                const audio = new Audio("/sound/sound_main.mp3");
                audio.volume = 0.5;
                audio.loop = true;

                // Bắt buộc gọi play() trong chính event handler
                audio
                    .play()
                    .then(() => {
                        audioRef.current = audio;
                        console.log("🔊 Âm thanh đang phát...");
                    })
                    .catch((err) => {
                        console.warn("🚫 Không thể phát âm thanh:", err.message);
                    });
            }

            window.removeEventListener("click", handleUserInteraction);
            window.removeEventListener("keydown", handleUserInteraction);
        };

        // Chỉ dùng click + keydown
        window.addEventListener("click", handleUserInteraction);
        window.addEventListener("keydown", handleUserInteraction);

        return () => {
            window.removeEventListener("click", handleUserInteraction);
            window.removeEventListener("keydown", handleUserInteraction);
        };
    }, []);

    return null;
}
