import React from "react";
import styles from "@/app/styles/variables.module.scss";
import { useRouter } from "next/navigation";
import "@/app/styles/global.scss";

const UserCard = ({ user }: any) => {
  const router = useRouter();

  const handleUserDetails = () => {
    router.push(`/user/user-detail/${user.id}`);
  };

  return (
    <div className={styles.memberCard}>
      <img className={styles.avatar} src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h3 className={styles.name}>
        {user.first_name} {user.last_name}
      </h3>
      <p className={styles.email}>{user.email}</p>
      <button className={styles.reviewButton} onClick={handleUserDetails}>
        Review
      </button>
    </div>
  );
};

export default UserCard;
