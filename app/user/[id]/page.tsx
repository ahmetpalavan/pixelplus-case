import styles from "@/app/styles/variables.module.scss";
import ErrorComponent from "@/components/Error";
import UserDetails from "@/components/UserDetails";
import React from "react";

const UserDetailsPage: React.FC = ({ params }: any) => {
  if (!params) {
    return <ErrorComponent message="User not found!" />;
  }

  return (
    <div className={styles.userDetailsLayout}>
      <UserDetails id={params.id} />
    </div>
  );
};

export default UserDetailsPage;
