"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative h-[600px] w-full p-5">
      <motion.h1
        className="font-sans text-6xl font-bold text-white relative mt-4"
        initial={{ fontSize: "10px", opacity: 0 }}
        animate={{ fontSize: "40px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <motion.span
          initial={{ backgroundPosition: "0%", backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="mr-2 text-black"
        >
          Hi, Iam Lohith Poojary
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default Header;
