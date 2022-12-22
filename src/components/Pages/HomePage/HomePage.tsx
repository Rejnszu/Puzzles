import React from "react";
import Header from "../../UI/Header";
import { motion } from "framer-motion";
import SelectLayout from "./Select/SelectLayout";
const HomePage = () => {
  return (
    <motion.main
      initial={{ filter: "blur(5px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
    >
      <Header>Puzzles</Header>
      <SelectLayout />
    </motion.main>
  );
};

export default HomePage;
