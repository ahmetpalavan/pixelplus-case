import React, { useState, useEffect } from "react";

interface UserDetailsProps {
  userId: string;
}

interface UserDetail {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userId }) => {
  const [userDetails, setUserDetails] = useState<UserDetail | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const data = await response.json();
      setUserDetails(data.data);
    };

    fetchUserDetails();
  }, [userId]);

  if (!userDetails) return <div>Loading...</div>;

  return (
    <div>
      <img src={userDetails.avatar} alt={`${userDetails.first_name} ${userDetails.last_name}`} />
      <h1>{`${userDetails.first_name} ${userDetails.last_name}`}</h1>
      <p>Email: {userDetails.email}</p>
    </div>
  );
};

export default UserDetails;
