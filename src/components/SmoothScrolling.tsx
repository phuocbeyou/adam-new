/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: any;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScrolling;
