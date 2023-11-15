"use client";

import Loading from "@/components/Loading";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import styles from "@/app/styles/variables.module.scss";
import ErrorComponent from "./Error";

interface UserDetail {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserDetailsProps {
  id: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ id }) => {
  const { data, isLoading, isError } = useQuery<UserDetail, Error>(["userDetails", id], async () => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    return response.data.data;
  });

  if (isLoading) {
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
