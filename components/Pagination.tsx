import React from "react";
import styles from "@/app/styles/variables.module.scss";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <button
        className={`${styles.pagination_button} ${currentPage === 1 ? styles.disabled : ""}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${styles.pagination_button} ${currentPage === number ? styles.pagination_button_active : ""}`}
        >
          {number}
        </button>
      ))}
      <button
        className={`${styles.pagination_button} ${currentPage === totalPages ? styles.disabled : ""}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </nav>
  );
};

export default Pagination;
