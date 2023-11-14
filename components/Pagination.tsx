import React from "react";
import styles from "@/app/variables.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${styles.pagination__button} ${currentPage === number ? styles["pagination__button--active"] : ""}`}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
