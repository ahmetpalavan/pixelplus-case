"use client";

import styles from "@/app/styles/variables.module.scss";
import Loading from "@/components/Loading";
import { useUserDetail } from "@/hooks/queries";
import React from "react";
import ErrorComponent from "./Error";

interface UserDetailsProps {
  id: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ id }) => {
  const { data, isLoading, isError } = useUserDetail(id);

  if (isLoading) {
    setTimeout(() => {}, 3000);
    return <Loading size={150} color="#123abc" />;
  }

  if (isError) {
    return <ErrorComponent message="User not found" />;
  }

  if (!data) {
    return <ErrorComponent message="User not found" />;
  }

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.memberCard}>
        <h1 className={styles.membersTitle}>User Details</h1>
        <img src={data.avatar} alt={`${data.first_name} ${data.last_name}`} className={styles.avatar} />
        <h2 className={styles.name}>
          Name: {data.first_name} {data.last_name}
        </h2>
        <p className={styles.email}>Email: {data.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
