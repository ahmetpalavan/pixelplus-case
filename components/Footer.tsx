import React from "react";
import styles from "@/app/styles/variables.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Copyright 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
