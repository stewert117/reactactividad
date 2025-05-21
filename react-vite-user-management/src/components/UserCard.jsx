import React from 'react';
import styles from './styles/UserCard.module.css';

function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
    </div>
  );
}

export default UserCard;