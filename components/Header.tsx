import React from "react";
import styles from "@/app/styles/variables.module.scss";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
      </header>
    </div>
  );
};

export default Header;
