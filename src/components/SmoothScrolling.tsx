"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  const pathname = usePathname();
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    // Khi pathname thay đổi, fade out rồi update content
    setDisplayedChildren(children);
  }, [pathname, children]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ minHeight: "100vh" }} // Đảm bảo không jump layout
    >
      {displayedChildren}
    </motion.div>
  );
}

export default SmoothScrolling;
