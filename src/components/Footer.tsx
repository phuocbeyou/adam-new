/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Scrolling } from "./LineFooter";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      <Scrolling />

      {/* Main content with animation */}
      <motion.div
        className="px-6 md:px-12 py-12 max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
            className="w-30 h-auto mr-2"
          />
          <span className="text-black font-bold">
            0 x a d n 2 s d a n 2 y o 2 8 u 0 x
          </span>
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
              className="w-10 h-10 p-2 flex mb-[-50px] items-center justify-center rounded-full bg-black border border-white hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              <Icon className="text-white w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex justify-between items-center text-xs text-gray-500 mt-10 px-4">
          <span>Private Policy</span>
          <span>Term of Condition</span>
        </div>
      </motion.div>

      {/* Background image */}
      <img
        src="/bg/footer.png"
        alt="footer"
        className="absolute bottom-[-5px] w-full z-0 pointer-events-none"
      />
    </div>
  );
};
