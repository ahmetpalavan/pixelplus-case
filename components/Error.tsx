import React from "react";
import PropTypes from "prop-types";
import styles from "@/app/styles/variables.module.scss";

interface ErrorComponentProps {
  message?: string;
}

const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
    </div>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string,
};

ErrorComponent.defaultProps = {
  message: "An unexpected error has occurred.",
};

export default ErrorComponent;
