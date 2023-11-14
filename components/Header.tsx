import React from "react";
import styles from "@/app/variables.module.scss";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Pixelplus Case Study</h1>
      </header>
    </div>
  );
};

export default Header;
