import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './Sidebar.css';
import './Main.css';
import './App.css';

import DevRegister from './components/DevRegister';
import DevItem from './components/DevItem';

function App() {
  const [ devs, setDevs ] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
    setDevs([...devs, response.data]);
  }

  return (
    <div className="app">
      <aside className="register">
        <h2 className="register_title">Cadastrar</h2>
        <DevRegister onSubmit={handleAddDev}/>
      </aside>
      <main className="main">
        <ul className="devs">
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
