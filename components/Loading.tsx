import React from "react";
import { CircleLoader } from "react-spinners";
import styles from "@/app/styles/variables.module.scss";

interface LoadingProps {
  size: number;
  color: string;
}

const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  return (
    <div className={styles.spinnerContainer}>
      <CircleLoader size={size} color={color} loading={true} />
    </div>
  );
};

export default Loading;
