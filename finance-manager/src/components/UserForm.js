import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user = {}, onSubmit }) => {
  const [username, setUsername] = useState(user.username || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, email };
    if (password) {
      userData.password = password;
    }

    try {
      if (user.id) {
        await axios.put(`/api/users/${user.id}`, userData);
      } else {
        await axios.post('/api/users', userData);
      }
      onSubmit();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
