import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './Main.css';
import './App.css';

import DevRegister from './components/DevRegister';
import DevItem from './components/DevItem';
import Dialog from './components/ui/dialog';

function App() {
  const [ devs, setDevs ] = useState([]);
  const [ classNames, setClassNames ] = useState('');
  const [ dlgMessage, setDlgMessage ] = useState('');

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
    if (response.data.message === 'Dev already registered!') {
      setClassNames('error')
      setDlgMessage('O usuário ja existe')

      setTimeout(() => {
        setClassNames('');
        setDlgMessage('');
      }, 2000);
    }
    else {
      setDevs([...devs, response.data]);
    }
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
      <Dialog message={dlgMessage} classNames={classNames}/>
    </div>
  );
}

export default App;
