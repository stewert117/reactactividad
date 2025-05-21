import { useEffect, useState } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import UserList from './UserList';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Lista de Usuarios</h1>
      {loading ? <p>Cargando usuarios...</p> : <UserList users={users} />}
      <Footer />
    </div>
  );
}

export default App;
