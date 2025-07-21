/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Scrolling } from "./LineFooter";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="relative overflow-hidden text-white">
      {/* Background image - lớp dưới cùng */}
      <img
        src="/footer/bg.png"
        alt="footer background"
        className="absolute inset-0 w-full h-auto object-cover z-[-30] pointer-events-none"
      />

      {/* Gradient overlay - lớp giữa */}
      <div
        className="absolute inset-0 z-[-20]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8) , rgba(142, 109, 18, 1)",
        }}
      />

      {/* Scrolling text - có thể để z-10 */}
      <Scrolling />

      {/* Main content */}
      <motion.div
        className="relative z-10 px-6 md:px-12 py-12 max-w-6xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, scale: 0.95, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      >
        {/* Logo & token info */}
        <div className="flex justify-center items-center gap-4">
          <img
            src="/logo/logo.png"
            alt="$ADAM"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold">$ADAM</span>
        </div>

        <div className="inline-flex border-2 border-white items-center px-10 py-4 bg-gradient-to-r from-[#A1D5FF] to-[#3499FF] rounded-full text-white font-mono text-sm transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <img
            src="/logo/solana.png"
            alt="Solana"
            className="w-30 h-auto mr-3"
          />
          <strong className="text-black text-[15px] font-bold">
            0 x a d n 2 s d a n 2 y o 2 8 u 0 x
          </strong>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-start space-y-3 text-gray-300 mx-auto leading-relaxed mt-20 mb-30">
          <p>“$ADAM” is a conceptual asset inspired by myth and meaning.</p>
          <p>
            It is not associated with any individual, institution, or religious
            doctrine. All symbolism, narratives, and artwork are
            community-driven and intended for expressive, educational, and
            altruistic purposes only.
          </p>
          <p>
            We will never DM, email, or contact you to ask for your wallet info
            or private keys.
          </p>
          <p>Stay safe, stake with intention.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-6">
          {[FaXTwitter, FaTelegram, FaDiscord].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 p-2 flex mb-[-50px] items-center justify-center rounded-full bg-white/20 border border-white hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              <Icon className="text-white w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex justify-between items-center text-xs text-white mt-10 px-4">
          <span>Private Policy</span>
          <span>Term of Condition</span>
        </div>
      </motion.div>

      {/* Footer decorative image */}
      <img
        src="/footer/footer.png"
        alt="footer"
        className="absolute bottom-0 w-full z-0 pointer-events-none"
      />
    </div>
  );
};
