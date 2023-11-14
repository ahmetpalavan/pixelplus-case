"use client";

import React, { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";
import styles from "@/app/variables.module.scss";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  page: number;
  total_pages: number;
  data: User[];
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
        const data: ApiResponse = await response.json();
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Fetching users failed", error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.main}>
      <Header />
      <section className={styles.mainContent}>
        <h2 className={styles.membersTitle}>All Members</h2>
        <button className={styles.createMemberButton}>Create New Member</button>
        <div className={styles.cardsContainer}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
