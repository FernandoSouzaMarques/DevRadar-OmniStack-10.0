import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './Sidebar.css';
import './Main.css';
import './App.css';

function App() {
  const [ devs, setDevs ] = useState([]);
  const [ github_username, setGithub_username ] = useState('');
  const [ techs, setTechs ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setLatitude(latitude);
      setLongitude(longitude);
    }, (err) => {
      console.error(err)
    },
    {
      timeout: 30000,
    });
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,

    })

    setGithub_username('');
    setTechs('');

    setDevs([...devs, response.data]);

  }

  return (
    <div className="app">
      <aside className="register">
        <h2 className="register_title">Cadastrar</h2>
        <form className="register_form" onSubmit={handleAddDev}>
          <div className="register_block-field">
            <label className="register_label" htmlFor="github_username">Usuário do Github</label>
            <input
            className="register_field"
            name="github_username"
            id="github_username"
            value={github_username}
            onChange={e => setGithub_username(e.target.value)}
            required/>
          </div>

          <div className="register_block-field">
            <label className="register_label" htmlFor="techs">Tecnologias</label>
            <input
            className="register_field"
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required/>
          </div>

          <div className="register_group">
            <div className="register_block-field">
              <label className="register_label" htmlFor="latitude">Latitude</label>
              <input
              className="register_field"
              name="latitude"
              type="number"
              id="latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              required/>
            </div>
            <div className="register_block-field">
              <label className="register_label" htmlFor="longitude">Longitude</label>
              <input
              className="register_field"
              name="longitude"
              type="number"
              id="longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required/>
            </div>
          </div>
          <button className="register_submit" type="submit">Salvar</button>
        </form>
      </aside>
      <main className="main">
        <ul className="devs">
          {devs.map(dev => (
            <li key={dev._id} className="dev">
            <header className="user">
              <img className="user_avatar" src={dev.avatar_url} alt={dev.name}/>
              <div className="user_info">
              <h3 className="user_name">{dev.name}</h3>
                <strong className="user_techs">{dev.techs.join(', ')}</strong>
              </div>
            </header>
            <p className="dev_bio">{dev.bio}</p>
            <a className="dev_github" href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
          </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
