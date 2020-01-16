import React, { useState, useEffect } from 'react';

import './styles.css';

function DevRegister({ onSubmit }) {
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

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithub_username('');
    setTechs('');
  }

  return (
    <form className="register_form" onSubmit={handleSubmit}>
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
  )
}

export default DevRegister;