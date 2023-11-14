import React, { useState } from 'react';

const CreateUser: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [job, setJob] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, job }),
    });
    const data = await response.json();
    alert(`User Created! ID: ${data.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="Job"
        required
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
