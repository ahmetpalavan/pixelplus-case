import React from "react";
import styles from "@/app/styles/variables.module.scss";
import { motion } from "framer-motion";
interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div>
      <header className={styles.header}>
        <motion.div initial={{ opacity: 0, y: -500, scale: 0.5 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1 }}>
          <h1 className={styles.headerTitle}>{title}</h1>
        </motion.div>
      </header>
    </div>
  );
};

export default Header;
