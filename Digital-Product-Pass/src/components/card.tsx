import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Card({
  children,
  duration = 0.5,
  title,
  className = "",
}: {
  children?: ReactNode;
  duration?: number;
  title?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`w-full px-2 py-4 rounded-lg border-[1px] border-gray-200 ${className}`}
      initial={{
        opacity: 0,
        y: "20px",
      }}
      whileInView={{
        opacity: 1,
        y: "0px",
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      {title && (
        <h2 className="text-center text-gray-900 text-xl mb-4 font-semibold">
          {title}
        </h2>
      )}
      {children}
    </motion.div>
  );
}
