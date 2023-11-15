"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import UserCard from "@/components/UserCard";
import { useModalStore } from "@/hooks/useModalStore";
import { useUsers } from "@/hooks/useUsers";
import React, { useState } from "react";
import styles from "@/app/styles/variables.module.scss";
import ErrorComponent from "@/components/Error";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isError, error, isLoading } = useUsers(currentPage);

  const openModal = useModalStore((state) => state.onOpen);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <Loading size={150} color="#123abc" />;
  }
  if (isError && error) return <ErrorComponent message={error.message} />;

  return (
    <div className={styles.main}>
      <Header title="Pixelplus Case Study" />
      <section className={styles.mainContent}>
        <section className={styles.subheaderContent}>
          <h2 className={styles.membersTitle}>All Members</h2>
          <button onClick={() => openModal("createUserModal")} className={styles.button}>
            Create New Member
          </button>
        </section>
        <div className={styles.cardsContainer}>
          {data?.data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>
      <Pagination currentPage={currentPage} totalPages={data?.total_pages || 0} onPageChange={handlePageChange} />
      <Footer />
    </div>
  );
};

export default Home;
