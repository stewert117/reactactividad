import React from 'react';
import { useUsers } from '../hooks/useUsers';
import UserCard from './UserCard';
import styles from './styles/UserCard.module.css';

function UserList() {
  const { users, loading } = useUsers();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;