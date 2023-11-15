"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import UserCard from "@/components/UserCard";
import { useModalStore } from "@/stores/useModalStore";
import { useUsers } from "@/hooks/queries";
import React, { useState } from "react";
import styles from "@/app/styles/variables.module.scss";
import ErrorComponent from "@/components/Error";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isError, error, isLoading } = useUsers(currentPage);

  const openModal = useModalStore((state) => state.onOpen);

  const variants = {
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.25,
      },
    }),
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
  };

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
          <motion.div initial={{ opacity: 0, x: -500, scale: 0.5 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1 }}>
            <h2 className={styles.membersTitle}>All Members</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 500, scale: 0.5 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1 }}>
            <button onClick={() => openModal("createUserModal")} className={styles.button}>
              Create New Member
            </button>
          </motion.div>
        </section>
        <div className={styles.cardsContainer}>
          {data?.data.map((user, index) => (
            <motion.div
              key={user.id}
              custom={index}
              variants={variants}
              initial={index < 3 ? "hiddenLeft" : "hiddenRight"}
              animate="visible"
            >
              <UserCard user={user} />
            </motion.div>
          ))}
        </div>
      </section>
      <Pagination currentPage={currentPage} totalPages={data?.total_pages || 0} onPageChange={handlePageChange} />
      <Footer />
    </div>
  );
};

export default Home;
